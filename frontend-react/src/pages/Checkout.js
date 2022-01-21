import "./Checkout.css"
import React, { useState, useReducer } from "react";
import CartItems from "../components/CartItems";
import Changename from "../components/Checkout-components/Changename";
import ShippingLocation from "../components/Checkout-components/ShippingLocation";
import axios from 'axios';
import emailjs, { init } from '@emailjs/browser'

function Checkout(){

    const [products] = useState([]);
    const [details, setDetails] = useState([]);
    const [Price, setPrice] = useState();
    const [Ordered, setOrdered] = useState(false);
    const [, forceUpdate] = useReducer(x => x + 1, 0); //Used to force cart to update when new product added

    init("user_EtrkOabsqKejNGHRv9jOl"); // Used for email
    
    var today = new Date() //Miks kasutada datei maksekirjeldusel? Sest siis saab timestampiga kokku panna orderi. Eks muidugi oleks parim saata backendi see, aga praeguses seisus näeb leht tellimust ainult umbes 1-4 korda kuus. Ehk pole nii tähtis praegusel hetkel
    var sum; // The sum of all the collages and shipping costs (which is 2.99 euros for all shipping choices)
    var postal = [];
    var AlreadySent = 0;

    //Get the cart
    if(!Ordered){
        if(products){
            products.splice(0, 20);
        }

        for (var i = 0; i < 20; i++) {
            const Item = "Product" + i;
            const output = JSON.parse(localStorage.getItem(Item));

            if(output !== null){
                //Add to JSON that this data is coming from Checkout.js
                Object.assign(output,{
                    dataFrom: "Checkout" 
                })
                products.push(output);
                //forceUpdate();
            }
        }

        //Calculate the sum of products
        const length = products.length;
        sum = 0;

        for (var i = 0; i < length; i++){
            sum = sum + products[i].summary;
        }
    }

    function funcDetails(data){
        setDetails(data);
    }

    function funcShipping(data){
        postal = data;
    }

    function deleteProduct(){
        //Delete previous array
        products.splice(0, 20);

        //Read products from local storage and push them to array
        for (var i = 0; i < 20; i++) {
            const Item = "Product" + i;
            const output = JSON.parse(localStorage.getItem(Item));

            if(output !== null){
                products.push(output);
            }
        }

        forceUpdate();
    }

    //Send the order to backend
    function sendData(){
        if(postal.parcelAddress && products && details.email && details.firstname && details.surname && details.phone && products[0] !== null){
            for (var i = 0; i < 20; i++) {
                const Item = "Product" + i;
                const output = JSON.parse(localStorage.getItem(Item));

                if(output !== null){
                    
                    var mergedObj = {...output,...details,...postal};
                    var customerName = details.firstname + " " + details.surname;

                    //Send to Backend
                    axios.post("http://localhost:8081/api/order/create", mergedObj, {
                    }).then(() => {
                        if(AlreadySent !== 1){
                            //Send emails, the if checks that we do this only once
                            emailjs.send("service_evuad0h","template_2fa2tzz",{
                                customer_name: customerName,
                                customer_email: details.email,
                                customer_phone: details.phone,
                                shipping_provider: postal.transCo,
                                shipping_location: postal.parcelAddress
                            }).then(() => {
                                emailjs.send("service_evuad0h","template_i91e1f8",{
                                to_name: details.firstname,
                                email: details.email,
                                order_time: today.getMonth() + "" + today.getDate() + "" + today.getHours() + today.getMinutes(),
                                order_cost: parseFloat(sum + 2.99).toFixed(2)})
                            })

                            AlreadySent = 1;
                        }
                    })
                }
            }
            setPrice(sum + 2.99);
            //After the for loop
            setOrdered(true);
            localStorage.clear();
        }
    }
    
    return(
        <div>
            <hr />

            {Ordered &&
                <div>
                    <h2 style={{textAlign: "center"}}>Tellimus</h2>
                    <p style={{textAlign: "center"}}>Me oleme saanud teie tellimuse kätte. Et <b>maksta tellimuse eest</b>, palun tehke ülekanne järgmisele kontole:</p>
                    <table>
                        <tr>
                            <th>Konto nimi:</th>
                            <th>Konto number:</th>
                            <th>Makse kirjeldus:</th>
                            <th>Summa:</th>
                        </tr>
                        <tr>
                            <th>Mälestused.ee või Marcus-Indrek Simmer</th>
                            <th>EE467700771005735625</th>
                            <th>{today.getMonth() + "" + today.getDate() + "" + today.getHours() + today.getMinutes()}</th>
                            <th>{parseFloat(Price).toFixed(2)}€</th>
                        </tr>
                    </table>
                    <p style={{textAlign: "center", marginTop: "16px"}}>Peale ülekande laekumist, saate emaili teatega, et ülekanne on kohale jõudnud ning kollaaž on töös.</p>
                    <p style={{textAlign: "center", marginTop: "16px"}}>Küsimuste korral palun kontakteeruge info@mälestused.ee</p>
                </div>
            }

            {!Ordered &&
            <div>
                <div>
                    <h2 style={{textAlign: "center"}}>Ostukorv:</h2>
                    {products.length < 1 &&
                        <div style={{textAlign: "center", color: "red"}}><p>Teie ostukorv on tühi.</p></div>    
                    }
                    <CartItems items={products} funcDelete={deleteProduct}/>
                </div>

                <div className="center-child">
                    <Changename funcDetails={funcDetails}/>
                </div>

                <div className="center-child">
                    <ShippingLocation funcSendData={funcShipping} />
                </div>
                
                <div className="center-child">
                    <h3 className="center-text">Kokku:</h3>
                    
                    <p className="center-text" id="price">Kollaažid kokku: {parseFloat(sum).toFixed(2)}€</p>
                    <p className="center-text" id="price">Transport: 2.99€</p>
                    <hr id="price-underline" />
                    
                    <p className="center-text" id="price">Kokku: {parseFloat(sum + 2.99).toFixed(2)}€</p> 
                </div>


                

                <div className="center" style={{paddingTop: "75px", paddingBottom: "100px"}}>
                    <button id="button" onClick={sendData}>Esita tellimus</button>
                </div>
            </div>
            }
        </div>
    );
}

export default Checkout;
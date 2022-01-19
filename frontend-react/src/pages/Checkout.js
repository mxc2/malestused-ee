import "./Checkout.css"
import React, { useState, useReducer } from "react";
import CartItems from "../components/CartItems";
import Changename from "../components/Checkout-components/Changename";
import ShippingLocation from "../components/Checkout-components/ShippingLocation";
import axios from 'axios';
import emailjs, { init } from '@emailjs/browser'

function Checkout(){

    const [products, setProducts] = useState([]);
    const [details, setDetails] = useState([]);
    const [Ordered, setOrdered] = useState(false);
    init("user_EtrkOabsqKejNGHRv9jOl"); // Used for email

    var today = new Date()
    var time;
    

    //Used to force cart to update when new product added
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    
    if(products){
        products.splice(0, 20);
    }

    // Update the document title using the browser API
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

    function funcDetails(data){
        setDetails(data);
    }

    function sendData(){
        

        for (var i = 0; i < 20; i++) {
            const Item = "Product" + i;
            const output = JSON.parse(localStorage.getItem(Item));

            if(output !== null){
                
                var mergedObj = {...output,...details};

                axios.post("http://localhost:8081/api/order/create", mergedObj, {
                }).then(response => {
                    emailjs.send("service_evuad0h","template_i91e1f8",{
                        to_name: details.firstname,
                        email: details.email,
                    }).then(test =>{
                        setOrdered(true);
                        localStorage.clear();

                        time = today.getDate() + "" + today.getHours() + today.getMinutes();
                        console.log(time);
                    });
                });
            }
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
                        </tr>
                        <tr>
                            <th>Mälestused.ee või Marcus-Indrek Simmer</th>
                            <th>EE467700771005735625</th>
                            <th>{time}</th>
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
                    <CartItems items={products}/>
                </div>


                <div style={{marginTop: "16px", width: "55%", margin: "auto", maxWidth: "1320px"}}>
                    <Changename funcDetails={funcDetails}/>
                    <ShippingLocation />
                </div>

                <div style={{display: "block"}}>
                    <button onClick={sendData}>Esita tellimus</button>
                </div>
            </div>
            }
        </div>
    );
}

export default Checkout;
import "./Checkout.css"
import React, { useEffect, useState } from "react";
import CartItems from "../components/CartItems";
import Changename from "../components/Checkout-components/Changename";
import ShippingLocation from "../components/Checkout-components/ShippingLocation";

function Checkout(){

    const [products] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {

        products.splice(0, 20);

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
            }
        }
      });

    function funcDetails(data){
        setDetails(data);
    }

    function sendData(){
        console.log(details);

        for (var i = 0; i < 20; i++) {
            const Item = "Product" + i;
            const output = JSON.parse(localStorage.getItem(Item));

            if(output !== null){
                
                var mergedObj = {...output,...details};

                console.log(mergedObj);
            }
        }
    }
    
    return(
        <div>
            <hr />


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
    );
}

export default Checkout;
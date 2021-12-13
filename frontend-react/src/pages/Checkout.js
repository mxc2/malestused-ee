import "./Checkout.css"
import React, { useEffect, useState } from "react";
import CartItems from "../components/CartItems";
import Changename from "../components/Checkout-components/changename";

function Checkout(){

    const [products] = useState([]);
    const [test, setTest] = useState(false);

    useEffect(() => {

        products.splice(0, 20);

        // Update the document title using the browser API
        for (var i = 0; i < 20; i++) {
            const Item = "Product" + i;
            const output = JSON.parse(localStorage.getItem(Item));

            if(output === null){
                i = 20; //End FOR
            }else{
                //Add to JSON that this data is coming from Checkout.js
                Object.assign(output,{
                    dataFrom: "Checkout" 
                })

                products.push(output);
            }

            //If products is empty
            if (products[0] == null) {
                setTest(false);
            }else{
                //forceUpdate();
                setTest(true);
            }
        }

        console.log(products);
      });

    return(
        <div>
            <hr />

            <div className="left-checkout">
                <h2 style={{textAlign: "center"}}>Ostukorv:</h2>
                <CartItems items={products}/>
            </div>

            <div className="right-checkout">
                <Changename />
            </div>
        </div>
    );
}

export default Checkout;
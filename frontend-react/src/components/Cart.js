import "./Header.css"
import Cross from "../images/icons/cross.svg"
import { useState, useReducer, useEffect } from "react";
import CartItems from "./CartItems";



function Cart(){

    const [products] = useState([]);
    const [ItemInCart, setItemInCart] = useState(false);

    //Used to force cart to update when new product added
    const [, forceUpdate] = useReducer(x => x + 1, 0);

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

    //If products[] is empty
    if (products[0] == null) {
        setItemInCart(false);
    }else{
        forceUpdate();
        setItemInCart(true);
    }

    function CartToggleOff(){
        document.getElementById("cart-overlay").style.width = "0px";
        document.getElementById("exit-cart").style.marginRight = "-635px";
        //document.getElementById("bottom-button").style.display = "none";
    }

    function RedirectToCollagesCatalog(){
        History.push('/kollaažid');
        CartToggleOff();
    }

    function deleteProduct(data){
        console.log(products);
    }

    return(
        <div id="cart-overlay">
                <div id="cart-header">Ostukorv</div>
                <img id="exit-cart" src={Cross} alt="Lahkuge ostukorvist" onClick={CartToggleOff}></img>
                <hr className="cart-underline" />

                <div style={{color: "white"}}>
                    <p style={{color: "white"}}>{JSON.stringify(products.selectedCollageID)}</p>
                </div>

                {!ItemInCart && 
                
                <div onClick={RedirectToCollagesCatalog} className="cart-empty">
                    <p>Hmm...Tundub et teie ostukorv on tühi 🤔</p>
                    <p>Ei tea kust kollaaže leida? Vajuta siia</p>
                </div>
                }

                {ItemInCart && 
                <div>
                    <CartItems items={products} funcDelete={deleteProduct}/>

                    <button id="bottom-button">Arveldama</button>
                </div>
                }

        </div>
    );
}

export default Cart;
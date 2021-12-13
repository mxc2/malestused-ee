import "./Header.css"
import Cross from "../images/icons/cross.svg"
import { useState, useEffect, useReducer } from "react";
import CartItems from "./CartItems";



function Cart(){

    const [products, setProducts] = useState([]);
    const [test, setTest] = useState(false);

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    function CartToggleOff(){
        document.getElementById("cart-overlay").style.width = "0px";
        document.getElementById("exit-cart").style.marginRight = "-635px";
        //document.getElementById("bottom-button").style.display = "none";
    }

    function RedirectToCollagesCatalog(){
        History.push('/kollaažid');
        CartToggleOff();
    }

    return(
        <div id="cart-overlay">
                <div id="cart-header">Ostukorv</div>
                <img id="exit-cart" src={Cross} alt="Lahkuge ostukorvist" onClick={CartToggleOff}></img>
                <hr class="cart-underline" />

                <div style={{color: "white"}}>
                    <p style={{color: "white"}}>{JSON.stringify(products.selectedCollageID)}</p>
                </div>

                {!test && 
                
                <div onClick={RedirectToCollagesCatalog} className="cart-empty">
                    <p>Hmm...Tundub et teie ostukorv on tühi 🤔</p>
                    <p>Ei tea kust kollaaže leida? Vajuta siia</p>
                </div>
                }

                {test && 
                <div>
                    <CartItems items={products}/>

                    <button id="bottom-button">Arveldama</button>
                </div>
                }

        </div>
    );
}

export default Cart;
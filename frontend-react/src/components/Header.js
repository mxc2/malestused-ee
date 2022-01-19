import "./Header.css"
import { Link } from "react-router-dom"
import Logo from "../LogoTest.PNG"
import Cross from "../images/icons/cross.svg"
import History from "./History"
import CartItems from "./CartItems"
import AccountIcon from "../images/icons/user.png"
import AccountIconLoggedIn from "../images/icons/logged-in.png"
import ShoppingCart from "../images/icons/shopping-cart.png"

import { useState, useReducer } from "react";
//import Account from "../images/icons/account.svg"

function Navbar(props){

    const [products] = useState([]);
    const [ItemInCart, setItemInCart] = useState(false); //True == There are items in cart

    //Used to force cart to update when new product added
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    //CART
    function CartToggleOn(){
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

        //Show Cart
        document.getElementById("cart-overlay").style.width = "600px";
        document.getElementById("exit-cart").style.marginRight = "35px";
        //Need if because otherwise might get weird react errors
        if (document.getElementById('bottom-button') ){
            document.getElementById('bottom-button').style.marginRight = "50%";
        }
    }

    function CartToggleOff(){
        document.getElementById("cart-overlay").style.width = "0px";
        document.getElementById("exit-cart").style.marginRight = "-635px";
        if (document.getElementById('bottom-button') ){
            document.getElementById('bottom-button').style.marginRight = "-50%";
        }
    }

    //Redirect to kollaažid
    function RedirectToCollagesCatalog(){
        History.push('/kollaažid');
        CartToggleOff();
    }

    //Redirect to Checkout
    function RedirectToCheckout(){
        History.push('/tellimus');
        CartToggleOff();
    }

    return(
        <div>
            <div className="header">
                <Link to="/">
                    <img onClick={CartToggleOff} id="logo" src={Logo} alt="Logo" />
                </Link>

                <div className="header-buttons">
                    <Link to="/kollaažid">
                        {/*eslint-disable-next-line*/ }
                        <a onClick={CartToggleOff}>Kollaazid</a>
                    </Link>

                    <Link to="/meist">
                        {/*eslint-disable-next-line*/ }
                        <a style={{marginRight: "8px"}} onClick={CartToggleOff}>Meist</a>
                    </Link>

                    <img class="header-icon-buttons" src={ShoppingCart} alt="Ostukorv" onClick={CartToggleOn}></img>
					
                    {/*}
					<Link to="/register">
                        <a onClick={CartToggleOff}>Register</a>
                    </Link>                                      
                    {/* //Ilmselt peaks, logini voi registeri kohugi mujale panema, et müra veits vähemaks headeris  */}
                    {props.user ?
                    <Link to="/my-account"><img class="header-icon-buttons" style={{marginLeft: "8px"}} src={AccountIconLoggedIn} alt="Konto"></img></Link>:
                    <Link to="/login"><img class="header-icon-buttons" style={{marginLeft: "8px"}} src={AccountIcon} alt="Konto"></img></Link>
                    }
                    
                </div>
                
            </div>

            {/* Shopping cart overlay */}
            <div id="cart-overlay">
                <div id="cart-header">Ostukorv</div>
                <img id="exit-cart" src={Cross} alt="Lahkuge ostukorvist" onClick={CartToggleOff}></img>
                <hr className="cart-underline" />


                {!ItemInCart && 

                  <div onClick={RedirectToCollagesCatalog} className="cart-empty">
                      <p>Hmm...Tundub et teie ostukorv on tühi 🤔</p>
                      <p>Ei tea kust kollaaže leida? Vajuta siia</p>
                  </div>
                }

                {ItemInCart && 
                <div>
                    <div id="cart-item">
                        <CartItems items={products}/>
                    </div>
                    
                    <hr style={{margin: "0px", border: "1px solid white"}} />
                    
                    <button id="bottom-button" onClick={RedirectToCheckout}>Vormista tellimus</button>
                </div>
                }

            </div>
        </div>
    );
}

export default Navbar;
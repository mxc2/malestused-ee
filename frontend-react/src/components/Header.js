import "./Header.css"
import { useState, useReducer } from "react";
import { Link } from "react-router-dom"
import Logo from "../LogoTest.PNG"
import Cross from "../images/icons/cross.svg"
import History from "./History"
import CartItems from "./CartItems"
import MenuButton from "../images/icons/menu-button-three-horizontal-lines.png"
import AccountIcon from "../images/icons/user.png"
import AccountIconLoggedIn from "../images/icons/logged-in.png"
import ShoppingCart from "../images/icons/shopping-cart.png"

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

        //Hide other overlays
        mobileMenuClose();

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

    function mobileMenuOpen(){
        document.getElementById("mobileNavigation").style.height = "100%";
    }

    function mobileMenuClose(){
        document.getElementById("mobileNavigation").style.height = "0%";
    }

    return(
        <div>
            <div className="header">
                <Link to="/">
                    <img onClick={RedirectToCheckout} id="logo" src={Logo} alt="Logo" />
                </Link>

                <div className="header-buttons">
                    {/*eslint-disable-next-line*/ }
                    <a onClick={RedirectToCollagesCatalog}>Kollaazid</a>

                    <img id="cart-button" className="header-icon-buttons" src={ShoppingCart} alt="Ostukorv" onClick={CartToggleOn}></img>

                    {props.user ?
                    <Link to="/my-account"><img className="header-icon-buttons" style={{marginLeft: "8px"}} src={AccountIconLoggedIn} alt="Konto"></img></Link>:
                    <Link id="login-button" to="/login"><img className="header-icon-buttons" style={{marginLeft: "8px"}} src={AccountIcon} alt="Konto"></img></Link>
                    }
                    
                </div>

                <div className="header-buttons-mobile">
                    <img src={MenuButton} onClick={mobileMenuOpen} alt="Mobile Menu Button"></img>
                </div>
                

                {/* Menu for mobile screens */}
                {/* Some help from: https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp*/}
                <div id="mobileNavigation" className="overlay">
                    <p className="closebtn" style={{cursor: "pointer"}} onClick={mobileMenuClose}>&times;</p>
                        <div className="overlay-content">
                            <Link to="/kollaažid">
                                <p onClick={mobileMenuClose}>Kollaazid</p>
                            </Link>
                            <Link to="/">
                                <p onClick={CartToggleOn}>Ostukorv</p>
                            </Link>
                            <Link to="/login">
                                <p onClick={mobileMenuClose}>Minu konto</p>
                            </Link>
                        </div>
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
                        <CartItems items={products} funcDelete={deleteProduct}/>
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
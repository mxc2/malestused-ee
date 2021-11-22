import "./Header.css"
import { Link} from "react-router-dom"
import Logo from "../LogoTest.PNG"
import Cross from "../images/icons/cross.svg"
import History from "./History"
//import Account from "../images/icons/account.svg"

function Navbar(){

    //CART
    function CartToggleOn(){
        document.getElementById("cart-overlay").style.width = "600px";
        document.getElementById("exit-cart").style.marginRight = "35px";
    }

    function CartToggleOff(){
        document.getElementById("cart-overlay").style.width = "0px";
        document.getElementById("exit-cart").style.marginRight = "-635px";
    }

    function RedirectToCollagesCatalog(){
        History.push('/kollaažid');
        CartToggleOff();
    }

    //ACCOUNT
    function AccountToggleOn(){
        document.getElementById("account-overlay-background").style.display = "block";
    }

    function AccountToggleOff(){
        document.getElementById("account-overlay-background").style.display = "none";
    }

    return(
        <div>
            <div className="header">
                <Link to="/">
                    <img onClick={CartToggleOff} id="logo" src={Logo} alt="Logo" />
                </Link>

                <div className="header-buttons">
                    <Link to="/kollaažid">
                        <a onClick={CartToggleOff}>Kollaazid</a>
                    </Link>

                    <Link to="/meist">
                        <a onClick={CartToggleOff}>Meist</a>
                    </Link>
                    
                    <a onClick={CartToggleOn}>Ostukorv</a>

                    <a onClick={AccountToggleOn}>Konto</a>
                    
                </div>
                
            </div>

            {/* Shopping cart overlay */}
            <div id="cart-overlay">
                <div id="cart-header">Ostukorv</div>
                <img id="exit-cart" src={Cross} alt="Lahkuge ostukorvist" onClick={CartToggleOff}></img>
                <hr class="cart-underline" />

                <div onClick={RedirectToCollagesCatalog} className="cart-empty">
                    <p>Hmm...Tundub et teie ostukorv on tühi 🤔</p>
                    <p>Ei tea kust kollaaže leida? Vajuta siia</p>
                </div>
            </div>

            {/* Account Overlay */}
            <div id="account-overlay-background">
                <div id="account-overlay">
                    <div id="account-header">Sisse logimine</div>
                    
                    <img id="exit-account" src={Cross} alt="Lahkuge" onClick={AccountToggleOff}></img>
                    {/*}
                    <div className="row">
                        <label for="email" id="account-label">Email</label>
                        <input type="text" id="email" placeholder="Teie email..."></input>
                    </div>
                    */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
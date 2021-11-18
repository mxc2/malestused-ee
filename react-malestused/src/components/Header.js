import "./Header.css"
import { Link } from "react-router-dom"
import Logo from "../LogoTest.PNG"

function Navbar(){
    return(
        <div>
            <div className="header">
                <Link to="/">
                    <img id="logo" src={Logo} alt="Logo" />
                </Link>

                <div className="header-buttons">
                    <Link to="/kollaažid">
                        <a>Kollaazid</a>
                    </Link>

                    <Link to="/meist">
                        <a>Meist</a>
                    </Link>
                    
                    <Link to="/ostukorv">
                        <a>Ostukorv</a>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Navbar;
import "./Hero.css"
import { Link } from "react-router-dom";
import Collage from "../images/hero-collages/NewDesignGoldSalePrice.png";

function Hero(){

    function Hahuclicked(){
        document.getElementById("hero-product").style.marginRight = "1024px";
    }

    return(
        <div className="hero-image">
            <div className="hero-text">
                <h1 onClick={Hahuclicked} id="h1">Muuda mälestused</h1>
                <h1 id="h1">unustamatuks</h1>
                <h3 style={{fontWeight: "200", color: "#D3D3D3"}}>Teie soovidele disainitud kollaažid</h3>
                <Link to="/kollaažid">
                    <button id="btn">Telli kohe</button>
                </Link>
            </div>

            <div>
                <img id="hero-product" src={Collage} alt="Background"></img>
            </div>
        </div>
    )
}

export default Hero;
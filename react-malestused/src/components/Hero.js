import "./Hero.css"
import { Link } from "react-router-dom";

function Hero(){
    return(
        <div className="hero-image">
            <div className="hero-text">
                <h1 id="h1">Muuda mälestused</h1>
                <h1 id="h1">unustamatuks</h1>
                <h3 style={{fontWeight: "200", color: "#D3D3D3"}}>Teie soovidele disainitud kollaažid</h3>
                <Link to="/kollaažid">
                    <button id="btn">Telli kohe</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero;
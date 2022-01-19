import "./Footer.css"
import { Link } from "react-router-dom"

function Footer(){
    return(
        <div className="footer">
            <table>
                <tr>
                    <td className="footer-td">
                        <Link className="footer-button" to="/">
                            Koduleht
                        </Link> 
                    </td>
                    <td className="footer-td">
                        
                    </td>
                    <td className="footer-td">
                        Sotsiaalmeedia
                    </td>
                </tr>
                <tr>
                    <td className="footer-td">
                        <Link className="footer-button" to="/kollaažid">
                            Kollaažid
                        </Link> 
                    </td>
                    <td className="footer-td">
                        
                    </td>
                    <td className="footer-td">
                        Facebook
                    </td>
                </tr>
                <tr>
                    <td className="footer-td">
                        <Link className="footer-button" to="/meist">
                            Meist
                        </Link> 
                    </td>
                    <td className="footer-td">
                        
                    </td>
                    <td className="footer-td">
                        
                    </td>
                </tr>
                <tr>
                    <td className="footer-td">
                        <Link className="footer-button" to="/my-account">
                            Minu konto
                        </Link> 
                    </td>
                    <td className="footer-td">
                        
                    </td>
                    <td className="footer-td">
                        
                    </td>
                </tr>
            </table>

            <p style={{marginTop: "48px", textAlign: "center", color: "#a3a3a3"}}>Marcus-Indrek Simmer and Margen Peterson 2022</p>
        </div>
    );
}

export default Footer;
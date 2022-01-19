import "./Footer.css"
import { Link } from "react-router-dom"

function Footer(){
    return(
        <div className="footer">
            <table>
                <tbody>
                    <tr>
                        <td className="footer-td">
                            <Link className="footer-button" to="/">
                                Koduleht
                            </Link> 
                        </td>
                        <td className="footer-td">
                            
                        </td>
                        <td className="footer-td">
                            
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="footer-td">
                            <Link className="footer-button" to="/kollaažid">
                                Kollaažid
                            </Link> 
                        </td>
                        <td className="footer-td">
                            
                        </td>
                        <td className="footer-td">
                            
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="footer-td">
                            <Link className="footer-button" to="/meist">
                                Meist
                            </Link> 
                        </td>
                        <td className="footer-td  footer-button">
                            Kontakt
                        </td>
                        <td className="footer-td  footer-button">
                            Sotsiaalmeedia
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className="footer-td">
                            <Link className="footer-button" to="/my-account">
                                Minu konto
                            </Link> 
                        </td>
                        <td className="footer-td footer-button">
                            info@mälestused.ee
                        </td>
                        <td className="footer-td">
                            <a className="footer-button" href="https://www.facebook.com/malestused.ee" target="noopener">Facebook</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <p style={{marginTop: "48px", textAlign: "center", color: "#a3a3a3"}}>Marcus-Indrek Simmer and Margen Peterson 2022</p>
        </div>
    );
}

export default Footer;
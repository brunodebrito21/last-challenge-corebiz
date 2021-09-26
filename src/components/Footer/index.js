import React from "react"
import "./footer.css"
import logo_Footer from "./assets/logo_Footer.svg"
import facebook_icon from "./assets/facebook_icon.svg"
import instagram_icon from "./assets/instagram_icon.svg"
import linkedin_icon from "./assets/linkedin_icon.svg"

export default function Footer(){
    return(
        <footer>
            <div className="leftBox">
                <div className="logo_socialMedia">
                    <div className="logo">
                        <img src={logo_Footer} alt="logo da corebiz"/>
                        <span>direitos reservados, corebiz 2021</span>
                    </div>
                    <div className="socialMedia">
                        <a href="https://www.corebiz.ag/pt/about/"target="_blank" rel="noopener noreferrer"><img src={facebook_icon} alt="ícone do facebook"/></a>
                        <a href="https://www.corebiz.ag/pt/about/"target="_blank" rel="noopener noreferrer"><img src={instagram_icon} alt="ícone do instagram"/></a>
                        <a href="https://www.corebiz.ag/pt/about/"target="_blank" rel="noopener noreferrer"><img src={linkedin_icon} alt="ícone do linkedin"/></a>
                    </div>
                </div>
                <div className="linksFooter">
                        <ul>
                            <li>
                                <a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noopener noreferrer">a corebiz</a>
                            </li>
                            <li>
                                <a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noopener noreferrer">serviços</a>
                            </li>
                            <li>
                                <a href="https://www.corebiz.ag/pt/about/"target="_blank" rel="noopener noreferrer">cases</a>
                            </li>
                            <li>
                                <a href="https://www.corebiz.ag/pt/about/"target="_blank" rel="noopener noreferrer">contato</a>
                            </li>
                        </ul>
                </div>
            </div>
            <div className="countriesAdress">
                <div className="country">
                    <h2>.Brasil</h2>
                    <p>Avenida Andrômeda, 2000. Bloco 6 e 8 Alphaville SP </p>
                    <p>R. Ifigenia Maria de Oliveira, 3793 Jr. Piratininga Franca SP</p>
                </div>
                <div className="country">
                    <h2>.Argentina</h2>
                    <p>Soler 5518, 3 Piso C1425BYF Palermo Hollywood CABA</p>
                </div>
                <div className="country">
                    <h2>.Mexico</h2>
                    <p>Blvd. Miguel de Cervantes Saavedra 169, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX</p>
                </div>
                <div className="country">
                    <h2>.Chile</h2>
                    <p>Roberto del Río 1137, Providencia.</p>
                </div>
            </div>
        </footer>
    )
}
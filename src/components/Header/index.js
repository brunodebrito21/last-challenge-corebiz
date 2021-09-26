import React from "react"
import logo from "./assets/logo.svg"
import "./header.css"

export default function Header(){
    function handleToggleMenu(){
        const menu = document.getElementById("menu")
        const btn =  document.getElementById("btnMobile")
        menu.classList.toggle("active")
        btn.classList.toggle("open-close")
    }
    return(
        <header>
            <div >
                <img src={logo} alt="logo corebiz"></img>
            </div>
            <button onClick={handleToggleMenu} id="btnMobile">
                <span id="hamburguer"></span>
            </button>
            <nav id="menu">
                <a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noopener noreferrer">a corebiz</a>
                <a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noopener noreferrer">serviços</a>
                <a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noopener noreferrer">cases</a>
                <a href="https://www.corebiz.ag/pt/about/" target="_blank" rel="noopener noreferrer">contato</a>
            </nav>
        </header>
    )
}
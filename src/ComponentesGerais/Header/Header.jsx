import React from 'react';
import './Header.css';
import Logo from '../../assets/icones/logo.svg';
import { Link } from 'react-router-dom'; 

function Header() {
    return (
        <div>
            <section id="header-section">
                <img src={Logo} alt="Logomarca do evoflui" />
                <div id="lista">
                    <li id="lista-item"><Link to="/home" id="lista-item-link">Início</Link></li>
                    <li id="lista-item"><Link to="/sobre-nos" id="lista-item-link">Sobre Nós</Link></li>
                    <li id="lista-item"><Link to="/fale-conosco" id="lista-item-link">Fale Conosco</Link></li>
                    <li id="lista-item"><Link to="/comece-agora" id="lista-item-botao">Comece agora</Link></li>
                </div>
            </section>
        </div>
    );
}

export default Header;

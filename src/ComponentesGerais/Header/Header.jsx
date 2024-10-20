import React from 'react';
import './Header.css';
import Logo from '../../assets/icones/logo.svg'

function Header(){
    return(
        <div>
            <section id="header-section">
                <img src={Logo} alt="Logomarca do evoflui" />
                <div id="lista">
                    <li id="lista-item"><a href="#" id="lista-item-link">Início</a></li>
                    <li id="lista-item"><a href="#" id="lista-item-link">Sobre Nós</a></li>
                    <li id="lista-item"><a href="#" id="lista-item-link">Fale Conosco</a></li>
                    <li id="lista-item"><a href="#" id="lista-item-botao">Comece agora</a></li>
                </div>
            </section>
        </div>
    )
}

export default Header;
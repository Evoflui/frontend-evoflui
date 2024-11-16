import React from 'react';
import './HeaderInterno.css';
import LogoInterno from '../../assets/icones/logoInterno.svg';
import Sair from '../../assets/imagens//iconesair.svg'
import { Link } from 'react-router-dom'; 

function HeaderInterno() {
    return (
        <div>
            <section id="header-section-interno">
                <img src={LogoInterno} alt="Logomarca do evoflui" />
                <div id="lista-interno">
                    <li id="lista-ite-interno"><Link to="/home" id="lista-item-link-interno">Home</Link></li>
                    <li id="lista-item-interno"><Link to="/" id="lista-item-link-interno">Trilha</Link></li>
                    <li id="lista-item-interno"><Link to="/" id="lista-item-link-interno">Fórum</Link></li>
                    <li id="lista-item-interno"><Link to="/" id="lista-item-link-interno">Eventos</Link></li>
                    <li id="lista-item-interno"><Link to="/" id="lista-item-botao-interno">Ver perfil</Link></li>
                    <img src={Sair} alt="Icone de saída" />
                </div>
            </section>
        </div>
    );
}

export default HeaderInterno;
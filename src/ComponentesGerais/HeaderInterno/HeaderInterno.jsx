import React, { useEffect, useState } from 'react';
import './HeaderInterno.css';
import LogoInterno from '../../assets/icones/logoInterno.svg';
import Sair from '../../assets/imagens/iconesair.svg'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HeaderInterno() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        localStorage.removeItem('token');
        
        try {
            const response = await fetch('http://localhost:8080/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });
    
            if (!response.ok) {
                throw new Error(`Erro no logout: ${response.statusText}`);
            }
        } catch (error) {
            navigate('/comece-agora');
        }
    };

    return (
        <div>
            <section id="header-section-interno">
                <a href='/home'><img src={LogoInterno} className='logo' alt="Logomarca do evoflui" /></a>
                <div id="lista-interno">
                    <li id="lista-ite-interno"><Link to="/home" id="lista-item-link-interno">Home</Link></li>
                    <li id="lista-item-interno"><Link to="/" id="lista-item-link-interno">Trilha</Link></li>
                    <li id="lista-item-interno"><Link to="/" id="lista-item-link-interno">Fórum</Link></li>
                    <li id="lista-item-interno"><Link to="/eventos" id="lista-item-link-interno">Eventos</Link></li>
                    <li id="lista-item-interno"><Link to="/perfil" id="lista-item-botao-interno">Ver perfil</Link></li>
                    <img src={Sair} onClick={handleLogout} alt="Icone de saída" />
                </div>
            </section>
        </div>
    );
}

export default HeaderInterno;

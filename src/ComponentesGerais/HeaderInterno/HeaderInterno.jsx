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

    const handleNavigateToTrilha = async () => {
        try {
            const response = await fetch('http://localhost:8080/trilha', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (response.ok) {
                console.log('Requisição bem-sucedida:', await response.json());
                navigate('/trilha'); // Navega após a requisição
            } else {
                console.error('Erro na requisição:', response.status);
                if (response.status === 401) {
                    navigate('/comece-agora'); // Redireciona para login se não autorizado
                }
            }
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            navigate('/erro-404'); // Redireciona para uma página de erro
        }
    };

    return (
        <div>
            <section id="header-section-interno">
                <a href='/home'><img src={LogoInterno} className='logo' alt="Logomarca do evoflui" /></a>
                <div id="lista-interno">
                    <li id="lista-ite-interno"><Link to="/home" id="lista-item-link-interno">Home</Link></li>
                    <li id="lista-item-interno">
                        <Link 
                            id="lista-item-link-interno" 
                            onClick={handleNavigateToTrilha}>
                            Trilha
                        </Link>
                    </li>
                    <li id="lista-item-interno"><Link to="/forum" id="lista-item-link-interno">Fórum</Link></li>
                    <li id="lista-item-interno"><Link to="/eventos" id="lista-item-link-interno">Eventos</Link></li>
                    <li id="lista-item-interno"><Link to="/perfil" id="lista-item-botao-interno">Ver perfil</Link></li>
                    <img src={Sair} onClick={handleLogout} alt="Icone de saída" className='botao-de-saida-header'/>
                </div>
            </section>
        </div>
    );
}

export default HeaderInterno;

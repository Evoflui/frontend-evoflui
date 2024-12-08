import React from 'react';
import './TopContainer.css'
import VetorImagem from '../../../../assets/imagens/vetorAutismo.svg';
import { useNavigate } from 'react-router-dom';

function TopContainer() {
    // const navigate = useNavigate();

    // const loginClick = () => {
    //     navigate('/comece-agora');
    // }

    return (
        <div>
            <section className="top-info-home-container">
                <main className="top-home-container-info">
                    <h1 className="top-home-container-title">Evolução e Conexão no Seu Ritmo</h1>
                    <p className="top-home-container-text">Cada jornada é única, somos dedicados a apoiar o desenvolvimento social de
                        pessoas autistas, proporcionando um espaço inclusivo, acessível e repleto de
                        oportunidades. Junte-se a nós e descubra como evoluir e fluir com confiança
                        no seu próprio tempo.</p>
                        <div className="top-home-container-buttons">
                            <a href='comece-agora' className="signup-button">Comece agora</a>
                            <a href='comece-agora' className="signin-button">Já tenho conta</a>
                        </div>
                </main>
                <img src={VetorImagem} alt="Uma ilustração de uma moça brincando de quebra cabeça com um garoto"></img>
            </section>
        </div>
    )
}

export default TopContainer;
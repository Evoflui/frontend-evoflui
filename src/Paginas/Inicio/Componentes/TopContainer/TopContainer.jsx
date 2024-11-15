import React from 'react';
import './TopContainer.css'
import VetorImagem from '../../../../assets/imagens/vetorAutismo.svg';

function TopContainer() {
    return (
        <div>
            <section className="top-container">
                <main className="container-info">
                    <h1 className="container-title">Evolução e Conexão no Seu Ritmo</h1>
                    <p className="container-text">Cada jornada é única, somos dedicados a apoiar o desenvolvimento social de
                        pessoas autistas, proporcionando um espaço inclusivo, acessível e repleto de
                        oportunidades. Junte-se a nós e descubra como evoluir e fluir com confiança
                        no seu próprio tempo.</p>
                        <div className="container-buttons">
                            <a href="#" className="signup-button">Comece agora</a>
                            <a href="#" className="signin-button">Já tenho conta</a>
                        </div>
                </main>
                <img src={VetorImagem} alt="Uma ilustração de uma moça brincando de quebra cabeça com um garoto"></img>
            </section>
        </div>
    )
}

export default TopContainer;
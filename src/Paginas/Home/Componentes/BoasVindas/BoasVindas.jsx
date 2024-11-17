import React from "react";
import './BoasVindas.css';

function BoasVindas() {
    // Array de mensagens aleatórias
    const mensagens = [
        "Estamos felizes de te ver aqui!",
        "Que bom que você chegou, aproveite!",
        "Nosso time está animado para te ajudar!",
        "É um prazer ter você conosco!",
        "Vamos começar? Estamos prontos para te apoiar!"
    ];

    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

    return (
        <div className="container-home-boas-vindas">
            <p className="titulo-boas-vindas">Boa Tarde</p>
            <p className="subtitulo-boas-vidas">{mensagemAleatoria}</p>
        </div>
    );
}

export default BoasVindas;

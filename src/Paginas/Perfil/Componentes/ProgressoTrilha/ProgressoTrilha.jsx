import React, { useState, useEffect } from "react";
import './ProgressoTrilha.css';

function ProgressoTrilha({ name }) {
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        const frases = [
            `Continue nesse ritmo, ${name}!`,
            `Você está indo muito bem, ${name}!`,
            `Mantenha o foco e a dedicação, ${name}!`,
            `Cada passo conta, ${name}! Continue assim!`,
            `Você está quase lá, ${name}! Não desista!`,
            `Com determinação, você chega lá, ${name}!`,
        ];

        const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
        setMensagem(fraseAleatoria);
    }, [name]);

    return (
        <div className="container-progresso-trilha">
            <p className="texto-progesso"> Progresso na trilha - Fase 1 </p>
            <div className="progressso-porcentagem">
                <p className="porcentagem-inicio"> 53% </p>
                <div className="barra-progresso">
                    <div className="progresso" style={{ width: "53%" }}></div>
                </div>
                <p className="porcentagem-final"> 100% </p>
            </div>
            <p className="menssagem-progresso">{mensagem}</p>
        </div>
    );
}

export default ProgressoTrilha;

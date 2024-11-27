import React, { useState, useEffect } from "react";
import './ProgressoTrilha.css';

function ProgressoTrilha() {
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        const frases = [
            "Continue nesse ritmo, Gabriel!",
            "Você está indo muito bem, Gabriel!",
            "Mantenha o foco e a dedicação, Gabriel!",
            "Cada passo conta, Gabriel! Continue assim!",
            "Você está quase lá, Gabriel! Não desista!",
            "Com determinação, você chega lá, Gabriel!",
        ];

        const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

        // Define a frase no estado
        setMensagem(fraseAleatoria);
    }, []); 

    return (
        <>
            <div className="container-progresso-trilha">
                <p className="texto-progesso"> Progresso na trilha - Fase 1 </p>

                <div className="progressso-porcentagem">
                    <p className="porcentagem-inicio"> 53% </p>
                    <div className="barra-progresso">
                        <div className="progresso" style={{ width: "53%" }}></div>
                    </div>

                    <p className="porcentagem-final"> 100% </p>
                </div>

                <p className="menssagem-progresso"> {mensagem} </p>
            </div>
        </>
    )
}

export default ProgressoTrilha;

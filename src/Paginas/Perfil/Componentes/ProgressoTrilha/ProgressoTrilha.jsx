import React from "react";
import './ProgressoTrilha.css';

function ProgressoTrilha() {
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
                <p className="menssagem-progresso"> Continue nesse ritimo, Gabriel! </p>
            </div>

        </>
    )
}

export default ProgressoTrilha;

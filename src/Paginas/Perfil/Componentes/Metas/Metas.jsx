import React, { useState } from "react";
import './Metas.css';

function Metas() {
    
    const [metas, setMetas] = useState([]);
    // Estado para armazenar o valor do input
    const [novaMeta, setNovaMeta] = useState("");

  
    const adicionarMeta = () => {
        if (novaMeta.trim() !== "") {
            setMetas([...metas, novaMeta]);
            setNovaMeta(""); 
        }
    };

    return (
        <div className="container-metas">
            <p className="titulo-metas">Metas Pessoais</p>

            <div className="metas-lista">
                {/* Renderiza as metas com checkbox */}
                {metas.map((meta, index) => (
                    <label key={index} className="checkbox-container">
                        {meta}
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                ))}
            </div>

            <div className="container-input">
                <input
                    type="text"
                    id="texto"
                    className="escrever-meta"
                    placeholder="Escreva aqui sua nova meta..."
                    value={novaMeta}
                    onChange={(e) => setNovaMeta(e.target.value)} 
                />
                <button 
                    onClick={adicionarMeta} 
                    className="submit-btn">
                    <span className="check-icon">✔</span>
                </button>
            </div>
        </div>
    )
}

export default Metas;

import React, { useState } from "react";
import './Metas.css';

function Metas() {

    const [metas, setMetas] = useState([]);

    const [novaMeta, setNovaMeta] = useState("");


    const adicionarMeta = () => {
        if (novaMeta.trim() !== "") {
            setMetas([...metas, { texto: novaMeta, feita: false }]);
            setNovaMeta("");
        }
    };


    const alternarMetaFeita = (index) => {
        const novasMetas = [...metas];
        novasMetas[index].feita = !novasMetas[index].feita;
        setMetas(novasMetas);
    };


    const excluirMetasFeitas = () => {
        const metasRestantes = metas.filter(meta => !meta.feita);
        setMetas(metasRestantes);
    };


    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            adicionarMeta();
        }
    };

    return (
        <div className="container-metas">
            <p className="titulo-metas">Metas Pessoais</p>

            <div className="metas-lista">

                {metas.map((meta, index) => (
                    <label key={index} className="checkbox-container">
                        
                        <input
                            type="checkbox"
                            checked={meta.feita}
                            onChange={() => alternarMetaFeita(index)}
                        />
                        <span className="checkmark"></span>
                        {meta.texto}
                        
                    </label>
                ))}
            </div>

            <div className="section-container-input">
                <div className="container-input">
                    <input
                        type="text"
                        className="escrever-meta"
                        placeholder="Escreva aqui sua nova meta..."
                        value={novaMeta}
                        onChange={(e) => setNovaMeta(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <button onClick={adicionarMeta} className="submit-btn">
                        <span className="check-icon">✔</span>
                    </button>
                </div>

                <button onClick={excluirMetasFeitas} className="excluir-btn">
                    Excluir metas concluídas
                </button>
            </div>
        </div>
    );
}

export default Metas;

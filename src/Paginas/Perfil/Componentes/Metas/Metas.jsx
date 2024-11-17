import React, { useState } from "react";
import './Metas.css';

function Metas() {
    const [meta, setMeta] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nova Meta:', meta); 
        setMeta(''); 
    };

    return (
        <>
            <div className="container-metas">
                <p className="titulo-metas">Metas Pessoais</p>

                <div className="metas-lista">
                    <label className="checkbox-container">
                        Chegar ao nível 5 da fase 1
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </div>

                <form className="container-input" onSubmit={handleSubmit}>
                    <label htmlFor="texto" className="escrever-meta"></label>
                    <input
                        type="text"
                        id="texto"
                        className="escrever-meta"
                        placeholder="Escreva aqui sua nova meta..."
                        value={meta}
                        onChange={(e) => setMeta(e.target.value)} 
                    />
                    <button type="submit" className="submit-btn">
                        <span className="check-icon">✔</span>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Metas;

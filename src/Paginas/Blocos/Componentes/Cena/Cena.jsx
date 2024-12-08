import React, { useState, useEffect } from 'react';
import './Cena.css';
import { useNavigate } from 'react-router-dom';

function Cena({ cena, onClick, personagem, cenaId }) {
  const navigate = useNavigate();
  const [textoAtual, setTextoAtual] = useState('');
  const [indice, setIndice] = useState(0);
  const [digitarConcluido, setDigitarConcluido] = useState(false);

  const FotoPersonagem = require(`../assets/imagens/personagens/${personagem.fotoPersonagem}`);
  const fraseCena = cena?.fraseCena || '';
  const escolhas = cena?.escolhas || [];

  const handleChoiceClick = (escolha) => {
    if (!digitarConcluido) return;
      onClick(escolha);
  };

  useEffect(() => {
    setTextoAtual('');
    setIndice(0);
    setDigitarConcluido(false);
  }, [cena]);

  useEffect(() => {
    if (!fraseCena || digitarConcluido) return;

    const timeout = setTimeout(() => {
      if (indice < fraseCena.length) {
        setTextoAtual((prevTexto) => prevTexto + fraseCena[indice]);
        setIndice(indice + 1);
      } else {
        setDigitarConcluido(true);
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [indice, fraseCena, digitarConcluido]);

  return (
    <div className="CenaContainer">
      <div className="PersonagemContainer">
        <img src={FotoPersonagem} alt={personagem.nomePersonagem} />
      </div>
      <div
        className="CenaTexto Cena"
        style={{ backgroundColor: personagem.corPersonagem }}
      >
        <div className="CampoFrase">
          {personagem.nomePersonagem && (
            <p className="NomePersonagem">
              <strong>{personagem.nomePersonagem}</strong>
            </p>
          )}
          <p className="FrasePersonagem">{textoAtual}</p>
        </div>
      </div>
      {digitarConcluido && escolhas.length > 0 && (
        <div className="EscolhasContainer">
          {escolhas.map((escolha) => (
            <button
              key={escolha.escolhaId}
              className="EscolhaButton"
              onClick={() => handleChoiceClick(escolha)}
              style={{
                backgroundColor: personagem.corPersonagem,
              }}
            >
              {escolha.nomeOpcao}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cena;

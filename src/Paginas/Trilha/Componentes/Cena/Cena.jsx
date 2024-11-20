import React, { useEffect } from 'react';

function Cena({ cena, onClick, personagem }) {
  // Função que chama a função onClick ao clicar em qualquer lugar na tela
  const handleSceneClick = () => {
    onClick(null); // Avança para a próxima cena ou finaliza a história
  };

  useEffect(() => {
    // Aqui podemos colocar uma lógica para fazer a cena avançar automaticamente se necessário
  }, [cena]);

  return (
    <div className="cena-container cena" onClick={handleSceneClick}>
      <div className="cena-texto">
        <p>{cena.fraseCena}</p>
        {personagem.nomePersonagem && <p><strong>{personagem.nomePersonagem}</strong></p>}
      </div>
    </div>
  );
}

export default Cena;

// import React, { useState } from "react";
// import './Sentencas.css';
// import BackgroundSentencas from '../../../assets/imagens/backgroud (1).png';
// import ImagemReferencia from '../../../assets/imagens/livros.png';
// import ListaDoadora from '../../../Paginas/JogoDasSentencas/Componentes/ListaDoadora/ListaDoadora';
// import ListaRecebe from '../../../Paginas/JogoDasSentencas/Componentes/ListaRecebe/ListaRecebe';




// function Sentencas() {

//     // Gerenciar o estado das listas
//     const [palavrasDoadora, setPalavrasDoadora] = useState([
//         "Os", "livros", "estão", "na", "mesa"
//     ]);
//     const [palavrasRecebe, setPalavrasRecebe] = useState([]);

//     // Função para mover palavras da lista doadora para a receptora
//     const moverParaRecebe = (palavra) => {
//         setPalavrasDoadora((prev) => prev.filter((item) => item !== palavra));
//         setPalavrasRecebe((prev) => [...prev, palavra]);
//     };

//     return (
//         <main style={{ backgroundImage: `url(${BackgroundSentencas})` }} className='main-jogo-das-sentencas'>
//             <header className='header-jogo-das-sentencas'>
//                 <h1 className='titulo-jogo-sentencas'> Jogo das Sentenças </h1>
//             </header>

//             <div className='conteudo-principal-jogo-sentencas'>
//                 <h2 className="titulo-fase-jogo-sentencas">Fase n° 1</h2>
//                 <img src={ImagemReferencia} alt="Imagem de referência" className="imagem-jogo-das-sentencas"></img>

//                 <ListaRecebe palavras={palavrasRecebe} />

//                 <ListaDoadora palavras={palavrasDoadora} moverParaRecebe={moverParaRecebe} />
//             </div>

//         </main>
//     )
// }


//export default Sentencas;

import React, { useState } from "react";
import "./Sentencas.css";
import BackgroundSentencas from "../../../assets/imagens/backgroud (1).png";
import ImagemReferencia from "../../../assets/imagens/livros.png";
import ListaDoadora from "../../../Paginas/JogoDasSentencas/Componentes/ListaDoadora/ListaDoadora";
import ListaRecebe from "../../../Paginas/JogoDasSentencas/Componentes/ListaRecebe/ListaRecebe";

function Sentencas() {
  const palavrasIniciais = ["Os", "livros", "são", "coloridos"];
  const [palavrasDoadoras, setPalavrasDoadoras] = useState(palavrasIniciais);
  const [palavrasRecebidas, setPalavrasRecebidas] = useState([]);

  const moverParaRecebe = (palavra) => {
    setPalavrasDoadoras(palavrasDoadoras.filter((p) => p !== palavra));
    setPalavrasRecebidas([...palavrasRecebidas, palavra]);
  };

  const resetarListas = () => {
    setPalavrasDoadoras(palavrasIniciais);
    setPalavrasRecebidas([]);
  };

  return (
    <main style={{ backgroundImage: `url(${BackgroundSentencas})` }} className="main-jogo-das-sentencas">
      <header className="header-jogo-das-sentencas">
        <h1 className="titulo-jogo-sentencas"> Jogo das Sentenças </h1>
      </header>

      <div className="conteudo-principal-jogo-sentencas">
        <h2 className="titulo-fase-jogo-sentencas">Fase n° 1</h2>
        <img src={ImagemReferencia} alt="Imagem de referência" className="imagem-jogo-das-sentencas" />

        <ListaRecebe palavras={palavrasRecebidas} />
        <ListaDoadora palavras={palavrasDoadoras} moverParaRecebe={moverParaRecebe} />

        <button className="botao-resetar" onClick={resetarListas}>
          Resetar
        </button>
      </div>
    </main>
  );
}

export default Sentencas;

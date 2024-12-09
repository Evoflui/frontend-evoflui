

// import React, { useState } from "react";
// import "./Sentencas.css";
// import BackgroundSentencas from "../../../assets/imagens/backgroud (1).png";
// import ImagemReferencia from "../../../assets/imagens/livros.png";
// import ListaDoadora from "../../../Paginas/JogoDasSentencas/Componentes/ListaDoadora/ListaDoadora";
// import ListaRecebe from "../../../Paginas/JogoDasSentencas/Componentes/ListaRecebe/ListaRecebe";

// function Sentencas() {
//     const palavrasIniciais = ["Os", "livros", "são", "coloridos"];
//     const [palavrasDoadoras, setPalavrasDoadoras] = useState(palavrasIniciais);
//     const [palavrasRecebidas, setPalavrasRecebidas] = useState([]);

//     const moverParaRecebe = (palavra) => {
//         setPalavrasDoadoras(palavrasDoadoras.filter((p) => p !== palavra));
//         setPalavrasRecebidas([...palavrasRecebidas, palavra]);
//     };

//     const resetarListas = () => {
//         setPalavrasDoadoras(palavrasIniciais);
//         setPalavrasRecebidas([]);
//     };

//     const validarSentenca = () => {
//         const sentencaEsperada = ["Os", "livros", "são", "coloridos"];
//         if (JSON.stringify(palavrasRecebidas) === JSON.stringify(sentencaEsperada)) {
//             alert("Parabéns! Você montou a sentença correta!");
//         } else {
//             alert("A sentença está incorreta. Tente novamente!");
//         }
//     };

//     return (
//         <main style={{ backgroundImage: `url(${BackgroundSentencas})` }} className="main-jogo-das-sentencas">
//             <header className="header-jogo-das-sentencas">
//                 <h1 className="titulo-jogo-sentencas"> Jogo das Sentenças </h1>
//             </header>

//             <div className="conteudo-principal-jogo-sentencas">
//                 <h2 className="titulo-fase-jogo-sentencas">Fase n° 1</h2>
//                 <img src={ImagemReferencia} alt="Imagem de referência" className="imagem-jogo-das-sentencas" />

//                 <ListaRecebe palavras={palavrasRecebidas} />
//                 <ListaDoadora palavras={palavrasDoadoras} moverParaRecebe={moverParaRecebe} />

//                 <div className="container-botoes-controle">
//                 <button className="botao-resetar" onClick={resetarListas}>
//                     Resetar
//                 </button>

//                 <button className="botao-validar" onClick={validarSentenca}>
//                     Validar Sentença
//                 </button>
//                 </div>

//             </div>
//         </main>
//     );
// }

// export default Sentencas;

import React, { useState } from "react";
import confetti from "canvas-confetti";
import "./Sentencas.css";
import BackgroundSentencas from "../../../assets/imagens/backgroud (1).png";
import ImagemReferencia from "../../../assets/imagens/livros.png";
import ListaDoadora from "../../../Paginas/JogoDasSentencas/Componentes/ListaDoadora/ListaDoadora";
import ListaRecebe from "../../../Paginas/JogoDasSentencas/Componentes/ListaRecebe/ListaRecebe";

function Sentencas() {
  const palavrasIniciais = ["Os", "livros", "são", "coloridos"];
  const [palavrasDoadoras, setPalavrasDoadoras] = useState(palavrasIniciais);
  const [palavrasRecebidas, setPalavrasRecebidas] = useState([]);
  const [feedbackErro, setFeedbackErro] = useState(false);

  const moverParaRecebe = (palavra) => {
    setPalavrasDoadoras(palavrasDoadoras.filter((p) => p !== palavra));
    setPalavrasRecebidas([...palavrasRecebidas, palavra]);
  };

  const resetarListas = () => {
    setPalavrasDoadoras(palavrasIniciais);
    setPalavrasRecebidas([]);
    setFeedbackErro(false); // Remove o feedback de erro ao resetar
  };

  const validarSentenca = () => {
    const sentencaEsperada = ["Os", "livros", "são", "coloridos"];
    if (JSON.stringify(palavrasRecebidas) === JSON.stringify(sentencaEsperada)) {
      dispararConfetes();
    } else {
      setFeedbackErro(true);
      setTimeout(() => setFeedbackErro(false), 2000);
    }
  };

  const dispararConfetes = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <main style={{ backgroundImage: `url(${BackgroundSentencas})` }} className="main-jogo-das-sentencas">
      <header className="header-jogo-das-sentencas">
        <h1 className="titulo-jogo-sentencas"> Jogo das Sentenças </h1>
      </header>

      <div className="conteudo-principal-jogo-sentencas">
        <h2 className="titulo-fase-jogo-sentencas">Fase n° 1</h2>
        <img src={ImagemReferencia} alt="Imagem de referência" className="imagem-jogo-das-sentencas" />

        {/* Passa o estado de erro para a lista */}
        <ListaRecebe palavras={palavrasRecebidas} erro={feedbackErro} />
        <ListaDoadora palavras={palavrasDoadoras} moverParaRecebe={moverParaRecebe} />

        <div className="container-botoes-controle">
          <button className="botao-resetar" onClick={resetarListas}>
            Resetar
          </button>

          <button className="botao-validar" onClick={validarSentenca}>
            Validar Sentença
          </button>
        </div>
      </div>
    </main>
  );
}

export default Sentencas;

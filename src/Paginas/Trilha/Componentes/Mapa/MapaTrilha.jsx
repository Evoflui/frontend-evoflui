import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Mapa.css";
import IlhaComunicacao from "../assets/imagens/ilhas/ILHA1.png";
import IlhaSensorial from "../assets/imagens/ilhas/ILHA2.png";
import IlhaAdaptabilidade from "../assets/imagens/ilhas/ILHA3.png";
import IlhaTomada from "../assets/imagens/ilhas/ILHA4.png";

import IlhaComunicacaoSelecionado from "../assets/imagens/ilhas/ILHA1FUNDO.png";
import IlhaSensorialSelecionado from "../assets/imagens/ilhas/ILHA2FUNDO.png";
import IlhaAdaptabilidadeSelecionado from "../assets/imagens/ilhas/ILHA3FUNDO.png";
import IlhaTomadaSelecionado from "../assets/imagens/ilhas/ILHA4FUNDO.png";

import { FaArrowLeft } from "react-icons/fa";

function MapaTrilha() {
  const [ilhaAtiva, setIlhaAtiva] = useState(null); // Estado para ilha ativa (com mouse em cima)
  const [ilhaClicada, setIlhaClicada] = useState(null); // Estado para ilha clicada
  const navigate = useNavigate();

  const ilhas = {
    comunicacao: {
      nome: "Comunicação",
      descricao: "Desenvolva suas habilidades de comunicação.",
      cor: "#D92378",
      imagem: IlhaComunicacao,
      imagemSelecionado: IlhaComunicacaoSelecionado,
    },
    sensorial: {
      nome: "Sensorial",
      descricao: "Explore seus sentidos e percepção.",
      cor: "#8D23DE",
      imagem: IlhaSensorial,
      imagemSelecionado: IlhaSensorialSelecionado,
    },
    adaptabilidade: {
      nome: "Adaptabilidade",
      descricao: "Trabalhe sua flexibilidade e adaptação.",
      cor: "#009CDE",
      imagem: IlhaAdaptabilidade,
      imagemSelecionado: IlhaAdaptabilidadeSelecionado,
    },
    tomadaDecisao: {
      nome: "Tomada de Decisão",
      descricao: "Foque em decisões eficazes.",
      cor: "#de234c",
      imagem: IlhaTomada,
      imagemSelecionado: IlhaTomadaSelecionado,
    },
  };

  const handleMouseEnter = (ilha) => {
    setIlhaAtiva(ilha); // Muda a ilha ativa ao passar o mouse
  };

  const handleMouseLeave = () => {
    setIlhaAtiva(null); // Reseta a ilha ativa quando o mouse sai
  };

  const handleClick = (ilha) => {
    setIlhaClicada(ilha); // Define a ilha clicada
    setTimeout(() => {
      navigate(`/trilha/${ilha}`);
    }, 500); // Redireciona após 500ms
  };

  return (
    <>
      <button className="voltar-button" onClick={() => navigate("/home")}>
        <FaArrowLeft className="icon" />
      </button>

      <div className="mapa-trilha">
        <div
          className={`IlhaComunicacao ${ilhaClicada === "comunicacao" ? "clicada" : ""}`}
          onMouseEnter={() => handleMouseEnter("comunicacao")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("comunicacao")}
        >
          <img src={ilhaAtiva === "comunicacao" ? ilhas.comunicacao.imagemSelecionado : ilhas.comunicacao.imagem} alt="Ilha Comunicação" />
        </div>
        <div
          className={`IlhaSensorial ${ilhaClicada === "sensorial" ? "clicada" : ""}`}
          onMouseEnter={() => handleMouseEnter("sensorial")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sensorial")}
        >
          <img src={ilhaAtiva === "sensorial" ? ilhas.sensorial.imagemSelecionado : ilhas.sensorial.imagem} alt="Ilha Sensorial" />
        </div>
        <div
          className={`IlhaAdaptabilidade ${ilhaClicada === "adaptabilidade" ? "clicada" : ""}`}
          onMouseEnter={() => handleMouseEnter("adaptabilidade")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("adaptabilidade")}
        >
          <img src={ilhaAtiva === "adaptabilidade" ? ilhas.adaptabilidade.imagemSelecionado : ilhas.adaptabilidade.imagem} alt="Ilha Adaptabilidade" />
        </div>
        <div
          className={`IlhaTomadaDecisao ${ilhaClicada === "tomadaDecisao" ? "clicada" : ""}`}
          onMouseEnter={() => handleMouseEnter("tomadaDecisao")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("tomadaDecisao")}
        >
          <img src={ilhaAtiva === "tomadaDecisao" ? ilhas.tomadaDecisao.imagemSelecionado : ilhas.tomadaDecisao.imagem} alt="Ilha Tomada de Decisão" />
        </div>
      </div>

      <div
        className="info-ilha"
        style={{
          backgroundColor: ilhaAtiva
            ? ilhas[ilhaAtiva].cor
            : "#2336de", // Cor de fundo dependendo da ilha ativa
          color: "#ffffff",
        }}
      >
        {ilhaAtiva ? (
          <>
            <h1>{ilhas[ilhaAtiva].nome}</h1>
            <p>{ilhas[ilhaAtiva].descricao}</p>
          </>
        ) : (
          <>
            <h1>Ilhas do Desenvolvimento</h1>
            <p>Objetivo: Resgate o tesouro atrás das montanhas.</p>
          </>
        )}
      </div>
    </>
  );
}

export default MapaTrilha;

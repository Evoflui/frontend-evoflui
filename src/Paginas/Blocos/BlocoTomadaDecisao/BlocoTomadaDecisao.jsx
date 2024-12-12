import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import Ilha from '../Componentes/assets/imagens/TOMADA-BLOCO.png';
import './BlocoTomadaDecisao.css';
import { useNavigate } from 'react-router-dom';
import Cena from '../Componentes/Cena/Cena';

function BlocoTomada() {
  const navigate = useNavigate();
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [completedScenes, setCompletedScenes] = useState(false);
  const [trilha, setTrilha] = useState({});
  const [usuario, setUsuario] = useState({});
  const [cenas, setCenas] = useState([]);
  const [personagens, setPersonagens] = useState([]);
  const [isHandlingChoice, setIsHandlingChoice] = useState(false);

  const API_URL = "https://typcalsolution.com.br";

  const handleChoice = useCallback(() => {
    if (isHandlingChoice || completedScenes) return;

    setIsHandlingChoice(true);

    if (currentSceneIndex < cenas.length - 1) {
      setCurrentSceneIndex((prevIndex) => prevIndex + 1);
    } else {
      setCompletedScenes(true);
    }
    

    setTimeout(() => setIsHandlingChoice(false), 300);
  }, [usuario, currentSceneIndex, cenas.length, isHandlingChoice, completedScenes]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space' || event.code === 'ArrowRight') {
        event.preventDefault();
        handleChoice();
      }
    };

    const handleClickAnywhere = () => {
      handleChoice();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClickAnywhere);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClickAnywhere);
    };
  }, [handleChoice]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/decisao-cenas`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setUsuario(data.usuario);
          setCenas(data.cenas);
          setPersonagens(data.personagens);

          console.log(data);

        } else if (response.status === 401) {
          navigate('/comece-agora');
        }
      } catch (error) {
        console.error(error);
        navigate('/erro-404');
      }
    };

    fetchData();
  }, [navigate, API_URL]);

  const personagensNaCena =
    cenas.length > 0
      ? personagens.filter(
          (personagem) => personagem.personagemId === cenas[currentSceneIndex]?.personagemCena
        )
      : [];

  return (
    <div>
      {!completedScenes && cenas.length > 0 && personagensNaCena.length > 0 ? (
        <Cena
          cena={cenas[currentSceneIndex]}
          onClick={handleChoice}
          personagem={personagensNaCena[0]}
          cenaId={currentSceneIndex}
        />
      ) : completedScenes ? (
        <>
        </>
      ) : (
        <div className="loading">
          Carregando...
        </div>
      )}
      
      <div className={`${completedScenes ? 'mapa-Sensorial-container' : 'mapa-Sensorial-desfocado'} BlocoTomada`}>
      <button className="voltar-button" onClick={() => navigate("/trilha")}>
                <FaArrowLeft className="icon" />
            </button>

            <div className='BlocoFundo'>
                <div className='IlhaImagem'>
                    <img src={Ilha} alt='Foto Ilha de Comunicação' />
                    <div className='Bolinhas'>
                        <div className='Bolinha1' onClick={() => navigate("/trilha/Tomada/atividade=1")}>1</div>
                        <div className='Bolinha2'>2</div>
                        <div className='Bolinha3'>3</div>
                        <div className='Bolinha4'>4</div>
                        <div className='Bolinha5'>5</div>
                        <div className='Bolinha6'>6</div>
                    </div>
                </div>
            </div>

            <div className='infoilha'>
            <h1>Tomada de Decisão</h1>
            <p>Foque em decisões eficazes.</p>
            </div>
      </div>
    </div>
  );
}

export default BlocoTomada;




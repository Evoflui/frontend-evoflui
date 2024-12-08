import React, { useState, useEffect, useCallback } from 'react';
import Cena from './Componentes/Cena/Cena';
import MapaTrilha from './Componentes/Mapa/MapaTrilha';
import './Trilha.css';
import { useNavigate } from 'react-router-dom';

function Trilha() {
  const navigate = useNavigate();
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [completedScenes, setCompletedScenes] = useState(false);
  const [trilha, setTrilha] = useState({});
  const [usuario, setUsuario] = useState({});
  const [cenas, setCenas] = useState([]);
  const [personagens, setPersonagens] = useState([]);
  const [isHandlingChoice, setIsHandlingChoice] = useState(false);

  const API_URL = "http://34.171.119.210:8080";

  const handleChoice = useCallback(() => {
    if (isHandlingChoice || completedScenes) return;

    setIsHandlingChoice(true);

    if (usuario.novo === false) {
      setCompletedScenes(true);
    } else {
      if (currentSceneIndex < cenas.length - 1) {
        setCurrentSceneIndex((prevIndex) => prevIndex + 1);
      } else {
        setCompletedScenes(true);
      }
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
        const response = await fetch(`${API_URL}/trilha`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setUsuario(data.usuario);
          setCenas(data.trilha.cenasTrilha);
          setPersonagens(data.personagens);
          setTrilha(data.trilha);

          console.log(data);

          if (data.usuario.novo === false) {
            setCompletedScenes(true);
          }
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

  useEffect(() => {
    const sendPostRequest = async () => {
      try {
        const response = await fetch(`${API_URL}/trilha/beginning`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include'
        });

        if (response.status === 200) {
          console.log('Usuário marcado como não novo');
        } else {
          console.error('Erro ao enviar POST');
        }
      } catch (error) {
        console.error('Erro na requisição POST', error);
      }
    };

    if (completedScenes) {
      sendPostRequest();
    }
  }, [completedScenes, API_URL]);

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
      <div className={`${completedScenes ? 'mapa-trilha-container' : 'mapa-trilha-desfocado'} MapaFundo`}>
        <MapaTrilha />
      </div>
    </div>
  );
}

export default Trilha;

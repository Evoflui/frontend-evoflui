import React, { useState, useEffect } from 'react';
import Cena from './Componentes/Cena/Cena';  
import MapaTrilha from './Componentes/Mapa/MapaTrilha';
import './Trilha.css';
import { useNavigate } from 'react-router-dom';

function Trilha() {
  const navigate = useNavigate();
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [completedScenes, setCompletedScenes] = useState(false);

  const [trilha, setTrilha] = useState({}); // Inicializa com objeto vazio
  const [usuario, setUsuario] = useState({}); // Inicializa com objeto vazio
  const [cenas, setCenas] = useState([]);
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/trilha', {
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
          console.log(data); // Verifica a estrutura dos dados
        } else {
          if (response.status === 401) {
            navigate('/comece-agora');
          }
        }
      } catch (error) {
        console.log(error);
        navigate('/erro-404');
      }
    };

    fetchData();
  }, [navigate]);

  // Função para avançar para a próxima cena
  const handleChoice = () => {
    if (currentSceneIndex < cenas.length - 1) {
      setCurrentSceneIndex(prevIndex => prevIndex + 1);
    } else {
      setCompletedScenes(true);
    }
  };

  // Filtra personagens baseados no personagemId da cena
  const personagensNaCena = cenas.length > 0 ? personagens.filter(personagem => 
    personagem.personagemId === cenas[currentSceneIndex].personagemCena
  ) : [];

  return (
    <div>
      {!completedScenes ? (
        cenas.length > 0 && personagensNaCena.length > 0 && (
          <Cena cena={cenas[currentSceneIndex]} onClick={handleChoice} personagem={personagensNaCena[0]} />
        )
      ) : (
        <MapaTrilha /> // Exibe o MapaTrilha quando todas as cenas forem completadas
      )}
      <div className={completedScenes ? 'mapa-trilha-container' : 'mapa-trilha-desfocado'}>
        <MapaTrilha />
      </div>
    </div>
  );
}

export default Trilha;

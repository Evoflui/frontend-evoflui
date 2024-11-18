import React, { useState, useEffect } from 'react';
import Cena from './Componentes/Cena/Cena';  
import MapaTrilha from './Componentes/Mapa/MapaTrilha';
import './Trilha.css';

function Trilha() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [completedScenes, setCompletedScenes] = useState(false);

  // O array de cenas
  const cenas = [
    {
      texto: "Opa nem vi você aqui!",
      personagem: "Amora",
      choices: null
    },
    {
      texto: "Você encontrou uma criatura misteriosa. O que fazer?",
      personagem: "Você",
      choices: null
    },
    {
      texto: "Você venceu a batalha e segue em frente!",
      background: "vitoria.jpg",
      choices: [
        { text: "Ir para a próxima área", nextScene: null }
      ]
    }
  ];

  // Função para avançar para a próxima cena
  const handleChoice = () => {
    // Verifica se a cena atual é a última
    if (currentSceneIndex < cenas.length - 1) {
      // Se não for a última, avança para a próxima cena
      setCurrentSceneIndex(prevIndex => prevIndex + 1);
    } else {
      // Se for a última cena, marca como completa
      setCompletedScenes(true);
    }
  };

  return (
    <div>
      {!completedScenes ? (
        <Cena cena={cenas[currentSceneIndex]} onClick={handleChoice} />
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

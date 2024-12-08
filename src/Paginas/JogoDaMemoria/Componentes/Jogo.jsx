import React, { useState, useEffect } from 'react';
import './Jogo.css';
import { useNavigate } from 'react-router-dom';  
import BackgroundMemoria from '../../../assets/imagens/backgroud (1).png';
import CardFrente from '../../../assets/imagens/card frente (1).png';
import CardAmora from '../../../assets/imagens/amora card.png';
import CardCaio from '../../../assets/imagens/caio card.png';
import CardClara from '../../../assets/imagens/clara card.png';
import CardMargarida from '../../../assets/imagens/margarida card.png';
import CardMax from '../../../assets/imagens/max card.png';

const characterImages = {
  'amora card': CardAmora,
  'caio card': CardCaio,
  'clara card': CardClara,
  'margarida card': CardMargarida,
  'max card': CardMax,
};

const characters = [
  'amora card',
  'caio card',
  'clara card',
  'margarida card',
  'max card',
  'amora card',
  'caio card',
  'clara card',
  'margarida card',
  'max card',
];

const Jogo = () => {
  const navigate = useNavigate();

  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabledCards, setDisabledCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);  

  const startGame = () => {
    const shuffledCharacters = [...characters].sort(() => Math.random() - 0.5);
    const initializedCards = shuffledCharacters.map((character, index) => ({
      id: index,
      character,
      revealed: false,
      disabled: false,
    }));
    setCards(initializedCards);
    setFirstCard(null);
    setSecondCard(null);
    setDisabledCards([]);
    setGameOver(false);  
  };

  useEffect(() => {
    startGame();
  }, []);

  const checkEndGame = () => {
    if (disabledCards.length === characters.length) {
      setGameOver(true);  
    }
  };

  const checkCards = () => {
    if (firstCard && secondCard) {
      if (firstCard.character === secondCard.character) {
        setDisabledCards((prev) => [...prev, firstCard.id, secondCard.id]);
        setFirstCard(null);
        setSecondCard(null);
        checkEndGame();
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) => {
              if (card.id === firstCard.id || card.id === secondCard.id) {
                return { ...card, revealed: false };
              }
              return card;
            })
          );
          setFirstCard(null);
          setSecondCard(null);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      checkCards();
    }
  }, [firstCard, secondCard]);

  const handleCardClick = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    if (clickedCard.disabled || clickedCard.revealed) return;

    if (!firstCard) {
      setFirstCard(clickedCard);
    } else if (!secondCard) {
      setSecondCard(clickedCard);
    }

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, revealed: true } : card
      )
    );
  };

  return (
    <main style={{ backgroundImage: `url(${BackgroundMemoria})` }} className='main-jogo-da-memoria'>
      <header className='header-jogo-da-memoria'></header>
      <h1 className='titulo-jogo-memoria'> Jogo da Memória </h1>
      <div className="grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.revealed ? 'reveal-card' : ''} ${
              disabledCards.includes(card.id) ? 'disabled-card' : ''
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <div className="face front">
              {card.revealed ? (
                <img src={characterImages[card.character]} alt={card.character} />
              ) : (
                <img src={CardFrente} alt="Card Front" />
              )}
            </div>
            <div className="face back">
              <img src={CardFrente} alt="Card Back" />
            </div>
          </div>
        ))}
      </div>

   
      {gameOver && (
        <div className="mensagem-vitoria">
          <h2>Parabéns! Você venceu!</h2>
        </div>
      )}

      <div className="reiniciar-botao-container">
        <button onClick={startGame} className="reiniciar-jogo">
          Reiniciar Jogo
        </button>
      </div>
      <div className="voltar-home-botao-container">
        <button onClick={() => navigate('/')} className="voltar-home">
          Voltar
        </button>
      </div>
    </main>
  );
};


export default Jogo;
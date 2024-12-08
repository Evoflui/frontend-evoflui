import React from "react";
import './Sentencas.css';
import BackgroundSentencas from '../../../assets/imagens/backgroud (1).png';
import ImagemReferencia from '../../../assets/imagens/livros.png';
import ListaDoadora from '../../../Paginas/JogoDasSentencas/Componentes/ListaDoadora/ListaDoadora';
import ListaRecebe from '../../../Paginas/JogoDasSentencas/Componentes/ListaRecebe/ListaRecebe';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";




function Sentencas() {
    return (
        <main style={{ backgroundImage: `url(${BackgroundSentencas})` }} className='main-jogo-das-sentencas'>
            <header className='header-jogo-das-sentencas'>
                <h1 className='titulo-jogo-sentencas'> Jogo das Sentenças </h1>
            </header>

            <div className='conteudo-principal-jogo-sentencas'>
                <h2 className="titulo-fase-jogo-sentencas">Fase n° 1</h2>
                <img src={ImagemReferencia} alt="Imagem de referência" className="imagem-jogo-das-sentencas"></img>

                <ListaRecebe/>

                <ListaDoadora/>
            </div>

        </main>
    )
}


export default Sentencas;
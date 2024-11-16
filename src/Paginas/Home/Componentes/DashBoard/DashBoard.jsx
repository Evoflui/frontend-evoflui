import React from "react";
import './DashBoard.css';
import Livros from '../../../../assets/imagens/livros.svg'
import Forum from '../../../../assets/imagens/forum.svg'
import Eventos from '../../../../assets/imagens/eventos.svg'


function DashBoard() {
    return (
        <>
            <div className="container-dashboard">
                <p className="desejo">O que você deseja fazer hoje?</p>

                <div className="card-dashboard">
                    <img src={Livros} alt="Pilha de livros com um fundo desfocado" />
                    <div className="textos-card">
                        <p className="titulo-card-dashboard">Trilha de Desenvolvimento</p>
                        <p className="descricao-card-dashboard">
                            Uma jornada personalizada de aprendizado e crescimento, adaptada
                            às necessidades de cada usuário, com atividades e desafios voltados
                            ao desenvolvimento de habilidades essenciais.
                        </p>
                    </div>
                </div>


                <div className="card-dashboard">
                    <img src={Forum} alt="Um auditorio com várias pessoas" />
                    <div className="textos-card">
                        <p className="titulo-card-dashboard">Fórum de Tutores</p>
                        <p className="descricao-card-dashboard">
                            um espaço colaborativo onde tutores podem trocar experiências,
                            compartilhar dicas e oferecer apoio mútuo na jornada de
                            desenvolvimento das pessoas neurodivergentes.
                        </p>
                    </div>
                </div>


                <div className="card-dashboard">
                    <img src={Eventos} alt="Pilha de livros com um fundo desfocado" />
                    <div className="textos-card">
                        <p className="titulo-card-dashboard">Eventos Especiais</p>
                        <p className="descricao-card-dashboard">
                            um espaço colaborativo onde tutores podem trocar experiências,
                            compartilhar dicas e oferecer apoio mútuo na jornada de
                            desenvolvimento das pessoas neurodivergentes.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard;

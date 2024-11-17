import React from "react";
import './DashBoard.css';
import Forum from '../../../../assets/imagens/forum.svg';
import Eventos from '../../../../assets/imagens/eventos.svg';
import { useNavigate } from "react-router-dom";

function DashBoard({ IdTrilha }) {
    const navigate = useNavigate();

    const handleRefTrilha = () => {
        navigate(`/trilha/${IdTrilha}`);
    }

    const handleRefForum = () => {
        navigate('/forum');
    }

    const handleRefMapa = () => {
        navigate('/mapa');
    }
    return (
        <div className="container-dashboard">
            <p className="desejo">O que você deseja fazer hoje?</p>

            <div className="cards-container">
                <div className="card-dashboard" onClick={handleRefTrilha}>
                    <img src={Forum} alt="Pilha de livros com um fundo desfocado" />
                    <div className="textos-card">
                        <p className="titulo-card-dashboard">Trilha de Desenvolvimento</p>
                        <p className="descricao-card-dashboard">
                            Uma jornada personalizada de aprendizado e crescimento, adaptada
                            às necessidades de cada usuário, com atividades e desafios voltados
                            ao desenvolvimento de habilidades essenciais.
                        </p>
                    </div>
                </div>

                <div className="card-dashboard" onClick={handleRefForum}>
                    <img src={Forum} alt="Um auditorio com várias pessoas" />
                    <div className="textos-card">
                        <p className="titulo-card-dashboard">Fórum de Tutores</p>
                        <p className="descricao-card-dashboard">
                            Um espaço colaborativo onde tutores podem trocar experiências,
                            compartilhar dicas e oferecer apoio mútuo na jornada de
                            desenvolvimento das pessoas neurodivergentes.
                        </p>
                    </div>
                </div>

                <div className="card-dashboard" onClick={handleRefMapa}>
                    <img src={Eventos} alt="Pilha de livros com um fundo desfocado" />
                    <div className="textos-card">
                        <p className="titulo-card-dashboard">Eventos Especiais</p>
                        <p className="descricao-card-dashboard">
                            Um espaço colaborativo onde tutores podem trocar experiências,
                            compartilhar dicas e oferecer apoio mútuo na jornada de
                            desenvolvimento das pessoas neurodivergentes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;

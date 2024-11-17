import React from "react";
import './Informações.css';
import FotoPerfil from '../../../../assets/imagens/foto perfil.svg'
import IconeCoracao from '../../../../assets/icones/iconecoracao.svg'
import iconeLapis from '../../../../assets/icones/iconelapis.svg'

function Informações() {
    return (
        <>

            <div className="container-informações-perfil">

                <div className="foto-de-perfil">
                    <img src={FotoPerfil} alt="Foto de perfil do usuário" />
                </div>

                <div className="user-perfil">
                    < p className="nome-usuario-perfil"> Gabriel Augusto </p>
                    <p className="email-perfil"> eugabaugusto@gmail.com</p>
                </div>

                <div className="botoes-perfil">
                    <button className="botao-vidas"> <img src={IconeCoracao} alt="Icone de coração" />   10 Vidas</button>
                    <button className="botao-editar-perfil"> <img src={iconeLapis} alt="Icone de lapis" />  Editar Perfil</button>
                </div>

            </div>

        </>
    )
}

export default Informações;
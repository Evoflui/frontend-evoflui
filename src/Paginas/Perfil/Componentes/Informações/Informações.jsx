import React, { useState } from "react";
import './Informações.css';
import FotoPerfil from '../../../../assets/imagens/foto perfil.svg';
import IconeCoracao from '../../../../assets/icones/iconecoracao.svg';
import iconeLapis from '../../../../assets/icones/iconelapis.svg';
import alterarFoto from '../../../../assets/icones/alterarfoto.svg';
import ocultarSenha from '../../../../assets/icones/iconeocultarsenha.svg';

function Informações() {
    const [showModal, setShowModal] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: "Gabriel Augusto",
        email: "eugabaugusto@gmail.com"
    });

    const [formData, setFormData] = useState({
        name: userInfo.name,
        email: userInfo.email,
        currentPassword: "",
        newPassword: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        setUserInfo({
            name: formData.name,
            email: formData.email
        });

        setFormData({ ...formData, currentPassword: "", newPassword: "" });

        setShowModal(false);
    };

    return (
        <>
            <div className="container-informações-perfil">
                <div className="foto-de-perfil">
                    <img src={FotoPerfil} alt="Foto de perfil do usuário" />
                </div>

                <div className="user-perfil">
                    <p className="nome-usuario-perfil">{userInfo.name}</p>
                    <p className="email-perfil">{userInfo.email}</p>
                </div>

                <div className="botoes-perfil">
                    <button className="botao-vidas">
                        <img src={IconeCoracao} alt="Ícone de coração" /> 10 Vidas
                    </button>
                    <button
                        className="botao-editar-perfil"
                        onClick={() => setShowModal(true)}
                    >
                        <img src={iconeLapis} alt="Ícone de lápis" /> Editar Perfil
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2 className="modal-title">Editar Perfil</h2>
                        <div className="modal-avatar">
                            <img src={FotoPerfil} alt="Foto do perfil" />
                            <button className="alterar-foto"><img src={alterarFoto} alt="icone de alterar foto de perfil" />Alterar foto de perfil</button>
                        </div>

                        <form className="modal-form">
                            <label>
                                Nome Completo:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                E-mail:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Senha Atual:
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={formData.currentPassword}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Nova Senha:
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </form>

                        <div className="modal-buttons">
                            <button className="save-button" onClick={handleSave}>Salvar alterações</button>
                            <button className="cancel-button" onClick={() => setShowModal(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Informações;

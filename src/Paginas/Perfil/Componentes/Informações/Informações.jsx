import React, { useState } from "react";
import './Informações.css';
import FotoPerfil from '../../../../assets/imagens/fotoDePerfil.jpg';
import IconeCoracao from '../../../../assets/icones/iconecoracao.svg';
import iconeLapis from '../../../../assets/icones/iconelapis.svg';
import alterarFoto from '../../../../assets/icones/alterarfoto.svg';

function Informações({ onNameChange }) {
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

    const [profilePicture, setProfilePicture] = useState(FotoPerfil);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        setUserInfo({
            name: formData.name || "Gabriel Augusto",
            email: formData.email,
        });

        if (onNameChange) {
            onNameChange(formData.name || "Gabriel Augusto");
        }

        setFormData({ ...formData, currentPassword: "", newPassword: "" });
        setShowModal(false);
    };

    const handleChangePictureClick = () => {
        document.getElementById("upload-photo").click();
    };

    return (
        <>
            <div className="container-informações-perfil">
                <div className="foto-de-perfil">
                    <img src={profilePicture} alt="Foto de perfil do usuário" />
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
                        <div className="modal-avatar">
                            <img src={profilePicture} alt="Foto do perfil" className="foto-perfil-usuario-alterar" />
                            <button className="alterar-foto" onClick={handleChangePictureClick}>
                                <img src={alterarFoto} className="alterarFoto" alt="icone de alterar foto de perfil" />
                                Alterar foto de perfil
                            </button>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                                id="upload-photo"
                            />
                        </div>

                        <form className="modal-form">
                            <label>
                                Nome Completo:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                E-mail:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Senha Atual:
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={formData.currentPassword}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Nova Senha:
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleInputChange}
                                    required
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

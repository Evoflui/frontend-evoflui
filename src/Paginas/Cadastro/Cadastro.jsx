import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';
import ImageLogin from '../../assets/imagens/imagemdelogin.svg';
import ImageSignUp from '../../assets/imagens/imagemderegistro.svg';
import UserIcon from '../../assets/icones/userIcon.svg';

function Cadastro() {
    //Cadastro
    const [nomeCadastro, setNomeCadastro] = useState('');
    const [emailCadastro, setEmailCadastro] = useState('');
    const [senhaCadastro, setSenhaCadastro] = useState('');
    const [confirmarSenhaCadastro, setConfirmarSenhaCadastro] = useState('');
    const [tipoUsuarioCadastro, setTipoUsuarioCadastro] = useState('');

    // Login
    const [emailLogin, setEmailLogin] = useState('');
    const [senhaLogin, setSenhaLogin] = useState('');

    // Tratamento de Erro
    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessageLogin, setErrorMessageLogin] = useState('');

    const navigate = useNavigate();

    const handleSignupClick = () => {
        setErrorMessage('');
        setErrorMessageLogin('');
        document.getElementById("login-signup-container").classList.add("sign-up-mode");
    }
    const handleLoginClick = () => {
        setErrorMessage('');
        setErrorMessageLogin('');
        document.getElementById("login-signup-container").classList.remove("sign-up-mode");
    }
    
    const formatNome = (e) => {
        setNomeCadastro(e.target.value.replace(/[^a-zA-Z]/g, ''));
    }
    
    // Lógica de Login
    const handleSignupSubmit = async (e) => {
        e.preventDefault();

        if(senhaCadastro !== confirmarSenhaCadastro) {
            setErrorMessage('As senhas não concidem');
            return;
        }

        const nomeTipo = tipoUsuarioCadastro === '1' ? 'MEMBRO' : 'TUTOR';

        const usuarioCadastrar = {
            nome: nomeCadastro,
            email: emailCadastro,
            senha: senhaCadastro,
            tipoUsuario: {
                "tipoId": tipoUsuarioCadastro,
                "nomeTipo": nomeTipo
            },
            progressoTrilha: 0,
            statusUsuario: "ATIVO"
        }

        try {
            const response = await fetch('http://localhost:8080/cadastro', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify(usuarioCadastrar)
                });

                console.log(response.status);

                if(response.status === 201) {
                    document.getElementById("login-signup-container").classList.remove("sign-up-mode");
                } else if(response.status === 409) {
                    setErrorMessage('Usuário com mesmo email já existente. Esqueceu a senha?');
                } else {
                    setErrorMessage('Erro desconhecido. Tente novamente.');
                }
        } catch (error) {
            navigate('/erro-404');
        }
    };

    //Lógica de Login
    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        const usuarioLogin = {
            email: emailLogin,
            senha: senhaLogin
        }

        
        try {
            const response = await fetch('http://localhost:8080/home', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(usuarioLogin)
            });

            if(response.status === 400) {
                setErrorMessageLogin('Campos vazios são inválidos!');
            } else if(response.status === 200) {
                navigate('/termos');
            } else if(response.status === 403) {
                setErrorMessageLogin('Senha incorreta! Esqueceu a senha?');
            } else if(response.status === 401) {
                setErrorMessageLogin('Usuário não encontrado! Cadastra-se.');
            }
        } catch (error) {
            navigate('/erro-404');
        }
    };


    return (
        <>
            <div className="login-signup-container" id="login-signup-container">
                <div className="forms-login-signup-container">
                    <div className="login-signup-div">
                        
                        <form onSubmit={handleLoginSubmit} className="login-form login-signup-form">
                            <h2 className="login-title">Acesso</h2>
                            <div className="login-input-field">
                                <input 
                                    type="email" 
                                    placeholder="E-mail" 
                                    value={emailLogin}
                                    onChange={(e) => setEmailLogin(e.target.value)}
                                    required 
                                />
                            </div>
                            <div className="login-input-field">
                                <input 
                                    type="password" 
                                    placeholder="Senha"
                                    value={senhaLogin}
                                    onChange={(e) => setSenhaLogin(e.target.value)}
                                    required 
                                />
                            </div>

                            <input type="submit" value="entrar" className="login-btn login-solid" />
                            {errorMessageLogin && <p style={{ color: 'red' }}>{errorMessageLogin}</p>}
                        </form>

                        <form onSubmit={handleSignupSubmit} className="signup-form login-signup-form">
                            <h2 className="login-title">Cadastro</h2>
                            <div className="login-input-field">
                                <input 
                                    type="text" 
                                    placeholder="Digite o seu nome" 
                                    value={nomeCadastro}
                                    onChange={formatNome}
                                    required 
                                />
                            </div>
                            <div className="login-input-field">
                                <input
                                    type="email"
                                    placeholder="Digite o seu email"
                                    value={emailCadastro}
                                    onChange={(e) => setEmailCadastro(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="login-input-field">
                                <input 
                                    type="password" 
                                    placeholder="Digite a sua senha" 
                                    value={senhaCadastro}
                                    onChange={(e) => setSenhaCadastro(e.target.value)}
                                    required 
                                    minLength={8} 
                                />
                            </div>
                            <div className="login-input-field">
                                <input 
                                    type="password" 
                                    placeholder="Digite a senha novamente" 
                                    value={confirmarSenhaCadastro}
                                    onChange={(e) => setConfirmarSenhaCadastro(e.target.value)}
                                    required 
                                    minLength={8} 
                                />
                            </div>

                            <div className='account-type-input-field'>
                                <div className='account-type-input-elements'>
                                    <input 
                                        type="radio" 
                                        name="tipoConta" 
                                        id="tipoMembro" 
                                        value={1}
                                        checked={tipoUsuarioCadastro === 1} 
                                        onChange={() => setTipoUsuarioCadastro(1)}
                                        required 
                                    />
                                    <img src={UserIcon} alt="Ícone de um usuário" className='account-type-icon' />
                                    <label className='account-type-label'>Conta Membro</label>
                                </div>

                                <div className='account-type-input-elements'>
                                    <input 
                                        type="radio" 
                                        name="tipoConta" 
                                        id="tipoTutor" 
                                        value={2}
                                        checked={tipoUsuarioCadastro === 2} 
                                        onChange={() => setTipoUsuarioCadastro(2)}
                                        required 
                                    />
                                    <img src={UserIcon} alt="Ícone de um usuário" className='account-type-icon' />
                                    <label className='account-type-label'>Conta Tutor</label>
                                </div>
                            </div>

                            <input type="submit" value="Cadastrar-se" className="login-btn login-solid" />
                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        </form>
                    </div>

                    <div className="panels-login-signup-container">
                        <div className="login-panel left-login-panel">
                            <div className="login-content">
                                <h3>Novo por aqui?</h3>
                                <p>Usufrua de tudo o que o Evoflui pode te proporcionar.</p>
                                <button
                                    id="sign-up-btn"
                                    className="login-btn btn-transparent"
                                    onClick={handleSignupClick}
                                >
                                    Cadastrar-se
                                </button>
                            </div>
                            <img
                                src={ImageLogin}
                                className="login-signup-image"
                                alt="vetor de uma pessoa logando em um site"
                            />
                        </div>

                        {/* Painel de Cadastro */}
                        <div className="login-panel right-login-panel">
                            <div className="login-content">
                                <h3>Já possui conta?</h3>
                                <p>Faça login para acessar todos os recursos do EvoFlui.</p>
                                <button
                                    id="login-btn"
                                    className="login-btn btn-transparent"
                                    onClick={handleLoginClick}
                                >
                                    Entrar
                                </button>
                            </div>
                            <img
                                src={ImageSignUp}
                                className="login-signup-image"
                                alt="vetor de uma pessoa se cadastrando em um site"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cadastro;


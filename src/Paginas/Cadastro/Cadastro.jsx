import ImageLogin from '../../assets/imagens/imagemdelogin.svg';
import ImageSignUp from '../../assets/imagens/imagemderegistro.svg';
import './Cadastro.css';
import { useRef, useState } from 'react';
import UserIcon from '../../assets/icones/userIcon.svg'
import { useNavigate } from 'react-router-dom';

function Cadastro() {
    const containerRef = useRef(null);
    const nomeCompletoRef = useRef(null);
    const senhaRef = useRef(null);
    const confirmarSenhaRef = useRef(null);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    // const [errorMessage, setErrorMessage] = useState(''); // mensagem de erro do forms
    const navigate = useNavigate();

    const handleSignupClick = () => {
        containerRef.current.classList.add("sign-up-mode");
    };

    const handleLoginClick = () => {
        containerRef.current.classList.remove("sign-up-mode");
    };

    const formatNomeCompleto = (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    }

    const handleSignupSubmit = (e) => {
        e.preventDefault(); 
        const senha = senhaRef.current.value;
        const confirmarSenha = confirmarSenhaRef.current.value;

        if (senha !== confirmarSenha) {
            console.log("Senhas diferentes")
            return
        } else {
            console.log("senhas iguais")
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const usuario = { email, senha };

        try {
            const response = await fetch('http://localhost:8080/home', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(usuario)
            });

            // Retorno do Backend em Status

            if(response.status === 200) {
                navigate("/home");
            } else if(response.status === 401) {
                
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            
        }
    };

    return (
        <>
            <div className="login-signup-container" ref={containerRef}>
                <div className="forms-login-signup-container">
                    <div className="login-signup-div">


                        <form onSubmit={handleLogin} className="login-form login-signup-form">
                            <h2 className="login-title">Acesso</h2>
                            <div className="login-input-field">
                                <input type="email" 
                                placeholder="E-mail" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                            </div>
                            <div className="login-input-field">
                                <input type="password" 
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)} 
                                required />
                            </div>
                            <input type="submit" value="entrar" className="login-btn login-solid" />
                        </form>



                        <form action="#" className="signup-form login-signup-form" onSubmit={handleSignupSubmit}>
                            <h2 className="login-title">Cadastro</h2>
                            <div className="login-input-field">
                                <input type="text" placeholder="Digite o seu nome completo" required ref={nomeCompletoRef} onChange={formatNomeCompleto}/>
                            </div>
                            <div className="login-input-field">
                                <input type="email" placeholder="Digite o endereço de e-mail" required />
                            </div>
                            <div className="login-input-field">
                                <input type="password" placeholder="Digite a sua senha" required minLength={8} ref={senhaRef} />
                            </div>
                            <div className="login-input-field">
                                <input type="password" placeholder="Digite a senha novamente" required minLength={8} ref={confirmarSenhaRef} />
                            </div>

                            <div className='account-type-input-field'>
                                <div className='account-type-input-elements' >
                                    <input type="radio" name="opcaoConta" id="contaMembro" value="contaMembro" required />
                                    <img src={UserIcon} alt="Ícone de um usuário" className='account-type-icon' />
                                    <label className='account-type-label'>Conta Membro</label>
                                </div>

                                <div className='account-type-input-elements'>
                                    <input type="radio" name="opcaoConta" id="contaTutor" value="contaTutor" required />
                                    <img src={UserIcon} alt="Ícone de um usuário" className='account-type-icon' />
                                    <label className='account-type-label'>Conta Tutor</label>
                                </div>
                            </div>

                            <input type="submit" value="Cadastrar-se" className="login-btn login-solid" />
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

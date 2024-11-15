import ImageLogin from '../../assets/imagens/imagemdelogin.svg';
import ImageSignUp from '../../assets/imagens/imagemderegistro.svg';
import './Cadastro.css';
import { useRef, useEffect } from 'react';
import UserIcon from '../../assets/icones/userIcon.svg'

function Cadastro() {
    const containerRef = useRef(null);
    const nomeCompletoRef = useRef(null);
    const senhaRef = useRef(null);
    const confirmarSenhaRef = useRef(null);

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

    return (
        <>
            <div className="login-signup-container" ref={containerRef}>
                <div className="forms-login-signup-container">
                    <div className="login-signup-div">


                        <form action="#" className="login-form login-signup-form">
                            <h2 className="login-title">Acesso</h2>
                            <div className="login-input-field">
                                <input type="email" placeholder="E-mail" required />
                            </div>
                            <div className="login-input-field">
                                <input type="password" placeholder="Senha" required />
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

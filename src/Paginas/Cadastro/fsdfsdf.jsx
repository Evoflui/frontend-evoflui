import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroPage = () =>  {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // mensagem de erro do forms
    const navigate = useNavigate();

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
                setErrorMessage('Usuário nao existe');
            } else {
                setErrorMessage('Erro desconhecido');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setErrorMessage('Erro no servidor. Tente novamente mais tarde.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default CadastroPage;
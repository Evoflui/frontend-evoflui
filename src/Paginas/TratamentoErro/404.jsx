import React from 'react';
import './Erro.css'; // Arquivo de estilo

const ErrorPage = () => {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-code">404</h1>
                <p className="error-message">Oops! A página que você está procurando não foi encontrada.</p>
                <button className="error-button" onClick={() => window.location.href = '/home'}>Voltar para a Home</button>
            </div>
        </div>
    );
}

export default ErrorPage;
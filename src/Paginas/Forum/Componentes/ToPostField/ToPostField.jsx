import './ToPostField.css';
import { useState } from 'react';
import gabrielIcon from '../../../../assets/imagens/gabrielIconForum.png';

function ToPostField({ addPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handlePost = () => {
        if (title.trim() && content.trim()) {
            addPost({
                title,
                author: 'Gabriel Augusto', 
                content,
                qntdComentarios: 0,
                qntdCurtidas: 0,
            });
            setTitle('');
            setContent('');
        } else {
            alert('Por favor, preencha o título e o conteúdo da postagem.');
        }
    };

    return (
        <div className="post-field-section">
            <div className="post-field-container">
                <div className="post-field-informations">
                    <div className="post-field-user-informations">
                        <img src={gabrielIcon} alt="Imagem do usuário" />
                        <p className="post-field-user-name">Gabriel Augusto</p>
                    </div>
                    <button className="post-field-user-action" onClick={handlePost}>
                        Postar
                    </button>
                </div>
                <textarea
                    placeholder="Escreva o título da postagem..."
                    className="post-field-user-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></textarea>
                <textarea
                    placeholder="Escreva aqui a sua mensagem..."
                    className="post-field-user-text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>
        </div>
    );
}

export default ToPostField;

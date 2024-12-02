import './UserPost.css';
import chatIcon from '../../../../../assets/imagens/chatIcon.svg';
import favoriteIcon from '../../../../../assets/imagens/favoriteIcon.svg';
import favoriteIconFull from '../../../../../assets/imagens/favoriteIconFull.svg';
import warnIcon from '../../../../../assets/icones/warnIcon.svg';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';

function UserPost({ title, author, content, qntdComentarios, qntdCurtidas }) {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(qntdCurtidas); 

    useEffect(() => {
        setLikes(qntdCurtidas);
    }, [qntdCurtidas]);

    const handleLikeClick = () => {
        if (isLiked) {
            setIsLiked(false);
            setLikes(likes - 1);
        } else {
            setIsLiked(true);
            setLikes(likes + 1);
        }
    };

    const handleReport = async (e) => {
        e.preventDefault();
      
        const { value: reason } = await Swal.fire({
          title: "Denunciar postagem",
          input: "textarea",
          inputPlaceholder: "Escreva o motivo aqui da denúncia aqui...",
          inputAttributes: {
            "aria-label": "Escreva o motivo aqui"
          },
          showCancelButton: true,
          confirmButtonColor: "#009CDE",
          cancelButtonColor: "#575757",
          confirmButtonText: "Confirmar Envio",
          cancelButtonText: "Cancelar",
          inputValidator: (value) => {
            if (!value) {
              return "Você precisa escrever o motivo da denúncia!";
            }
          }
        });
      
        if (reason) {
          Swal.fire({
            title: "Enviado!",
            text: "Sua denúncia foi enviada com sucesso. Obrigado por nos ajudar a manter a comunidade segura.",
            icon: "success",
          })
        }
      };
      

    return (
        <div className="user-post-section">
            <main className="user-post-container">
                <h1 className="user-post-title">{title}</h1>
                <p className="user-post-author">por: {author}</p>
                <p className="user-post-content">{content}</p>

                <section className="user-post-interactions">
                    <div className="user-post-comment-like">
                        <a href="#" className="user-post-action">
                            <img
                                src={chatIcon}
                                alt="Ícone de mensagens"
                                className="user-post-icon"
                            />
                            {qntdComentarios} {qntdComentarios == 1 ? "comentário" : "comentários"}
                        </a>
                        <p className="user-post-action" onClick={handleLikeClick}>
                            <img
                                src={isLiked ? favoriteIconFull : favoriteIcon}
                                alt="Ícone de curtidas"
                                className="user-post-icon"
                            />
                            {likes} {likes == 1 ? "curtida" : "curtidas"}
                        </p>
                    </div>
                    <a onClick={handleReport} className="user-post-see-more"><img src={warnIcon} alt="ícone de denúncia" className='user-post-icon' />Denunciar</a>
                </section>
            </main>
        </div>
    );
}

export default UserPost;

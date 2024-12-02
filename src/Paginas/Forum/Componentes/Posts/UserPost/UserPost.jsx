import './UserPost.css';
import chatIcon from '../../../../../assets/imagens/chatIcon.svg';
import favoriteIcon from '../../../../../assets/imagens/favoriteIcon.svg';
import favoriteIconFull from '../../../../../assets/imagens/favoriteIconFull.svg';
import warnIcon from '../../../../../assets/icones/warnIcon.svg';
import gabrielIcon from '../../../../../assets/imagens/gabrielIconForum.png';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { CSSTransition } from "react-transition-group";

function UserPost({ title, author, content, qntdComentarios, qntdCurtidas, userCommentText, userCommentName, userCommentText2, userCommentName2, userCommentText3, userCommentName3 }) {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(qntdCurtidas);
    const [commentsVisible, setCommentsVisible] = useState(false);

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
            inputPlaceholder: "Escreva o motivo da denúncia aqui...",
            inputAttributes: {

                style: "resize: none; font-family: Montserrat, sans-serif"
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

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Comentário enviado",
            text: "Seu comentário está sendo analisado pela nossa equipe para garantir a segurança da comunidade. Em breve, ele estará visível para todos!",
            icon: "success"
        }).then(() => {
            e.target.reset();
        });
    }

    const toggleComments = () => {
        setCommentsVisible(!commentsVisible);
    };


    return (
        <div className="user-post-section">
            <main className="user-post-container">
                <h1 className="user-post-title">{title}</h1>
                <p className="user-post-author">por: {author}</p>
                <p className="user-post-content">{content}</p>

                <section className="user-post-interactions">
                    <div className="user-post-comment-like">
                        <a className="user-post-action" onClick={toggleComments}>
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
            <main className="post-comment-section">

            <CSSTransition
    in={commentsVisible}
    timeout={300} 
    classNames="fade" 
    unmountOnExit 
>

                        <section className="users-comments-section" >
                            {userCommentText && userCommentName && (
                                <div className="user-comment">
                                    <p className="user-comment-text">{userCommentText}</p>
                                    <p className="user-comment-name">por: <b>{userCommentName}</b></p>
                                </div>
                            )}

                            {userCommentText2 && userCommentName2 && (
                                <div className="user-comment">
                                    <p className="user-comment-text">{userCommentText2}</p>
                                    <p className="user-comment-name">por: <b>{userCommentName2}</b></p>
                                </div>
                            )}

                            {userCommentText3 && userCommentName3 && (
                                <div className="user-comment">
                                    <p className="user-comment-text">{userCommentText3}</p>
                                    <p className="user-comment-name">por: <b>{userCommentName3}</b></p>
                                </div>
                            )}



                            <form className="to-comment-container" onSubmit={handleCommentSubmit}>
                                <img src={gabrielIcon} alt="ícone do perfil" className='user-comment-icon' />
                                <textarea name="user-comment" placeholder='Comente algo...' className="to-comment-element" required></textarea>
                                <button type='submit' className='to-comment-submit'>Enviar</button>
                            </form>

                        </section>

                        </CSSTransition>
                    
            </main>
        </div>
    );
}

export default UserPost;

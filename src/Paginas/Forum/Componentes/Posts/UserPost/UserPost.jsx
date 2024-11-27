import './UserPost.css'
import chatIcon from '../../../../../assets/imagens/chatIcon.svg'
import favoriteIcon from '../../../../../assets/imagens/favoriteIcon.svg'

function UserPost(props){
    return(
        <div className='user-post-section'>
            <main className="user-post-container">
                <h1 className="user-post-title">{props.title}</h1>
                <p className="user-post-author">por: {props.author}</p>
                <p className="user-post-content">{props.content}</p>

                <section className="user-post-interactions">
                    <div className="user-post-comment-like">
                        <a href="" className="user-post-action"><img src={chatIcon} alt="ícone de mensagens" className='user-post-icon'/>{props.qntdComentarios} comentários</a>
                        <a href="" className="user-post-action"><img src={favoriteIcon} alt="ícone de um coração" className='user-post-icon'/>{props.qntdCurtidas} curtidas</a>
                    </div>
                    <a href="" className="user-post-see-more">Ver tudo</a>
                </section>
            </main>
        </div>
    )
}

export default UserPost;
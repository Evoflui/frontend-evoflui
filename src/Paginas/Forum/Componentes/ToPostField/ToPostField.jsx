import './ToPostField.css'
import gabrielIcon from '../../../../assets/imagens/gabrielIconForum.png';

function ToPostField() {
    return (
        <div className="post-field-section">
            <div className="post-field-container">
                <div className="post-field-informations">
                    <div className="post-field-user-informations">
                        <img src={gabrielIcon} alt="imagem do usuário" />
                        <p className="post-field-user-name">Gabriel Augusto</p>
                    </div>
                    <a href="" className="post-field-user-action">Postar</a>
                </div>
                <textarea placeholder='Escreva aqui a sua mensagem...' className="post-field-user-text">

                </textarea>
            </div>
        </div>
    )
}

export default ToPostField;
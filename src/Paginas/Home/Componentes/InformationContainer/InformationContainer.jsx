import './InformationContainer.css';
import AutisticFriends from '../../../../assets/imagens/AutisticFriends.svg'

function InformationContainer() {
    return (
        <div>
            <section className="information-container">
                <img src={AutisticFriends} alt="Dois jovens autistas interagindo e sorrindo entre si"/>
                <div className="info-container">
                    <h1 className='info-title'>Transtorno do Espectro Autista</h1>
                    <p className="info-text">Transtorno do Espectro Autista, ou TEA, é uma condição neurológica que afeta o desenvolvimento social, a comunicação e o comportamento. Pessoas com TEA podem ter diferentes formas de pensar e interagir com o mundo, e suas características variam amplamente de uma pessoa para outra. O suporte adequado e a inclusão são essenciais para garantir seu bem-estar.</p>
                    <a href="https://www.gov.br/saude/pt-br/assuntos/noticias/2022/abril/tea-saiba-o-que-e-o-transtorno-do-espectro-autista-e-como-o-sus-tem-dado-assistencia-a-pacientes-e-familiares" className="info-button" target="blank">Saber mais</a>
                </div>
            </section>
        </div>
    )
}

export default InformationContainer;
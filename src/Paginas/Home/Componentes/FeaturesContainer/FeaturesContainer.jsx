import './FeaturesContainer.css'
import LampIcon from '../../../../assets/icones/lampicon.svg'
import PeopleIcon from '../../../../assets/icones/peopleIcon.svg'
import ConfettiIcon from '../../../../assets/icones/confettiIcon.svg'

function FeaturesContainer() {
    return (
        <div>
            <main className="features-container">
                <section className="right-content">
                    <div className="top-info">
                        <img src={LampIcon} alt="ícone de uma lâmpada" />
                        <h1 className="title-info">Trilha de Desenvolvimento</h1>
                    </div>
                    <p className="text-info">Oferecemos uma trilha de desenvolvimento social para pessoas autistas e, para os tutores, uma trilha focada na conscientização sobre a neurodivergência, com recursos práticos de apoio.</p>
                </section>

                <section className="left-content">
                    <div className="top-info">
                        <img src={ConfettiIcon} alt="ícone de várias pessoas em conjuntos" />
                        <h1 className="title-info">Fórum de Tutores</h1>
                    </div>
                    <p className="text-info">Um fórum exclusivo para tutores, onde é possível trocar
                        experiências e dicas sobre o acompanhamento de
                        crianças neurodivergentes.</p>
                </section>

                <section className="second-right-content">
                    <div className="top-info">
                        <img src={PeopleIcon} alt="ícone de confetti" />
                        <h1 className="title-info">Eventos Especiais</h1>
                    </div>
                    <p className="text-info">Promovemos e divulgamos encontros especializados voltados para o autismo, visando o engajamento e a troca de experiências.</p>
                </section>

            </main>
        </div>
    )
}

export default FeaturesContainer;
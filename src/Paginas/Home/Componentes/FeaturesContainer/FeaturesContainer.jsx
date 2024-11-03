import React from 'react';
import './FeaturesContainer.css'
import LampIcon from '../../../../assets/icones/lampicon.svg'
import PeopleIcon from '../../../../assets/icones/peopleIcon.svg'
import ConfettiIcon from '../../../../assets/icones/confettiIcon.svg'

function FeaturesContainer() {
    return (
        <div>
            <main className="features-container">
                <section className="purple-content">
                    <div className="features-top-info">
                        <img src={LampIcon} alt="ícone de uma lâmpada" />
                        <h1 className="title--features-info">Trilha de Desenvolvimento</h1>
                    </div>
                    <p className="text-features-info">Oferecemos uma trilha de desenvolvimento social para pessoas autistas e, para os tutores, uma trilha focada na conscientização sobre a neurodivergência, com recursos práticos de apoio.</p>
                </section>

                <section className="pink-content">
                    <div className="features-top-info">
                        <img src={ConfettiIcon} alt="ícone de várias pessoas em conjuntos" />
                        <h1 className="title--features-info">Fórum de Tutores</h1>
                    </div>
                    <p className="text-features-info">Um fórum exclusivo para tutores, onde é possível trocar
                        experiências e dicas sobre o acompanhamento de
                        crianças neurodivergentes.</p>
                </section>

                <section className="purple-content">
                    <div className="features-top-info">
                        <img src={PeopleIcon} alt="ícone de confetti" />
                        <h1 className="title--features-info">Eventos Especiais</h1>
                    </div>
                    <p className="text-features-info">Promovemos e divulgamos encontros especializados voltados para o autismo, visando o engajamento e a troca de experiências entre pessoas.</p>
                </section>

            </main>
        </div>
    )
}

export default FeaturesContainer;
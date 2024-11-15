import React from 'react';
import './QuemSomos.css';
import Camisa from '../../../../assets/imagens/Camiseta.png';

function QuemSomos() {
    return (
        <>
            <div className='container-quem-somos'>
                <div className='sobre-nos-texto'>
                    <p>Sobre Nós</p>
                </div>
            </div>

            <div className='container-quem-somos-azul'>
                <div className='quem-somos-texto'>
                    <p>Quem somos?</p>
                </div>
            </div>

            <div className='imagem-e-texto'>
                <img src={Camisa} alt="Camisa branco com o logomarca do evoflui" />
                <p> No EvoFlui, acreditamos que o desenvolvimento pessoal e o apoio mútuo são pilares
                    fundamentais para o bem-estar e a inclusão de pessoas com TEA. Nossa plataforma foi criada com o objetivo de oferecer uma trilha de
                    desenvolvimento personalizada, tanto para as pessoas neurodivergentes quanto para
                    seus tutores, permitindo que ambos cresçam juntos nessa jornada.
                    <br />
                    <br />
                    Com o EvoFlui, queremos facilitar o acesso a informações, além de promover o
                    desenvolvimento contínuo e criar uma rede de suporte, para que ninguém enfrente
                    essa jornada sozinho. O conhecimento transforma, e por isso,
                    buscamos proporcionar uma experiência que não só informa, mas que também
                    empodera. Nossa plataforma oferece conteúdos, ferramentas e uma estrutura de
                    suporte pensada para facilitar o crescimento em todas as etapas do processo de
                    aprendizado.</p>
            </div>
        </>
    );
}

export default QuemSomos;

import React from 'react';
import './Equipe.css';
import Aleksandra from '../../../../assets/imagens/aleksandraa.svg';
import Caroline from '../../../../assets/imagens/carolinee.svg';
import Elton from '../../../../assets/imagens/elton.svg';
import Gustavo from '../../../../assets/imagens/gustavo.svg';
import Josineudo from '../../../../assets/imagens/josineudo.svg';
import Leonardo from '../../../../assets/imagens/leonardo.svg';
import Nicole from '../../../../assets/imagens/nicole.svg';
import Vinicius from '../../../../assets/imagens/vinicius.svg';

function Equipe() {
    return (
        <>
            <div className='container-equipe'>
                <div>

                    <div className='texto-equipe'>
                        <p className='por-tras'> Por trás do Evoflui</p>
                        <p className='conheca'> Conheça a equipe que se dedica em criar um futuro mais inclusivo e acolhedor para todos.</p>
                    </div>

                    <div className="container-divisao">

                        <div className='fotos'>
                            <img src={Aleksandra} alt="Foto membro" />
                            <p className='nome'> Aleksandra Marto</p>
                            <p className='funcao'> Desenvolvedora Back-End</p>
                        </div>

                        <div className='fotos'>
                            <img src={Caroline} alt="Foto membro" />
                            <p className='nome'> Caroline Fernandes</p>
                            <p className='funcao'> Financeiro & <br></br>
                                Desenvolvedor Front-end</p>
                        </div>


                        <div className='fotos'>
                            <img src={Elton} alt="Foto membro" />
                            <p className='nome'> Elton Santos </p>
                            <p className='funcao'> Scrum Master & <br></br>
                                Desenvolvedor Fulstack</p>
                        </div>

                        <div className='fotos'>
                            <img src={Gustavo} alt="Foto membro" />
                            <p className='nome'> Gustavo Portela </p>
                            <p className='funcao'> UI/UX Designer & <br></br>
                                Desenvolvedor Front-end</p>
                        </div>

                    </div>

                    <div className="container-divisao">
                        <div className='fotos'>

                            <img src={Josineudo} alt="Foto membro" />
                            <p className='nome'>Josineudo Arruda</p>
                            <p className='funcao'> Product Owner & <br></br>
                                Desenvolvedor Fullstack</p>
                        </div>

                        <div className='fotos'>
                            <img src={Leonardo} alt="Foto membro" />
                            <p className='nome'> Leonardo Melo </p>
                            <p className='funcao'> Desenvolvedor Back-end</p>
                        </div>


                        <div className='fotos'>
                            <img src={Nicole} alt="Foto membro" />
                            <p className='nome'> Nicole Marcondes </p>
                            <p className='funcao'> Social Media & <br></br>
                                Desenvolvedor Front-end</p>
                        </div>

                        <div className='fotos'>
                            <img src={Vinicius} alt="Foto membro" />
                            <p className='nome'> Vinicius Cezario </p>
                            <p className='funcao'>Desenvolvedor Back-end</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Equipe;

import React from 'react';
import './Equipe.css';
import Aleksandra from '../../../../assets/imagens/aleksandraa.svg';
import Caroline from '../../../../assets/imagens/caroline.svg';
import Elton from '../../../../assets/imagens/elton.svg';
import Gustavo from '../../../../assets/imagens/gustavo.svg';

function Equipe() {
    return (
        <>
            <div className='texto-equipe'>
                <p className='por-tras'> Por trás do Evoflui</p>
                <p className='conheca'> Conheça a equipe que se dedica em criar um futuro mais inclusivo e acolhedor para todos.</p>
            </div>
            <div>
                <div className='container-equipe'>

                    <div className='fotos'>
                        
                        <img src={Aleksandra} alt="Foto membro" />
                        <div className='funcoes'></div>
                        <p className='nome'> Aleksandra Marto</p>
                        <p className='funcao'> Desenvolvedora Back-End</p>
                    </div>

                    <div className='fotos'>
                        <img src={Caroline} alt="Foto membro" />
                        <div className='funcoes'></div>
                        <p className='nome'> Caroline Fernandes</p>
                        <p className='funcao'> Financeiro & 
                        Desenvolvedor Front-end</p>
                    </div>


                    <div className='fotos'>
                        <img src={Elton} alt="Foto membro" />
                        <div className='funcoes'></div>
                        <p className='nome'> Elton Santos </p>
                        <p className='funcao'> Scrum Master &
                        Desenvolvedor Fulstack</p>
                    </div>

                    <div className='fotos'>
                        <img src={Gustavo} alt="Foto membro" />
                        <div className='funcoes'></div>
                        <p className='nome'> Gustavo Portela </p>
                        <p className='funcao'> UI/UX Designer &
                        Desenvolvedor Front-end</p>
                    </div> 

                  

                    <div className='fotos'>
                        
                        <img src={Aleksandra} alt="Foto membro" />
                        <div className='funcoes'></div>
                        <p className='nome'> Aleksandra Marto</p>
                        <p className='funcao'> Desenvolvedora Back-End</p>
                    </div>

                    <div className='fotos'>
                        <img src={Caroline} alt="Foto membro" />
                        <div className='funcoes'></div>
                        <p className='nome'> Caroline Fernandes</p>
                        <p className='funcao'> Financeiro & 
                        Desenvolvedor Front-end</p>
                    </div>


                    <div className='fotos'>
                        <img src={Elton} alt="Foto membro" />
                        <div className='funcoes'></div>
                        <p className='nome'> Elton Santos </p>
                        <p className='funcao'> Scrum Master &
                        Desenvolvedor Fulstack</p>
                    </div>

                    <div className='fotos'>
                        <img src={Gustavo} alt="Foto membro" />
                        <div className='funcoes'></div>
                        <p className='nome'> Gustavo Portela </p>
                        <p className='funcao'> UI/UX Designer &
                        Desenvolvedor Front-end</p>
                    </div> 
                    
                </div>
            </div>
        </>
    )
}

export default Equipe;

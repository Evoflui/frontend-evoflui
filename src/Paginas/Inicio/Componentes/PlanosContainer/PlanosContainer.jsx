import './PlanosContainer.css';
import VerifiedIcon from '../../../../assets/icones/verifiedicon.svg'
import HeartIcon from '../../../../assets/icones/hearticon.svg'
import ReturnIcon from '../../../../assets/icones/returnIcon.svg'
import CertificationIcon from '../../../../assets/icones/certificationIcon.svg'
import CheckIcon from '../../../../assets/icones/checkIcon.svg'
import ReturnIcon2 from '../../../../assets/icones/returnIcon2.svg'
import BusinessIcon from '../../../../assets/icones/businessIcon.svg'
import AnalyticsIcon from '../../../../assets/icones/analyticsIcon.svg'
import LibraryIcon from '../../../../assets/icones/libraryIcon.svg'
import { Link } from 'react-router-dom';

function PlanosContainer(){
    return(
        <div>
            <main className="planos-payment-section">

                <h1 className="payment-title-section">Se torne um apoiador!</h1>
                <p className="payment-subtitle-section">Apoie a nossa causa e nos ajude a continuar mudando vidas.</p>

                <article className='planos-payment-container'>


                    <section className='plano-payment-month'>
                        <h1 className='plano-payment-month-name'>FluiPlus</h1>
                    
                        <div className='plano-payment-month-benefit'>
                            <img src={VerifiedIcon} alt="ícone de verificação" className='benefit-img'/>
                            <p className='payment-month-benefit-desc'>Livre de anúncios.</p>
                        </div>

                        <div className='plano-payment-month-benefit'>
                            <img src={HeartIcon} alt="ícone de coração" className='benefit-img'/>
                            <p className='payment-month-benefit-desc'>Vidas ilimitadas.</p>
                        </div>

                        <div className='plano-payment-month-benefit'>
                            <img src={LibraryIcon} alt="ícone de uma biblioteca" className='benefit-img'/>
                            <p className='payment-month-benefit-desc'>Acesso antecipado a conteúdos.</p>
                        </div>


                        <h2 className='plano-payment-month-price'>R$11,99</h2>
                        <p className='plano-payment-month-type'>Plano mensal</p>
                        <Link to='./pagamento' className='plano-payment-month-button'>Assine Agora</Link>
                    </section>


                    <section className='plano-payment-month'>
                        <h1 className='plano-payment-month-name'>FluiPro</h1>
                    
                        <div className='plano-payment-month-benefit'>
                            <img src={ReturnIcon} alt="ícone de retornar" className='benefit-img'/>
                            <p className='payment-month-benefit-desc'>Todos os benefícios anteriores.</p>
                        </div>

                        <div className='plano-payment-month-benefit'>
                            <img src={CertificationIcon} alt="ícone de um certificado" className='benefit-img'/>
                            <p className='payment-month-benefit-desc'>Certificados de conclusão.</p>
                        </div>

                        <div className='plano-payment-month-benefit'>
                            <img src={CheckIcon} alt="ícone de verificação" className='benefit-img'/>
                            <p className='payment-month-benefit-desc'>Selo de verificação na plataforma.</p>
                        </div>


                        <h2 className='plano-payment-month-price'>R$13,99</h2>
                        <p className='plano-payment-month-type'>Plano mensal</p>
                        <Link to='./pagamento' className='plano-payment-month-button'>Assine Agora</Link>
                    </section>


                    <section className='plano-year'>
                        <h1 className='plano-year-name'>FluiBusiness</h1>
                    
                        <div className='plano-year-benefit'>
                            <img src={ReturnIcon2} alt="ícone de retornar" className='benefit-img'/>
                            <p className='year-benefit-desc'>Todos os benefícios anteriores.</p>
                        </div>

                        <div className='plano-year-benefit'>
                            <img src={BusinessIcon} alt="ícone de um prédio" className='benefit-img'/>
                            <p className='year-benefit-desc'>Uso corporativo em onBoarding.</p>
                        </div>

                        <div className='plano-year-benefit'>
                            <img src={AnalyticsIcon} alt="ícone de uma lupa verificando dados" className='benefit-img'/>
                            <p className='year-benefit-desc'>Acompanhamento em tempo real.</p>
                        </div>

                        <h2 className='plano-year-price'>Valor Negociável</h2>
                        <p className='plano-year-type'>Plano anual</p>
                        <Link to='./fale-conosco' className='plano-year-button'>Entre em Contato</Link>
                    </section>
                </article>
            </main>
        </div>
    )
}

export default PlanosContainer;
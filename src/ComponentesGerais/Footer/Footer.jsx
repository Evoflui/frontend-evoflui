import './Footer.css'
import LogoFooter from '../../assets/icones/logoFooter.svg'
import LinkedinIcon from '../../assets/icones/linkedinIcon.svg'
import InstagramIcon from '../../assets/icones/instagramIcon.svg'

function Footer(){
    return(
        <div class="footer">
            <section className='footer-part-one'>
                <img src={LogoFooter} alt="Logomarca do Evoflui"/>
                <ul className='lista-footer'>
                    <li className="lista-item"><a href="#" className='lista-item-link'>Sobre Nós</a></li>
                    <li className="lista-item"><a href="#" className='lista-item-link'>Fale Conosco</a></li>
                    <li className="lista-item"><a href="#" className='lista-item-link'>Política de Privacidade</a></li>
                    <li className="lista-item"><a href="#" className='lista-item-link'>Termos de Uso</a></li>
                </ul>
            </section>

            <hr className='linha-horizontal'/>

            <section className='footer-part-two'>
                <p className='copyright-footer'>Evoflui © 2024. Todos os direitos reservados.</p>
                <div className='social-medias-footer'>
                    <a href="https://www.linkedin.com/company/evoflui" target="blank"><img src={LinkedinIcon}/></a>
                    <a href="https://www.instagram.com/evoflui_/" target="blank"><img src={InstagramIcon}/></a>
                </div>
            </section>
        </div>
    )
}

export default Footer;
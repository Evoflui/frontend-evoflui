import './Footer.css'
import LogoFooter from '../../assets/icones/logoFooter.svg'
import LinkedinIcon from '../../assets/icones/linkedinIcon.svg'
import InstagramIcon from '../../assets/icones/instagramIcon.svg'
import { Link } from 'react-router-dom'; 

function Footer(){
    const scrollToTop = (event) => {
        event.preventDefault();
        const headerSection = document.getElementById('header-section');
        if (headerSection) {
          headerSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

    return(
        <div class="footer">
            <section className='footer-part-one'>
                <a href="#header-section" onClick={scrollToTop}><img src={LogoFooter} alt="Logomarca do Evoflui"/></a>
                <ul className='lista-footer'>
                    <li className="lista-item"><Link to="/sobre-nos" className='lista-item-link'>Sobre Nós</Link></li>
                    <li className="lista-item"><Link to="/fale-conosco" className='lista-item-link'>Fale Conosco</Link></li>
                    <li className="lista-item"><Link to="/politica-de-privacidade" className='lista-item-link'>Política de Privacidade</Link></li>
                    <li className="lista-item"><Link to="/termos-de-uso" className='lista-item-link'>Termos de Uso</Link></li>
                </ul>
            </section>

            <hr className='linha-horizontal-footer'/>

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
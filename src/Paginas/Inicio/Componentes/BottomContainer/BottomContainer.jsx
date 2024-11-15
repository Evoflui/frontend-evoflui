import './BottomContainer.css'
import FamilyImage from '../../../../assets/imagens/familyimage.svg'

function BottomContainer(){
    return(
        <div>
            <section className="bottom-container">
            <img src={FamilyImage} alt="Imagem de uma mãe brincando de quebra-cabeça com o seu filho" className='image-bottom-container'/>
            <h1 className='title-bottom-container'>Seja único, seja Evoflui</h1>
            <p className='text-bottom-container'>Tenha acesso a recursos personalizados, eventos e uma rede de apoio dedicada ao seu desenvolvimento. Venha fazer parte de uma jornada que conecta você ao seu verdadeiro potencial.</p>
            <div className="button-container">
                <a href="#" className='bottom-signup-button'>Comece agora</a>
                <a href="#" className='signin-button'>Já tenho conta</a>
            </div>
            </section>
        </div>
    )
}

export default BottomContainer;
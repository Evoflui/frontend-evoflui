import HeaderInterno from '../../ComponentesGerais/HeaderInterno/HeaderInterno';
import Footer from '../../ComponentesGerais/Footer/Footer';
import BoasVindas from './Componentes/BoasVindas/BoasVindas';
import DashBoard from './Componentes/DashBoard/DashBoard';  

function Home(){
    return(
        <div>
            <HeaderInterno/>
            <BoasVindas/>
            <DashBoard/>  
            <Footer/>
        </div>
    )
}

export default Home;

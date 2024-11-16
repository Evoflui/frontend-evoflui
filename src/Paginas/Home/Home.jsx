import Header from '../../ComponentesGerais/Header/Header';
import Footer from '../../ComponentesGerais/Footer/Footer';
import BoasVindas from './Componentes/BoasVindas/BoasVindas';
import DashBoard from './Componentes/DashBoard/DashBoard';  // Manter a importação

function Home(){
    return(
        <div>
            <Header/>
            <BoasVindas/>
            <DashBoard/>  {/* Manter o componente */}
            <Footer/>
        </div>
    )
}

export default Home;

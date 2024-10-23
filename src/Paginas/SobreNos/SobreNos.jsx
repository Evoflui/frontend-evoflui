import Footer from '../../ComponentesGerais/Footer/Footer';
import Header from '../../ComponentesGerais/Header/Header';
import Equipe from './Componentes/Equipe/Equipe';
import QuemSomos from './Componentes/QuemSomos/QuemSomos'
import Valores from './Componentes/Valores/Valores';
import './SobreNos.css';

function SobreNos(){
    return (
        <div>
            <Header/>
            <QuemSomos/>
            <Valores/>
            <Equipe/>
            <Footer/>
        </div>
    )
}

export default SobreNos;
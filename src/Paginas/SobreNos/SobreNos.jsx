import Header from '../../ComponentesGerais/Header/Header';
import QuemSomos from './Componentes/QuemSomos/QuemSomos'
import Valores from './Componentes/Valores/Valores';
import './SobreNos.css';

function SobreNos(){
    return (
        <div>
            <Header/>
            <QuemSomos/>
            <Valores/>
        </div>
    )
}

export default SobreNos;
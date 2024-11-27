import Header from "../../ComponentesGerais/Header/Header";
import Lista from "./Componentes/Lista/Lista";
import Termos from './Componentes/Termos/Termos';
import Footer from '../../ComponentesGerais/Footer/Footer';


function TermosDeUso(){
    return(
        <div>
            <Header/>
            <Termos/>
            <Lista/>
            <Footer/>
            
        </div>
    )
}

export default TermosDeUso;
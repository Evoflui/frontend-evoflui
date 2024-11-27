import Header from "../../ComponentesGerais/Header/Header";
import Politica from "./Componentes/Politica/Politica";
import Privacidade from "./Componentes/Privacidade/Privacidade";
import Footer from '../../ComponentesGerais/Footer/Footer';

function PoliticaDePrivacidade(){
    return(
        <div>
            <Header/>
            <Politica/>
            <Privacidade/>
            <Footer/>
            
        </div>
    );
};

export default PoliticaDePrivacidade;
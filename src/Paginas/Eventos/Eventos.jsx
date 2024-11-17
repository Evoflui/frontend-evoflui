import Titulo from "./Componentes/Titulo/Titulo";
import Header from "../../ComponentesGerais/HeaderInterno/HeaderInterno"
import Footer from '../../ComponentesGerais/Footer/Footer'
import Mapa from './Componentes/Mapa/Mapa'

function Eventos(){
    return (
        <div>
            <Header/>
            <Titulo/>
            <Mapa/>
            <Footer/>
        </div>
    )
}

export default Eventos;
import ToPostField from "./Componentes/ToPostField/ToPostField";
import Header from '../../ComponentesGerais/HeaderInterno/HeaderInterno'
import Posts from './Componentes/Posts/Posts'
import Footer from '../../ComponentesGerais/Footer/Footer'


function Forum(){
    return (
        <div>
            <Header/>
            <ToPostField/>
            <Posts/>
            <Footer/>
        </div>
    )
}

export default Forum;
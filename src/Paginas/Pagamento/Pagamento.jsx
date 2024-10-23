import Footer from "../../ComponentesGerais/Footer/Footer";
import Header from "../../ComponentesGerais/Header/Header";
import Form from "./Componentes/Form/Form";
import Title from "./Componentes/Title/Title";

function Pagamento(){
    return(
        <div>
            <Header/>
            <Title/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Pagamento;
import Header from "../../ComponentesGerais/Header/Header";
import Footer from "../../ComponentesGerais/Footer/Footer";
import ContactForm from "./Componentes/ContactForm/ContactForm";
import TopInfo from "./Componentes/TopInfo/TopInfo";

function FaleConosco(){
    return(
        <div> 
            <Header/>
            <TopInfo/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default FaleConosco;
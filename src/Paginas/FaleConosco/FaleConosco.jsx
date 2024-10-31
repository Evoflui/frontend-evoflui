import Header from "../../ComponentesGerais/Header/Header";
import Footer from "../../ComponentesGerais/Footer/Footer";
import ContactForm from "./Componentes/ContactForm/ContactForm";
import TopInfo from "./Componentes/TopInfo/TopInfo";
import BottomInfo from "./Componentes/BottomInfo/Bottominfo";

function FaleConosco(){
    return(
        <div> 
            <Header/>
            <TopInfo/>
            <ContactForm/>
            <BottomInfo/>
            <Footer/>
        </div>
    )
}

export default FaleConosco;
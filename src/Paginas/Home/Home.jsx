import Header from "../../ComponentesGerais/Header/Header";
import FeaturesContainer from "./Componentes/FeaturesContainer/FeaturesContainer";
import TopContainer from "./Componentes/TopContainer/TopContainer";

function Home(){
    return(
        <div>
            <Header/>
            <TopContainer/>
            <FeaturesContainer/>
        </div>
    )
}

export default Home;
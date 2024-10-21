import React from 'react';
import Header from "../../ComponentesGerais/Header/Header";
import FeaturesContainer from "./Componentes/FeaturesContainer/FeaturesContainer";
import TopContainer from "./Componentes/TopContainer/TopContainer";
import UserFeedbacks from "./Componentes/UserFeedbacks/UserFeedbacks";
import InformationContainer from './Componentes/InformationContainer/InformationContainer';
import PlanosContainer from './Componentes/PlanosContainer/PlanosContainer';
import BottomContainer from './Componentes/BottomContainer/BottomContainer';
import Footer from '../../ComponentesGerais/Footer/Footer';

function Home(){
    return(
        <div>
            <Header/>
            <TopContainer/>
            <FeaturesContainer/>
            <UserFeedbacks/>
            <InformationContainer/>
            <PlanosContainer/>
            <BottomContainer/>
            <Footer/>
        </div>
    )
}

export default Home;
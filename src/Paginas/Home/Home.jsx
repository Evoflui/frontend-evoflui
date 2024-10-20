import React from 'react';
import Header from "../../ComponentesGerais/Header/Header";
import FeaturesContainer from "./Componentes/FeaturesContainer/FeaturesContainer";
import TopContainer from "./Componentes/TopContainer/TopContainer";
import UserFeedbacks from "./Componentes/UserFeedbacks/UserFeedbacks";
import InformationContainer from './Componentes/InformationContainer/InformationContainer';

function Home(){
    return(
        <div>
            <Header/>
            <TopContainer/>
            <FeaturesContainer/>
            <UserFeedbacks/>
            <InformationContainer/>
        </div>
    )
}

export default Home;
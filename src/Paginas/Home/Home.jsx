import React, { useEffect, useRef } from 'react';
import Header from "../../ComponentesGerais/Header/Header";
import FeaturesContainer from "./Componentes/FeaturesContainer/FeaturesContainer";
import TopContainer from "./Componentes/TopContainer/TopContainer";
import UserFeedbacks from "./Componentes/UserFeedbacks/UserFeedbacks";
import InformationContainer from './Componentes/InformationContainer/InformationContainer';
import PlanosContainer from './Componentes/PlanosContainer/PlanosContainer';
import BottomContainer from './Componentes/BottomContainer/BottomContainer';
import Footer from '../../ComponentesGerais/Footer/Footer';
import './Home.css'; 

function Home() {
    const fadeInRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target); 
                    }
                });
            },
            { threshold: 0.1 } 
        );

        fadeInRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <Header />
            <div ref={(el) => (fadeInRefs.current[0] = el)} className="fade-in">
                <TopContainer />
            </div>
            <div ref={(el) => (fadeInRefs.current[1] = el)} className="fade-in">
                <FeaturesContainer />
            </div>
                <UserFeedbacks />
            <div ref={(el) => (fadeInRefs.current[3] = el)} className="fade-in">
                <InformationContainer />
            </div>
            <div ref={(el) => (fadeInRefs.current[4] = el)} className="fade-in">
                <PlanosContainer />
            </div>
            <div >
                <BottomContainer ref={(el) => (fadeInRefs.current[5] = el)} className="fade-in"/>
            </div>
            <Footer />
        </div>
    );
}

export default Home;

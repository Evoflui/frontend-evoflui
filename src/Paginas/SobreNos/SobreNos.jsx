import React, { useEffect, useRef } from 'react';
import Footer from '../../ComponentesGerais/Footer/Footer';
import Header from '../../ComponentesGerais/Header/Header';
import Equipe from './Componentes/Equipe/Equipe';
import QuemSomos from './Componentes/QuemSomos/QuemSomos';
import Valores from './Componentes/Valores/Valores';
import './SobreNos.css';

function SobreNos() {
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
                <QuemSomos />
            </div>
            <div ref={(el) => (fadeInRefs.current[1] = el)} className="fade-in">
                <Valores />
            </div>
            <div ref={(el) => (fadeInRefs.current[2] = el)} className="fade-in">
                <Equipe />
            </div>
            <Footer />
        </div>
    );
}

export default SobreNos;

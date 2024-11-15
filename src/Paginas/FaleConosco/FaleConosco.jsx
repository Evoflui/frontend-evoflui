import React, { useEffect, useRef } from 'react';
import Header from "../../ComponentesGerais/Header/Header";
import Footer from "../../ComponentesGerais/Footer/Footer";
import ContactForm from "./Componentes/ContactForm/ContactForm";
import TopInfo from "./Componentes/TopInfo/TopInfo";
import BottomInfo from "./Componentes/BottomInfo/Bottominfo";
import './FaleConosco.css';

function FaleConosco() {
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
                <TopInfo />
            </div>
            <div ref={(el) => (fadeInRefs.current[1] = el)} className="fade-in">
                <ContactForm />
            </div>
            <div ref={(el) => (fadeInRefs.current[2] = el)} className="fade-in">
                <BottomInfo />
            </div>
            <Footer />
        </div>
    );
}

export default FaleConosco;

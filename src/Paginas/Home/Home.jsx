import HeaderInterno from '../../ComponentesGerais/HeaderInterno/HeaderInterno';
import Footer from '../../ComponentesGerais/Footer/Footer';
import BoasVindas from './Componentes/BoasVindas/BoasVindas';
import DashBoard from './Componentes/DashBoard/DashBoard';  

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://typcalsolution.com.br/home', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                });
    
                
                if (response.status === 401) {
                    navigate('/comece-agora');
                }
                
            } catch (error) {
                navigate('/erro-404');
            }
        };
    
        fetchData();
    }, [navigate]);

    return(
        <div>
            <HeaderInterno/>
            <BoasVindas/>
            <DashBoard/>  
            <Footer/>
        </div>
    )
}

export default Home;

import React from 'react';
import Home from "./Paginas/Home/Home";
import SobreNos from './Paginas/SobreNos/SobreNos';
import FaleConosco from './Paginas/FaleConosco/FaleConosco'
import TermosDeUso from './Paginas/TermosDeUso/TermosDeUso';
import PoliticaDePrivacidade from './Paginas/PoliticaDePrivacidade/PoliticaDePrivacidade'
import Pagamento from './Paginas/Pagamento/Pagamento'
import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
        <Route path="/pagamento" element={<Pagamento/>}/>
      </Routes>
    </div>
  );
}

export default App;

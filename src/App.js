import React from 'react';
import Home from "./Paginas/Home/Home";
import SobreNos from './Paginas/SobreNos/SobreNos'; 
import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/sobre-nos" element={<SobreNos />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import Inicio from "./Paginas/Inicio/Inicio";
import SobreNos from './Paginas/SobreNos/SobreNos';
import FaleConosco from './Paginas/FaleConosco/FaleConosco'
import TermosDeUso from './Paginas/TermosDeUso/TermosDeUso';
import PoliticaDePrivacidade from './Paginas/PoliticaDePrivacidade/PoliticaDePrivacidade'
import Pagamento from './Paginas/Pagamento/Pagamento'
import Cadastro from './Paginas/Cadastro/Cadastro';
import Erro from './Paginas/TratamentoErro/404';
import { Routes, Route } from 'react-router-dom'; 
import Home from './Paginas/Home/Home';
import Eventos from './Paginas/Eventos/Eventos';
import Trilha from './Paginas/Trilha/Trilha';
import Perfil from './Paginas/Perfil/Perfil';
import JogoDaMemoria from './Paginas/JogoDaMemoria/JogoDaMemoria';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />} /> 
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
        <Route path="/pagamento" element={<Pagamento/>}/>
        <Route path="/comece-agora" element={<Cadastro/>}/>

        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/erro-404" element={<Erro/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/jogo-da-memoria" element={<JogoDaMemoria/>} />

        <Route path="/eventos" element={<Eventos/>} />
        <Route path="/trilha" element={<Trilha/>} />
      </Routes>
    </div>
  );
}

export default App;

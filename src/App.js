import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Inicio from "./Paginas/Inicio/Inicio";
import SobreNos from './Paginas/SobreNos/SobreNos';
import FaleConosco from './Paginas/FaleConosco/FaleConosco';
import TermosDeUso from './Paginas/TermosDeUso/TermosDeUso';
import PoliticaDePrivacidade from './Paginas/PoliticaDePrivacidade/PoliticaDePrivacidade';
import Pagamento from './Paginas/Pagamento/Pagamento';
import Cadastro from './Paginas/Cadastro/Cadastro';
import Erro from './Paginas/TratamentoErro/404';
import Home from './Paginas/Home/Home';
import Eventos from './Paginas/Eventos/Eventos';
import Trilha from './Paginas/Trilha/Trilha';
import Perfil from './Paginas/Perfil/Perfil';
import JogoDaMemoria from './Paginas/JogoDaMemoria/JogoDaMemoria';
import Forum from './Paginas/Forum/Forum';

import BlocoComunicacao from './Paginas/Blocos/BlocoComunicacao/BlocoComunicacao';
import BlocoSensorial from './Paginas/Blocos/BlocoSensorial/BlocoSensorial';
import BlocoAdaptabilidade from './Paginas/Blocos/BlocoAdaptabilidade/BlocoAdaptabilidade';
import BlocoTomadaDecisao from './Paginas/Blocos/BlocoTomadaDecisao/BlocoTomadaDecisao';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    script.onload = () => {
      new window.VLibras.Widget('https://vlibras.gov.br/app');
    };
    document.body.appendChild(script);
  }, []); // Apenas uma vez no carregamento da aplicação

  return (
    <div className="App">
      <div vw className="enabled">
        <div vw-access-button className="active"></div>
        <div vw-plugin-wrapper>
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
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

        <Route path="/eventos" element={<Eventos/>} />
        <Route path="/trilha" element={<Trilha/>} />

        <Route path="/trilha/comunicacao" element={<BlocoComunicacao />} />
        <Route path="/trilha/sensorial" element={<BlocoSensorial />} />
        <Route path="/trilha/adaptabilidade" element={<BlocoAdaptabilidade />} />
        <Route path="/trilha/tomadadecisao" element={<BlocoTomadaDecisao />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/comece-agora" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/erro-404" element={<Erro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trilha/comunicacao/atividade=1" element={<JogoDaMemoria />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/trilha" element={<Trilha />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import HeaderInterno from "../../ComponentesGerais/HeaderInterno/HeaderInterno";
import VerPerfil from "./Componentes/VerPerfil/VerPerfil";
import Informações from "./Componentes/Informações/Informações";
import ProgressoTrilha from "./Componentes/ProgressoTrilha/ProgressoTrilha";
import Metas from "./Componentes/Metas/Metas";
import Footer from '../../ComponentesGerais/Footer/Footer';

function Perfil() {
    const [name, setName] = useState("Gabriel Augusto");

    const handleNameChange = (newName) => {
        setName(newName);
    };

    return (
        <div>
            <HeaderInterno />
            <VerPerfil />
            <Informações onNameChange={handleNameChange} />
            <ProgressoTrilha name={name} />
            <Metas />
            <Footer />
        </div>
    );
}

export default Perfil;

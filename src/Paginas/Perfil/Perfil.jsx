import React from "react";
import HeaderInterno from "../../ComponentesGerais/HeaderInterno/HeaderInterno";
import VerPerfil from "./Componentes/VerPerfil/VerPerfil";
import Informações from "./Componentes/Informações/Informações";

function Perfil(){
    return(
        <div>
            <HeaderInterno/>
            <VerPerfil/>
            <Informações/>
        </div>
    )
}

export default Perfil;
import React from "react";
import HeaderInterno from "../../ComponentesGerais/HeaderInterno/HeaderInterno";
import VerPerfil from "./Componentes/VerPerfil/VerPerfil";
import Informações from "./Componentes/Informações/Informações";
import ProgressoTrilha from "./Componentes/ProgressoTrilha/ProgressoTrilha";

function Perfil(){
    return(
        <div>
            <HeaderInterno/>
            <VerPerfil/>
            <Informações/>
            <ProgressoTrilha/>
        </div>
    )
}

export default Perfil;
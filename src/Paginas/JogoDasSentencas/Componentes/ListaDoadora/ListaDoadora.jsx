import React from "react";
import './ListaDoadora.css';
import Palavras from '../Palavras/Palavras';

// export default function ListaDoadora(){
//     return(
//         <ul className="lista-doa-palavras">
//             <Palavras/>
//             <Palavras/>
//             <Palavras/>
//             <Palavras/>
//             <Palavras/>
//             <Palavras/>
//             <Palavras/>
//             <Palavras/>
//         </ul>
//     )
// }

export default function ListaDoadora({ palavras, moverParaRecebe }) {
    return (
      <div className="lista-doadora">
        {palavras.map((palavra, index) => (
          <button
            key={index}
            className="palavra-botao"
            onClick={() => moverParaRecebe(palavra)}
          >
            {palavra}
          </button>
        ))}
      </div>
    );
  }
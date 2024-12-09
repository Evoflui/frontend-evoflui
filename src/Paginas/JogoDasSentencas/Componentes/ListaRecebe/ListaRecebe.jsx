import React from "react";
import './ListaRecebe.css';

// export default function ListaRecebe(){
//     return(
//         <ul className="lista-recebe-palavras"></ul>
//     )
// }

export default function ListaRecebe({ palavras }) {
    return (
      <div className="lista-recebe">
        {palavras.map((palavra, index) => (
          <span key={index} className="palavra-recebe">
            {palavra}
          </span>
        ))}
      </div>
    );
  }
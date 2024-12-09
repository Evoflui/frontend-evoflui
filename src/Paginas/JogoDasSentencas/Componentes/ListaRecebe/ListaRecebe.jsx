// import React from "react";
// import './ListaRecebe.css';

// export default function ListaRecebe({ palavras }) {
//     return (
//       <div className="lista-recebe">
//         {palavras.map((palavra, index) => (
//           <span key={index} className="palavra-recebe">
//             {palavra}
//           </span>
//         ))}
//       </div>
//     );
//  }

// ListaRecebe.jsx
import React from "react";
import "./ListaRecebe.css";

const ListaRecebe = ({ palavras, erro }) => {
  return (
    <ul className={`lista-recebe ${erro ? "erro" : ""}`}>
      {palavras.map((palavra, index) => (
        <span key={index} className="palavra-recebe">
          {palavra}          
        </span>
      ))}
    </ul>
  );
};

export default ListaRecebe;

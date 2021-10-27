import React from "react";
import { Link } from 'react-router-dom'

import mountain from '../../assets/compensate/zero-one.svg'

const Thankspay = () => {
  return (
    <div className="thanks-pay">
      <img src={mountain} alt="montaña en isla" />

      <h1>¡Gracias!</h1>

      <p>A partir de ahora tu contribución irá destinada a proyectos sostenibles de alto impacto.</p>

      <Link to="/profile">Volver a mi perfil</Link>
    </div>
  );
};

export default Thankspay;

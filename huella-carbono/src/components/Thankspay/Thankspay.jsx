import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

import userContext from "../../context/userContext";

import mountain from '../../assets/compensate/zero-one.svg'

const Thankspay = () => {

  const history = useHistory()

  // Context
  const { user } = useContext(userContext);

  if (user === null) {
    history.push('/')
  }

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

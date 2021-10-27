import React from "react";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

// Image
import thanks from '../../assets/compensate/thanks.svg'


const Thanks = () => {

  const history = useHistory()

  return (
    <div className="thanks">
      <img src={thanks} />
      <h2>¡Gracias!</h2>
      <p>Te has suscrito con éxito al plan y a partir de ahora tus acciones contribuirán a mejorar tu posición en el ranking.</p>
      <button onClick={() => history.push('/myplan')}>Aceptar</button>
      <a><Link to="/profile">Volver a mi perfil</Link></a>
    </div>
  );
};

export default Thanks;

import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import userContext from "../../context/userContext";

// Imagenes
import committed from '../../assets/compensate/committed.svg'
import conscius from '../../assets/compensate/conscius.svg'
import efficient from '../../assets/compensate/efficient.svg'
import zero from '../../assets/compensate/zero.svg'

const Compensate = () => {

  const history = useHistory()

  // Context
  const { user } = useContext(userContext);

  if (user === null) {
    history.push('/')
  }

  return (
    <div className="compensate">
      <h1>Planes</h1>
      <p>Aquí es dónde empieza el cambio. Descubre nuestros planes con iniciativas sostenibles para compensar tu huella de carbono.</p>

      <div className="conteiner-plan">
        <img src={conscius} alt="comns" />
        <h2>Plan Conscious</h2>
        <p>Inicia tu camino hacia una vida más sostenible con el Plan Conscious</p>
        <button>Seleccionar</button>
      </div>

      <div className="conteiner-plan">
        <img src={committed} alt="commi" />
        <h2>Plan Committed</h2>
        <p>Comprométete con nuevas acciones e iniciativas con el Plan Committed</p>
        <button>Seleccionar</button>
      </div>

      <div className="conteiner-plan">
        <img src={efficient} alt="effi" />
        <h2>Plan Efficient</h2>
        <p>El plan 3 es el último paso antes de alcanzar la neutralidad en carbono</p>
        <button onClick={() => history.push('/efficient')}>Seleccionar</button>
      </div>

      <div className="conteiner-plan">
        <img src={zero} alt="sero" />
        <h2>Plan Zero</h2>
        <p>Alcanza la neutralidad en tus emisiones de carbono con nuestro plan premium.</p>
        <button onClick={() => history.push('/zero')}>Seleccionar</button>
      </div>
    </div>
  );
};

export default Compensate;

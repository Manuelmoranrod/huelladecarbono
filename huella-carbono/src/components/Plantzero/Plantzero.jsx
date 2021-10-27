import React from "react";
import { useHistory } from 'react-router-dom'

// images
import plantZero from '../../assets/compensate/plant-zero.svg'

const Plantzero = () => {

  const history = useHistory()

  return (
    <div className="plant-zero">
      <img src={plantZero} alt="arboles" />

      <span>2,5€</span>

      <h1>Plan Zero</h1>

      <h2>Plantar árboles en Madagascar</h2>

      <p>Al plantar árboles en Madagascar, Haití o Nepal serás capaz de compensar tu huella de carbono.</p>

      <h3>Beneficios</h3>

      <p>Plantar especies como el Manglar permite absorber grandes cantidades de CO2.</p>

      <p>Con esta colaboración obtendrás puntos que mejorarán tu posición en el ranking.</p>

      <button onClick={() => history.push('/payment')}>Colaborar</button>
    </div>
  );
};

export default Plantzero;

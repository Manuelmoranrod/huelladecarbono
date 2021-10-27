import React from "react";
import { useHistory } from "react-router-dom";

// Imagenes
import treeLow from '../../assets/compensate/tree-low.svg'
import treeMid from '../../assets/compensate/tree-mid.svg'
import treeHigh from '../../assets/compensate/tree-high.svg'

const Colaborationzero = () => {

  const history = useHistory()

  return (
    <div className="colaboration-zero">
      <h1>Plan Zero</h1>

      <h2>Colabora con el proyecto</h2>

      <p>El plan favorito del planeta. Compensa tu huella de carbono anual y alcanza la neutralidad de carbono con el plan premium.</p>

      <div>
        <img src={treeLow} alt="arboles" />
        <span>2,5€</span>

        <h3>Planta árboles en Madagascar</h3>

        <p>Al plantar árboles en Madagascar, Haití o Nepal serás capaz de compensar tu huella de carbono.</p>
      </div>

      <button onClick={() => history.push('/plant-zero')}>Seleccionar</button>

      <div>
        <img src={treeMid} alt="arboles" />
        <span>2,5€</span>


        <h3>Planta árboles en Madagascar</h3>

        <p>Al plantar árboles en Madagascar, Haití o Nepal serás capaz de compensar tu huella de carbono.</p>
      </div>

      <button>Seleccionar</button>

      <div>
        <img src={treeHigh} alt="arboles" />
        <span>2,5€</span>


        <h3>Planta árboles en Madagascar</h3>

        <p>Al plantar árboles en Madagascar, Haití o Nepal serás capaz de compensar tu huella de carbono.</p>
      </div>

      <button>Seleccionar</button>

    </div>
  );
};

export default Colaborationzero;

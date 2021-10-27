import React from "react";
import { useHistory } from "react-router-dom";

//imagen
import zeroOne from '../../assets/compensate/zero-one.svg'
import zeroTwo from '../../assets/compensate/zero-two.svg'

const Zero = () => {

  const history = useHistory()
  
  return (
    <div className="zero">
      <h1>Plan Zero</h1>

      <p>El plan favorito del planeta. Compensa tu huella de carbono anual y alcanza la neutralidad de carbono con el plan premium.</p>

      <img src={zeroOne} alt="montaña en isla" />

      <h2>Colabora con el proyecto</h2>

      <p>Hemos seleccionado este proyecto especialmente para ti.</p>


      <img src={zeroTwo} alt="persona tirando lata a la basura" />


      <h2>Realiza 3 acciones </h2>

      <p>Paso a paso, semana a semana. Así es como logramos el cambio.</p>

      <button onClick={() => history.push('/colaboration-zero')}>Aceptar</button>
    </div>
  );
};

export default Zero;

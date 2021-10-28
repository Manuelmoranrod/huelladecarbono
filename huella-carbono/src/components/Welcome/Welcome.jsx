import React, { useContext } from "react";
import { useHistory } from "react-router";

import userContext from "../../context/userContext";

const Welcome = () => {

  const history = useHistory()

  // Context
  const { user } = useContext(userContext);

  if (user === null) {
    history.push('/')
  }

  return (
    <div className="welcome">
      <h1>Bienvenido/a al movimiento</h1>

      <p>Para empezar, necesitamos conocer un poco más acerca de ti y de tus hábitos.</p>

      <p>Responde este breve cuestionario para que podamos calcular tu huella de carbono.</p>

      <p>Y recuerda, no hay respuestas correctas. Lo importante es que estás dispuesto a tomar acción.</p>

      <span>¿Empezamos?</span>

      <button onClick={() => history.push('/initial-form')}>Calcular mi huella</button>
    </div>
  );
};

export default Welcome;

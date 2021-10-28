import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import userContext from "../../context/userContext";

import hogar from '../../assets/form-hogar.svg';
import food from '../../assets/food-form.svg';
import transport from '../../assets/transport-form.svg';


const Track = () => {

  const history = useHistory()

  // Context
  const { user } = useContext(userContext);

  if (user === null) {
    history.push('/')
  }

  return (
    <div className="track">
      <div className="track-content">
        <h1>Actualizar mis datos</h1>
        <p>Que has mejorado hoy?</p>

        <div className="conteiner-buttons">
          <Link to="/form-transport"><div className="conteiner-icon"><img src={transport} alt="transport" /></div></Link>
          <Link to="/form-food"><div className="conteiner-icon"><img src={food} alt="food" /></div></Link>
          <Link to="/form-home"><div className="conteiner-icon"><img src={hogar} alt="hogar" /></div></Link>
        </div>
      </div>
    </div>
  );
};

export default Track;

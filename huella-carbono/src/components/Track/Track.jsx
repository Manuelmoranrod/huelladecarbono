import React from "react";
import { Link } from 'react-router-dom';

import hogar from '../../assets/form-hogar.svg';
import food from '../../assets/food-form.svg';
import transport from '../../assets/transport-form.svg';


const Track = () => {
  return (
    <div className="track">
      <h1>Actualizar mis datos</h1>
      <p>Que has mejorado hoy?</p>
      <Link to="/form-transport"><img src={transport}/></Link>
      <Link to="/form-food"><img src={food}/></Link>
      <Link to="/form-home"><img src={hogar}/></Link>
    </div>
  );
};

export default Track;

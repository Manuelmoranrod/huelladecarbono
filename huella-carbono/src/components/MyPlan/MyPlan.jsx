import React from "react";
import { Link } from "react-router-dom";

import vista from '../../assets/planes_seguimiento.png'

const MyPlan = () => {
  return (
    <div className="myplan">
      <Link to="/profile"><button className="atras"></button></Link>
      <img src={vista} alt="vista de cada plan"/>
      <Link to="/actions"><button className="fake"></button></Link>
      <Link to="/colaboration-trees"><button className="falso"></button></Link>

    </div>
  );
};

export default MyPlan;

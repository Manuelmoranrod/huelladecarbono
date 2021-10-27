import React from "react";
import { Link } from "react-router-dom";

import vista from '../../assets/planes_seguimiento.png'

const MyPlan = () => {
  return (
    <div className="myplan">
      <Link><button className="atras"></button></Link>
      <img src={vista} alt="vista de cada plan"/>
      <Link><button className="fake"></button></Link>
      <Link><button className="falso"></button></Link>

    </div>
  );
};

export default MyPlan;

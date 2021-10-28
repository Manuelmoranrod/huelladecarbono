import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import userContext from "../../context/userContext";

import vista from '../../assets/planes_seguimiento.png'

const MyPlan = () => {

  const history = useHistory()

  // Context
  const { user } = useContext(userContext);

  if (user === null) {
    history.push('/')
  }
  
  return (
    <div className="myplan">
      <Link to="/profile"><button className="atras"></button></Link>
      <img src={vista} alt="vista de cada plan" />
      <Link to="/actions"><button className="fake"></button></Link>
      <Link to="/colaboration-trees"><button className="falso"></button></Link>

    </div>
  );
};

export default MyPlan;

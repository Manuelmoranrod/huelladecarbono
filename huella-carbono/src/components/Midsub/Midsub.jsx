import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import foto from "../../assets/pildora.jpg";


const Midsub = () => {

  return (

    <div className="premium-plan">
      <div className="plan-info">
        <h1>Plan Premium</h1>
        <p>info del plan</p>
      </div>
      <div className="plan-proyects">
        <h2>Colaborar con 3 proyectos</h2>
        <p>Breve comentario sobre el apartado sobre elLorem ipsum dolor sit amet, </p>
      </div>
      <div className="plan-actions">
        <h2>Colaborar con 5 acciones</h2>
        <p>Breve comentario sobre el apartado sobre elLorem ipsum dolor sit amet, </p>
      </div>
      <button onClick={alert}>Seleccionar</button>
    </div>
    
  );
};

export default Midsub;

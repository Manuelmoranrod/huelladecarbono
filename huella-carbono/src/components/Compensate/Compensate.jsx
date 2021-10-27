import React from "react";
import { Link } from "react-router-dom";


const Compensate = () => {
  return (
    <div className="container">
      <div className="cabecera">
        <h1>Planes</h1>
        <p>Aquí es dónde empieza el cambio. Descubre nuestros planes con iniciativas sostenibles para compensar tu huella de carbono.</p>
      </div>
      <div className="plan-card">
        <div className="img">
          Imagen
        </div>
        <h2>Premium</h2>
        <p>Breve comentario</p>
        <Link to="/premiumsub"><button className="slct">Seleccionar</button></Link>
      </div>

      <div className="plan-card">
        <div className="img">
          Imagen
        </div>
        <h2>Mid</h2>
        <p>Breve comentario</p>
        <Link to="/midsub"><button className="slct">Seleccionar</button></Link>
      </div>

      <div className="plan-card">
        <div className="img">
          Imagen
        </div>
        <h2>Low</h2>
        <p>Breve comentario</p>
        <Link to="/lowsub"><button className="slct">Seleccionar</button></Link>

      </div>
    </div>
  );
};

export default Compensate;

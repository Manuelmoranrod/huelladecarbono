import React from "react";

const Compensate = () => {
  return (
    <div className="container">
      <div className="cabecera">
        <h1>Planes</h1>
        <p>Breve apartado sobre los tipos de planes que hay bla bla bla</p>
      </div>
      <div className="plan-card">
        <div className="img">
          Imagen
        </div>
        <h2>Premium</h2>
        <p>Breve comentario</p>
        <button className="slct">Seleccionar</button>
      </div>

      <div className="plan-card">
        <div className="img">
          Imagen
        </div>
        <h2>High</h2>
        <p>Breve comentario</p>
        <button className="slct">Seleccionar</button>
      </div>

      <div className="plan-card">
        <div className="img">
          Imagen
        </div>
        <h2>Mid</h2>
        <p>Breve comentario</p>
        <button className="slct">Seleccionar</button>
      </div>

      <div className="plan-card">
        <div className="img">
          Imagen
        </div>
        <h2>Low</h2>
        <p>Breve comentario</p>
        <button className="slct">Seleccionar</button>
      </div>
    </div>
  );
};

export default Compensate;

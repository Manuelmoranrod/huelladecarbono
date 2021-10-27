import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <h1>Bienvenido a la app</h1>

      <Link to="/login">Iniciar sesión</Link>
      <Link to="/register">Registrarse</Link>

    </main>
  );
};

export default Home;

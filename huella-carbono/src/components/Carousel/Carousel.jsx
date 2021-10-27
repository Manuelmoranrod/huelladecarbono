import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

// Vistas del OnBoard de la App
import one from "../../assets/c-one-letra.svg";
import two from "../../assets/c-two-letra.svg";
import three from "../../assets/c-three-letra.svg";
import logo from "../../assets/logo.svg"


const FirstCarousel = () => {

  return (
    <div className="carousel">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        infiniteLoop={false}
      >
        <div>
          <img src={one} alt="industria"/>
        </div>
        <div>
          <img src={two} alt="huerto"/>
        </div>
        <div>
          <img src={three} alt="transporte"/>
        </div>
        <div>
          <div>
            <img className="logo" src={logo} alt="logo"/>
          </div>
          <div className="lema"><p>Aqui es donde empieza el cambio</p></div>
          <Link to="/register"><button className="button-verde">Crear cuenta</button></Link><br/>
          <Link to="/firstlogingoogle"><button className="button-blanco">Acceder con Google</button></Link>
          <Link to="/login"><button className="button-borde">Acceder</button></Link>
        </div>
      </Carousel> 
    </div>
  );
};

export default FirstCarousel;

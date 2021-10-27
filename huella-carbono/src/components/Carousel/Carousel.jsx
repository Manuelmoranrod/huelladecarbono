import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

// Vistas del OnBoard de la App
import one from "../../assets/c-one-letra.svg";
import two from "../../assets/c-two-letra.svg";
import three from "../../assets/c-three-letra.svg";


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
          <img src={one} />
        </div>
        <div>
          <img src={two} />
        </div>
        <div>
          <img src={three} />
        </div>
        <div>
          <div>Logo app</div>
          <p>Eslogan de la app</p>
          <Link to="/register"><button>CREAR CUENTA</button></Link><br />
          <Link to="/login"><button>LOGIN</button></Link>
        </div>
      </Carousel>
    </div>
  );
};

export default FirstCarousel;

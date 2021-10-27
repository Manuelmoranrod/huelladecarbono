import React from "react";
import one from "../../assets/caru-first.svg";
import two from "../../assets/c-dos.svg";
import tres from "../../assets/c-tres.svg";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const PhotoCarousel = () => {


  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={one}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mide tu huella de carbono</h3>
          <p>Calcula y realiza un seguimiento preciso de tu impacto en el planeta</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={two}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Compensa tus emisiones</h3>
          <p>Apoya iniciativas y causas sostenibles para compensar tu huella de carbono</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tres}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Lidera el ranking de tu ciudad</h3>
          <p>Únete a una comunidad comprometida con el planeta dispuesta a tomar acción</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PhotoCarousel;

import React, { useContext } from "react";
import { Link, Redirect } from 'react-router-dom'
import { useHistory } from "react-router";

// Context
import userContext from "../../context/userContext";

// Images
import actionOne from "../../assets/compensate/actions-one.svg"
import actionTwo from "../../assets/compensate/actions-two.svg"
import actionThree from "../../assets/compensate/actions-three.svg"

import iconTransport from "../../assets/compensate/icon-transport.svg"
import iconFood from "../../assets/compensate/icon-food.svg"
import iconHome from "../../assets/compensate/icon-home.svg"

// Mui
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  borderRadius: '25px',
  p: 4,
};


const Actions = () => {

  const history = useHistory()

  // Context
  const { user } = useContext(userContext);

  if (user === null) {
    history.push('/')
  }

  // Mui
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className="actions">

      <div className="conteiner-type-action">
        <img src={iconTransport} alt="itrans" />
        <img src={actionOne} alt="aone" />

        <h2>Acción 1</h2>
        <h3>Gastar menos combustible</h3>

        <p>El combustible hace posible que podamos desplazarnos, pero siempre existe una contaminación asociada a su uso. Con esta acción te retamos a reducir la cantidad de combustible que empleas en tu transporte diario o semanal.</p>

        <h4>Beneficios</h4>

        <p>Reducir tu uso de combustible o cambiar a formas más eficientes del mismo como la energía eléctrica puede reducir tu impacto medioambiental hasta la mitad. </p>

        <h4>Impacto</h4>

        <p>En España, un coche que emplea gasolina como forma de combustible emite el doble de emisiones de CO2 que un coche eléctrico.</p>

        <button onClick={handleOpen}>Aceptar</button>

        <Link to="/myplan">Volver a mis planes</Link>
      </div>

      <div className="conteiner-type-action">
        <img src={iconFood} alt="ifood" />
        <img src={actionTwo} alt="atwo" />

        <h2>Acción 2</h2>
        <h3>Reducir consumo carne</h3>

        <p>Incluir carne en nuestras dietas es una de acciones que más impacto medioambiental tienen. La industria cárnica y láctea son responsables de alrededor del 15% de las emisiones mundiales anuales de CO2.</p>

        <h4>Beneficios</h4>

        <p>Reducir el consumo de carne, sustituir las carnes rojas por carnes blancas o cambiar nuestras fuentes de proteínas animales por fuentes vegetales tiene un gran impacto en el medioambiente.</p>

        <h4>Impacto</h4>

        <p>“Si un carnívoro típico adoptase la dieta vegana, su huella de carbono quedaría reducida a la mitad", afirma Peter Scarborough investigador de la Universidad de Oxford.</p>

        <button onClick={handleOpen}>Aceptar</button>

        <Link to="/myplan">Volver a mis planes</Link>
      </div>

      <div className="conteiner-type-action">
        <img src={iconHome} alt="ihome" />
        <img src={actionThree} alt="athree" />

        <h2>Acción 3</h2>
        <h3>Métodos alternativos a la calefacción</h3>

        <p>¿Sabías que la mitad de energía que se consume en una casa proviene de la calefacción? Encontrar fuentes alternativas de calor es una acción imprescindible para reducir nuestra huella de carbono.</p>

        <h4>Beneficios</h4>

        <p>Acciones como mantener la casa a una temperatura entre 18º C y 20º C en invierno, emplear fuentes de energía renovables para calentar tu hogar o tener radiadores de alta eficiencia energética puede reducir tu huella de carbono hasta un 20%.</p>

        <h4>Impacto</h4>

        <p>Alrededor del 10% de la huella de carbono mundial proviene de los sistemas de calefacción de las viviendas. Emplear métodos alternativos o fuentes de energía más eficientes puede suponer una contribución muy importante para el planeta.</p>

        <button onClick={handleOpen}>Aceptar</button>

        <Link to="/myplan">Volver a mis planes</Link>
      </div>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="content-modal">

            <h3>¿Quieres realizar la acción seleccionada?</h3>

            <p className="p-modal">Acepta el desafío y reduce tu uso de combustible (o cámbialo por formas más eficientes del mismo) esta semana.</p>

            <p className="p-modal">Confirma tu decisión para mejorar tu posición en el ranking local.</p>

            <div>
              <button className="cancel" onClick={handleClose}>Cancelar</button>
              <button onClick={() => history.push('/myplan')} className="confirm">Confirmar</button>
            </div>
          </div>
        </Box>
      </Modal>

    </div>
  );
};

export default Actions;
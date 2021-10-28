import React, { useContext } from "react";
import { useHistory } from 'react-router-dom'

import userContext from "../../context/userContext";

// Imagenes
import payMethod from '../../assets/compensate/pay_method.png'
import check from '../../assets/compensate/check-green.svg'

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

const Payment = () => {

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
    <div className="payment">
      <h2>1. Selecciona forma de pago</h2>

      <img src={payMethod} alt="metodos de pago" />

      <h2>2. Introduce los datos</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="number" placeholder="Número de tarjeta*" />
        <input type="text" placeholder="Nombre del propietario*" />

        <div className="date-cvv">
          <input type="text" placeholder="Fecha de caducidad" />
          <input type="number" placeholder="CVV" />
        </div>

        <div className="checkbox">
          <input type="checkbox" />
          <label>Guardar la información para futuras compras</label>
        </div>
      </form>


      <button className="new-card">+ Añadir nueva tarjeta</button>

      <h2>3. Finalizar compra</h2>

      <div className="iva">
        <span>Total (IVA incluido)</span>
        <span>2,5€</span>
      </div>
      <p className="show-product">Ver producto</p>

      <button onClick={handleOpen} className="pay">Pagar</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="content-modal-payment">

            <img src={check} alt="check verde" />

            <h2>Enviado con éxito</h2>

            <p className="p-modal">Recibirás un email con los detalles de tu compra en los próximos minutos</p>

            <div>
              <button onClick={() => history.push('/thanks-pay')}>Aceptar</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Payment;

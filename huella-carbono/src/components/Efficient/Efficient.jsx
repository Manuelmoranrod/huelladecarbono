import React from "react";
import { useHistory } from "react-router";

// Imagenes
import efficienOne from '../../assets/compensate/efficient-one.svg'
import efficienTwo from '../../assets/compensate/efficient-two.svg'

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


const Efficient = () => {

  const history = useHistory()

  // Mui
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className="efficient">
      <h1>Plan Efficient</h1>
      <p>Escoge este plan si quieres descubrir nuevas acciones con gran impacto</p>

      <img src={efficienOne} />
      <h2>Colabora con 1 proyecto</h2>
      <p>Hemos seleccionado este proyecto especialmente para ti.</p>

      <img src={efficienTwo} />
      <h2>Colabora con 1 proyecto</h2>
      <p>Hemos seleccionado este proyecto especialmente para ti.</p>

      <button onClick={handleOpen}>Aceptar</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="content-modal">

            <h3>¿Quieres suscribirte al plan seleccionado?</h3>

            <p className="p-modal">Gracias a ti somos capaces de colaborar con proyectos sostenibles y concienciar a más personas del impacto de nuestras emisiones.</p>

            <p className="p-modal">Confirma tu plan para empezar a reducir tu huella de carbono.</p>

            <div>
              <button className="cancel" onClick={() => history.push('/compensate')}>Cancelar</button>
              <button onClick={() => history.push('/thanks')} className="confirm">Confirmar</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div >
  );
};

export default Efficient;

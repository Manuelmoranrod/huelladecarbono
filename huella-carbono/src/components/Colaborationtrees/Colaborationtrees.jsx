import React from "react";
import { Link } from 'react-router-dom'
import { useHistory } from "react-router";


// Imagenes
import treesColaboration from '../../assets/compensate/trees-colaboration.svg'

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


const Colaborationtrees = () => {

  const history = useHistory()

  // Mui
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className="colaboration-trees">
      <h1>Plan Efficient</h1>

      <h2>Colabora con el proyecto</h2>
      <p>Si no puedes realizar una aportación mensual, siempre puedes ver estos vídeos para colaborar (el 70% de los ingresos van destinados al proyecto).</p>

      <div>
        <img src={treesColaboration} alt="arboles ilustracion" />
        <h3>Planta 5 árboles</h3>
        <p>Plantar 5 árboles supone compensar más de 1500 kg de CO2e a lo largo de 25 años.</p>
      </div>

      <button onClick={handleOpen}>Visualizar vídeos</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="content-modal">

            <h3>¿Quieres colaborar con el proyecto seleccionado?</h3>

            <p className="p-modal">Gracias a ti somos capaces de colaborar con proyectos sostenibles y concienciar a más personas del impacto de nuestras emisiones.</p>

            <p className="p-modal">Confirma este proyecto para empezar a reducir tu huella de carbono.</p>

            <div>
              <button className="cancel" onClick={() => history.push('/myplan')}>Cancelar</button>
              <button onClick={() => {
                window.open("https://www.youtube.com/watch?v=nQ1pPLb1Fo4");
                history.push('/myplan')
              }} className="confirm">Confirmar</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Colaborationtrees;
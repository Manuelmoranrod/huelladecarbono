import React from "react";
import Swal from 'sweetalert2'

const Premiumsub = () => {

  const alert = () => {
    Swal.fire({
    title: 'Quieres suscribirte al plan?',
    showDenyButton: true,
    denyButtonText: `Atras`,
    confirmButtonText: 'Aceptar',
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Suscribed!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Plan not saved', '', 'info')
    }
  })
}

  return (
    <div className="premium-plan">
      <div className="plan-info">
        <h1>Plan Premium</h1>
        <p>info del plan</p>
      </div>
      <div className="plan-proyects">
        <h2>Colaborar con 3 proyectos</h2>
        <p>Breve comentario sobre el apartado sobre elLorem ipsum dolor sit amet, </p>
      </div>
      <div className="plan-actions">
        <h2>Colaborar con 5 acciones</h2>
        <p>Breve comentario sobre el apartado sobre elLorem ipsum dolor sit amet, </p>
      </div>
      <button onClick={alert}>Seleccionar</button>
    </div>
  );
};

export default Premiumsub;

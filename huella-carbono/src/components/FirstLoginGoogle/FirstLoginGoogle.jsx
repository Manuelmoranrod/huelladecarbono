import React, { useContext } from "react";
import { Redirect, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from "axios";

// Context
import userContext from "../../context/userContext";

const FirstLoginGoogle = () => {

  // Para el redirect
  const history = useHistory()

  // Formik
  const { register, formState: { errors }, handleSubmit, setError } = useForm();

  // Context
  const { user } = useContext(userContext);
  let conditionalRedirect = user === null ? true : false;

  const onSubmit = async (data) => {

    const response = await axios.post('http://localhost:3001/auth/update-login-google', {
      username: data.username,
      city: data.city,
      token: user,
    })

    if(response.status === 200){
      history.push('/initial-form')
    }else{
      alert("error")
    }

  }

  return (
    <>
      {
        conditionalRedirect
          ? <Redirect to="/" />
          : <div className="first-login-google" onSubmit={handleSubmit(onSubmit)}>
            <form className="first-login-google-content">
              <h1>Completa tu registro</h1>

              <label htmlFor="username">Alias</label>
              <input {...register("username", { required: true, minLength: 6 })} />
              <p className="form-error">{errors.username?.type === 'required' && "El Alias es obligatorio"}</p>
              <p className="form-error">{errors.username?.type === 'minLength' && "Alias debe tener al menos 6 caracteres"}</p>

              <label>Ciudad en la que vives</label>
              <select {...register("city", { required: true })}>
                <option value=''>Selecciona</option>
                <option value='A Coruña' >A Coruña</option>
                <option value='álava'>álava</option>
                <option value='Albacete' >Albacete</option>
                <option value='Alicante'>Alicante</option>
                <option value='Almería' >Almería</option>
                <option value='Asturias' >Asturias</option>
                <option value='ávila' >Ávila</option>
                <option value='Badajoz' >Badajoz</option>
                <option value='Barcelona'>Barcelona</option>
                <option value='Burgos' >Burgos</option>
                <option value='Cáceres' >Cáceres</option>
                <option value='Cádiz' >Cádiz</option>
                <option value='Cantabria' >Cantabria</option>
                <option value='Castellón' >Castellón</option>
                <option value='Ceuta' >Ceuta</option>
                <option value='Ciudad Real' >Ciudad Real</option>
                <option value='Córdoba' >Córdoba</option>
                <option value='Cuenca' >Cuenca</option>
                <option value='Gerona' >Gerona</option>
                <option value='Girona' >Girona</option>
                <option value='Las Palmas' >Las Palmas</option>
                <option value='Granada' >Granada</option>
                <option value='Guadalajara' >Guadalajara</option>
                <option value='Guipúzcoa' >Guipúzcoa</option>
                <option value='Huelva' >Huelva</option>
                <option value='Huesca' >Huesca</option>
                <option value='Jaén' >Jaén</option>
                <option value='La Rioja' >La Rioja</option>
                <option value='León' >León</option>
                <option value='Lleida' >Lleida</option>
                <option value='Lugo' >Lugo</option>
                <option value='Madrid' >Madrid</option>
                <option value='Malaga' >Málaga</option>
                <option value='Mallorca' >Mallorca</option>
                <option value='Melilla' >Melilla</option>
                <option value='Murcia' >Murcia</option>
                <option value='Navarra' >Navarra</option>
                <option value='Orense' >Orense</option>
                <option value='Palencia' >Palencia</option>
                <option value='Pontevedra'>Pontevedra</option>
                <option value='Salamanca'>Salamanca</option>
                <option value='Segovia' >Segovia</option>
                <option value='Sevilla' >Sevilla</option>
                <option value='Soria' >Soria</option>
                <option value='Tarragona' >Tarragona</option>
                <option value='Tenerife' >Tenerife</option>
                <option value='Teruel' >Teruel</option>
                <option value='Toledo' >Toledo</option>
                <option value='Valencia' >Valencia</option>
                <option value='Valladolid' >Valladolid</option>
                <option value='Vizcaya' >Vizcaya</option>
                <option value='Zamora' >Zamora</option>
                <option value='Zaragoza'>Zaragoza</option>
              </select>
              <p className="form-error">{errors.city?.type === 'required' && "Debes seleccionar una ciudad"}</p>

              <input className="button-enviar" type="submit" value="Continuar" />

            </form>
          </div>
      }
    </>

  );
};

export default FirstLoginGoogle;

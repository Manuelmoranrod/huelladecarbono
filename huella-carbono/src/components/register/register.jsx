import React, { useContext, useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import axios from "axios";
import LoginGoogle from "../LoginGoogle";
import { useForm } from "react-hook-form";

// Mui
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// Context
import userContext from "../../context/userContext";


const Register = () => {

  const history = useHistory()

  // Formik
  const { register, formState: { errors }, handleSubmit, setError } = useForm();

  // Context
  const { user, setUser } = useContext(userContext);

  // States
  const [inputPassword, setInputPassword] = useState('password')


  const onSubmit = async (data) => {
    const { username, city, email, password } = data

    try {
      const response = await axios.post('/auth/register', {
        username,
        city,
        email,
        password
      })

      if (response.status === 200) {

        const token = response.data.token

        sessionStorage.setItem('token', token)
        setUser(token)

        history.push('/welcome')
      }

    } catch (err) {
      if (err.response.status === 400) {
        setError('apiError', { message: 'El email que intentas registrar ya esta en uso' })
      }
    }

  }


  return (
    <>
      {
        user
          ? <Redirect to="/profile" />
          : <div className="register">
            <form className="form-register" onSubmit={handleSubmit(onSubmit)}>
              <h1>Crea tu cuenta</h1>

              <label htmlFor="username">Alias</label>
              <input placeholder="Alitron496" {...register("username", { required: true, minLength: 6 })} />
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


              <label htmlFor="email">Email</label>
              <input placeholder="alicia@gmail.com" {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
              <p className="form-error">{errors.email?.type === 'required' && "El campo email es obligatorio"}</p>
              <p className="form-error">{errors.email?.type === 'pattern' && "Debes intrucir un formato de email valido"}</p>
              <p className="form-error">{errors.apiError && errors.apiError.message}</p>

              <label htmlFor="password">Contraseña</label>
              <div className="input-password">
                <input placeholder="!80kDps03" type={inputPassword} {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/ })} />
                {inputPassword === 'password'
                  ? <VisibilityIcon className="eye-icon" onClick={() => setInputPassword('text')} />
                  : <VisibilityOffIcon className="eye-icon" onClick={() => setInputPassword('password')} />
                }
              </div>
              <p className="form-error">{errors.password?.type === 'required' && "El campo contraseña es obligatorio"}</p>
              <p className="form-error">{errors.password?.type === 'pattern' && "La contraseña debe tener una letra mayúscula y minúscula, un carácter especial, un numero y 8 caracteres como mínimo"}</p>

              <div className="div-input-checkbox">
                <input className="input-checkbox" type="checkbox" id="privacidad" {...register("privacidad", { required: true })} />
                <label htmlFor="privacidad">Acepto las condiciones de privacidad</label>
              </div>
              <p className="form-error">{errors.privacidad?.type === 'required' && "Debe aceptar las condiciones de privacidad para continuar"}</p>

              <input className="button-enviar" type="submit" value="Crear"/>

              <div className="box-google-login">
                <LoginGoogle />
              </div>

              <Link to="/login">¿Aún no tienes cuenta? <b>Crea la tuya</b></Link>
            </form>

          </div>
      }
    </>

  );
};

export default Register;

import React, { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import LoginGoogle from "../LoginGoogle";

// Mui
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// Context
import userContext from "../../context/userContext";

const Register = () => {

  // Context
  const { user, setUser } = useContext(userContext);

  // States
  const [inputPassword, setInputPassword] = useState('password')

  const handleRegister = async (event) => {
    event.preventDefault()

    const username = event.target.username.value
    const city = event.target.city.value
    const email = event.target.email.value
    const password = event.target.password.value

    try {
      const response = await axios.post('http://localhost:3001/auth/register', {
        username,
        city,
        email,
        password
      })

      console.log(response);

      if (response.status === 200) {
        console.log(response);

        const token = response.data.token

        sessionStorage.setItem('token', token)
        setUser(token)
      }

    } catch (err) {
      alert('usuario ya registrado')
    }

  };


  return (
    <>
      {
        user
          ? <Redirect to="/" />
          : <div className="register">
            <form className="form-register" onSubmit={handleRegister}>
              <h1>Crea tu cuenta</h1>

              <label>Alias</label>
              <input type="text" name="username" />

              <label >Ciudad en la que vives</label>
              <select name="city" size="1">
                <option value='selecciona'>Selecciona</option>
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

              <label>Email</label>
              <input type="text" name="email" />
              <label for="password">Contraseña</label>
              <div className="input-password">
                <input type={inputPassword} id="password" name="password" />
                {inputPassword === 'password'
                  ? <VisibilityIcon className="eye-icon" onClick={() => setInputPassword('text')} />
                  : <VisibilityOffIcon className="eye-icon" onClick={() => setInputPassword('password')} />
                }
              </div>
              <div className="div-input-checkbox" id="privacidad">
                <input name="privacidad" id="privacidad" className="input-checkbox" type="checkbox" />
                <label for="privacidad">Acepto las condiciones de privacidad</label>
              </div>
              <input className="button-enviar" type="submit" />

              <div className="box-google-login">
                <LoginGoogle />
              </div>

              <Link>¿Aún no tienes cuenta? <b>Crea la tuya</b></Link>
            </form>

          </div>
      }
    </>

  );
};

export default Register;

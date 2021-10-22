import axios from "axios";
import React, { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import LoginGoogle from "../LoginGoogle";
import { useForm } from "react-hook-form";

// Mui
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// Context
import userContext from "../../context/userContext";


const Login = () => {

  // Formik
  const { register, formState: { errors }, handleSubmit, setError } = useForm();

  // Context
  const { user, setUser } = useContext(userContext);

  // States
  const [inputPassword, setInputPassword] = useState('password')

  const onSubmit = async (data) => {
    const { email, password } = data

    try {
      const response = await axios.post('http://localhost:3001/auth/login', {
        email,
        password
      })

      const token = response.data.token

      sessionStorage.setItem('token', token)
      setUser(token)
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 401) {
        setError('apiError', { message: 'El email o contraseña son incorrectos' })
      }
    }


  }


  return (
    <>
      {
        user
          ? <Redirect to="/" />
          : <div className="login">
            <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
              <h1>Accede</h1>

              <label htmlFor="email">Email</label>
              <input {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
              <p className="form-error">{errors.email?.type === 'required' && "El campo email es obligatorio"}</p>
              <p className="form-error">{errors.email?.type === 'pattern' && "Debes intrucir un formato de email valido"}</p>
              <p className="form-error">{errors.apiError && errors.apiError.message}</p>

              <label htmlFor="password">Contraseña</label>
              <div className="input-password">
                <input type={inputPassword} {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/ })} />
                {inputPassword === 'password'
                  ? <VisibilityIcon className="eye-icon" onClick={() => setInputPassword('text')} />
                  : <VisibilityOffIcon className="eye-icon" onClick={() => setInputPassword('password')} />
                }
              </div>
              <p className="form-error">{errors.password?.type === 'required' && "El campo contraseña es obligatorio"}</p>
              <p className="form-error">{errors.password?.type === 'pattern' && "La contraseña debe tener una letra mayúscula y minúscula, un carácter especial, un numero y 8 caracteres como mínimo"}</p>

              <button className="button-enviar" type="submit">Enviar</button>
              <div className="box-google-login">
                <LoginGoogle />
              </div>
              <Link to="/register">¿Aún no tienes cuenta? <b>Crea la tuya</b></Link>
            </form>
          </div>
      }
    </>
  );
};

export default Login;
import axios from "axios";
import React, { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import LoginGoogle from "../LoginGoogle";

// Mui
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// Context
import userContext from "../../context/userContext";


const Login = () => {

  // Context
  const { user, setUser } = useContext(userContext);

  // States
  const [inputPassword, setInputPassword] = useState('password')

  const handleLogin = async (event) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    const response = await axios.post('http://localhost:3001/auth/login', {
      email,
      password
    })

    const token = response.data.token

    sessionStorage.setItem('token', token)
    setUser(token)
  };


  return (
    <>
      {
        user
          ? <Redirect to="/" />
          : <div className="login">
            <form className="form-login" onSubmit={handleLogin}>
              <h1>Accede</h1>
              <label>
                <p>Email</p>
                <input className="input-email" type="text" name="email" />
              </label>
              <label>
                <p>Password</p>
                <div className="input-password">
                  <input type={inputPassword} name="password" />
                  {inputPassword === 'password'
                    ? <VisibilityIcon className="eye-icon" onClick={() => setInputPassword('text')} />
                    : <VisibilityOffIcon className="eye-icon" onClick={() => setInputPassword('password')} />
                  }
                </div>
              </label>
              <button className="button-enviar" type="submit">Enviar</button>
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

export default Login;
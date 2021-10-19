import axios from "axios";
import React, { useContext } from "react";

import GoogleLogin, { GoogleLogout } from 'react-google-login';

// Context
import userContext from "../../context/userContext";

import login from '../../login'

const Login = () => {

  // Context
  const { user, setUser } = useContext(userContext)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    const { data } = await axios.post('http://localhost:3001/auth/login', {
      email,
      password
    })

    console.log('data', data);
  }

  const loginGoogle = (resGoogle) => {
    console.log(resGoogle);
  }

  return (
    <div className="form">
      <form className="form-login" onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" name="email" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
        <GoogleLogin
          clientId="302295141577-ro76q0pd5jfle7v6hh6q7on7b1j017sl.apps.googleusercontent.com"
          buttonText="Iniciar sesión con Google"
          onSuccess={loginGoogle}
          onFailure={loginGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </form>
    </div>

  );
};

export default Login;


{/* <GoogleLogin
  clientId="302295141577-ro76q0pd5jfle7v6hh6q7on7b1j017sl.apps.googleusercontent.com"
  buttonText="Iniciar sesión con Google"
  onSuccess={loginGoogle}
  onFailure={loginGoogle}
  cookiePolicy={'single_host_origin'}
/> */}
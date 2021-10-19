import React, { useContext } from "react";
import { Redirect } from "react-router";
import axios from "axios";
import LoginGoogle from "../LoginGoogle";

// Context
import userContext from "../../context/userContext";

const Register = () => {

  // Context
  const { user, setUser } = useContext(userContext);

  const handleRegister = async (event) => {
    event.preventDefault()

    const name = event.target.name.value
    const surname = event.target.surname.value
    const email = event.target.email.value
    const password = event.target.password.value

    try {
      const response = await axios.post('http://localhost:3001/auth/register', {
        name,
        surname,
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
          : <div>
            <form onSubmit={handleRegister}>
              <label>Nombre:</label>
              <input type="text" name="name" />
              <label>Apellidos:</label>
              <input type="text" name="surname" />
              <label>Email:</label>
              <input type="text" name="email" />
              <label>Contraseña:</label>
              <input type="password" name="password" />
              <input type="submit" />
            </form>
            <LoginGoogle />
          </div>
      }
    </>

  );
};

export default Register;

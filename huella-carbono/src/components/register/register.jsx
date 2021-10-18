import React from "react";
import axios from "axios";

const Register = () => {

  const handleRegister = (event) => {
    event.preventDefault()

    const name = event.target.name.value
    const surname = event.target.surname.value
    const email = event.target.email.value
    const password = event.target.password.value

    axios.post('http://localhost:3001/auth/register', {
      name,
      surname,
      email,
      password
    })
  }

  return (
    <div>
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
    </div>
  );
};

export default Register;

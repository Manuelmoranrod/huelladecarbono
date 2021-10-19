import axios from "axios";
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginGoogle from "../LoginGoogle";

// Context
import userContext from "../../context/userContext";


const Login = () => {

  // Context
  const { user, setUser } = useContext(userContext);

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
          : <div className="form">
              <form className="form-login" onSubmit={handleLogin}>
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
                <LoginGoogle />
              </form>
            </div>
      }
    </>
  );
};

export default Login;
import React, { useContext } from "react";
import axios from "axios";
import GoogleLogin from 'react-google-login';

// Context
import userContext from "../../context/userContext";

const LoginGoogle = () => {

  // Context
  const { setUser } = useContext(userContext)

  const handleLoginGoogle = async (resGoogle) => {
    console.log(resGoogle);


    const { email, givenName, familyName, googleId } = resGoogle.profileObj

    const objUser = {
      email,
      name: givenName,
      surname: familyName,
      password: googleId
    }

    const response = await axios.post('http://localhost:3001/auth/login-google', objUser)

    const token = response.data.token

    sessionStorage.setItem('token', token)
    setUser(token)
  };

  const handleLoginGoogleError = (resGoogle) => console.log(resGoogle);

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_CLIENTID_GOOGLE}
      buttonText="Iniciar sesión con Google"
      onSuccess={handleLoginGoogle}
      onFailure={handleLoginGoogleError}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default LoginGoogle;

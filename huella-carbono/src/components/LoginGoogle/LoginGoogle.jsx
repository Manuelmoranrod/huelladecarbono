import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import GoogleLogin from 'react-google-login';

// Context
import userContext from "../../context/userContext";

const LoginGoogle = () => {

  const history = useHistory()

  // Context
  const { setUser } = useContext(userContext)

  const handleLoginGoogle = async (resGoogle) => {
    const { email, googleId } = resGoogle.profileObj

    const objUser = {
      email,
      password: googleId
    }

    try {
      const response = await axios.post('http://localhost:3001/auth/login-google', objUser)

      const token = response.data.token
      const firstTime = response.data.firstTime
      console.log('firstime', firstTime);
      if (firstTime) {
        sessionStorage.setItem('token', token)
        setUser(token)
        history.push('/firstlogingoogle')
      } else {
        sessionStorage.setItem('token', token)
        setUser(token)
        history.push('/profile')
      }
    } catch (err) {
      console.log(err);
    }
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


// CREATE TABLE USER_INFO (
//   INFO_ID int NOT NULL AUTO_INCREMENT,
//   TRANSPORT int NOT NULL,
//   FOOD int NOT NULL,
//   HOME int NOT NULL,
//   USER_ID int,
//   DATE date,
//   PRIMARY KEY (INFO_ID),
//   FOREIGN KEY (USER_ID) REFERENCES USER(ID)
// )
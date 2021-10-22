import React, { useContext } from "react";
import { Redirect } from 'react-router-dom'

// Context
import userContext from "../../context/userContext";

const FirstLoginGoogle = () => {

  // Context
  const { user } = useContext(userContext);
  let conditionalRedirect = user === null ? true : false;

  return (
    <>
      {
        conditionalRedirect
          ? <Redirect to="/" />
          : <div className="login">
              TETE
            </div>
      }
    </>

  );
};

export default FirstLoginGoogle;

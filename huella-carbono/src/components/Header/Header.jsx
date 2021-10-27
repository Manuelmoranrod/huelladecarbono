import React, { useContext } from "react";

// Context
import userContext from '../../context/userContext'

const Header = () => {

  const { user, setUser } = useContext(userContext)

  const handleLogout = () => {
    setUser(null)
    sessionStorage.removeItem('token')
  }

  return (
    <header className="header">
      Header
      {user
        ? <button onClick={handleLogout}>Logout</button>
        : null
      }

    </header>
  );
};

export default Header;

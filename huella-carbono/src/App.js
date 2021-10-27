import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import './styles/styles.scss'

// Context
import userContext from './context/userContext'


function App() {

  // States
  const [user, setUser] = useState(null)

  // Effect para la sesión de usuario
  useEffect(() => {
    const tokenUserLogged = sessionStorage.getItem('token')
    if (tokenUserLogged) {
      setUser(tokenUserLogged)
    }
  }, [])

  return (
    <div className="App">
      <userContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Main />
          <Navbar />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;

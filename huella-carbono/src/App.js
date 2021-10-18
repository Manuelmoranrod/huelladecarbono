import React, { useContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './styles/styles.scss'

// Context
import userContext from './context/userContext'

function App() {

  // States
  const [user, setUser] = useState(null)

  return (
<<<<<<< HEAD
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
=======
    <div>
      <userContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
        <Footer />
      </userContext.Provider>
>>>>>>> 0496a48b3a650b71021656bd4c1a4adf12d41d1c
    </div>
  );
}

export default App;

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
    <div className="App">
      <userContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
        <Footer />
      </userContext.Provider>
    </div>
  );
}

export default App;

import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router";
import { useStep } from "react-hooks-helper";
import { Link } from "react-router-dom";

// Context
import userContext from "../../context/userContext";

// Iconos
import iconHouse from '../../assets/form-home.svg'
import deerFire from '../../assets/deer-fire.svg'

const defaultData = {
  "home-house": "",
  "home-metres": "",
  "home-people": "",
  "home-heat": "",
};

const steps = [
  { id: "home-house" },
  { id: "home-metres" },
  { id: "home-people" },
  { id: "home-heat" },
  { id: "end-form" },
];

const InitialForm = () => {

  const history = useHistory()

  //Context
  const { user } = useContext(userContext);

  useEffect(() => {
    if (user === null) {
      history.push('/')
    }
    async function fetchData() {
      try {
        const { data } = await axios.get('/updates/get-update-home')
        setDataTransport(data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    setLoader(!loader)
  }, [])

  // State data back
  const [loader, setLoader] = useState(false)
  const [dataTransport, setDataTransport] = useState({})

  // Home
  // const [radioHomeHouse, setRadioHomeHouse] = useState(0)
  // const [radioHomeMetres, setRadioHomeMetres] = useState(0)
  // const [radioHomePeople, setRadioHomePeople] = useState(0)
  // const [radioHomeHeat, setRadioHomeHeat] = useState(0)


  // ------------------ Home ------------------ 

  const handleChangeHomeHouse = ({ target }) => {

    defaultData["home-house"] = target.value
    // setRadioHomeHouse(target.value)
    navigation.next()
  }

  const handleChangeHomeMetres = ({ target }) => {

    defaultData["home-metres"] = target.value
    // setRadioHomeMetres(target.value)
    navigation.next()
  }

  const handleChangeHomePeople = ({ target }) => {

    defaultData["home-people"] = target.value
    // setRadioHomePeople(target.value)
    navigation.next()
  }

  const handleChangeHomeHeat = ({ target }) => {

    defaultData["home-heat"] = target.value
    // setRadioHomeHeat(target.value)
    navigation.next()
  }

  // ------------------ Home ------------------ 


  const handleSubmitAllForm = () => {

    let finalNum = 0

    if (defaultData["home-house"] === 'piso') {

      if (defaultData["home-heat"] === "electrica") {
        finalNum = (Number(defaultData["home-metres"]) * dataTransport.electricFlat) / Number(defaultData["home-people"])
      } else if (defaultData["home-heat"] === "gas") {
        finalNum = (Number(defaultData["home-metres"]) * dataTransport.gasFlat) / Number(defaultData["home-people"])
      } else if (defaultData["home-heat"] === "gasoleo") {
        finalNum = (Number(defaultData["home-metres"]) * dataTransport.fuelFlat) / Number(defaultData["home-people"])
      }

    }

    if (defaultData["home-house"] === 'casa') {

      if (defaultData["home-heat"] === "electrica") {
        finalNum = (Number(defaultData["home-metres"]) * dataTransport.electricHouse) / Number(defaultData["home-people"])
      } else if (defaultData["home-heat"] === "gas") {
        finalNum = (Number(defaultData["home-metres"]) * dataTransport.gasHouse) / Number(defaultData["home-people"])
      } else if (defaultData["home-heat"] === "gasoleo") {
        finalNum = (Number(defaultData["home-metres"]) * dataTransport.fuelHouse) / Number(defaultData["home-people"])
      }

    }


    axios.post('/updates/post-update', {
      type: 'home',
      value: finalNum,
      token: user
    })
  }

  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  if (loader) {
    switch (step.id) {
      case "home-house":
        return (
          <form className="form-block">
            <img src={iconHouse} alt="logo-bicicleta" />
            <h2>Hogar</h2>
            <h3>¿En qué tipo de casa vives?</h3>
            <div className="inputs-block">
              <input value="piso" id="ninguna-dairy" onChange={handleChangeHomeHouse} type="radio" name="home-house" checked={false} />
              <label htmlFor="ninguna-dairy">Piso</label>

              <input value="casa" id="mas-tres-dairy" onChange={handleChangeHomeHouse} type="radio" name="home-house" checked={false} />
              <label htmlFor="mas-tres-dairy">Casa</label>
            </div>
          </form>
        );
      case "home-metres":
        return (
          <form className="form-block">
            <img src={iconHouse} alt="logo-bicicleta" />
            <h2>Hogar</h2>
            <h3>¿Cuántos m2 tiene tu vivienda?</h3>
            <div className="inputs-block">
              <input value="40" id="menos-cincuenta" onChange={handleChangeHomeMetres} type="radio" name="home-metres" checked={false} />
              <label htmlFor="menos-cincuenta">Menos de 50 m2</label>

              <input value="65" id="cincuenta-ochenta" onChange={handleChangeHomeMetres} type="radio" name="home-metres" checked={false} />
              <label htmlFor="cincuenta-ochenta">Entre 50 y 80 m2</label>

              <input value="100" id="ochenta-cientoveinte" onChange={handleChangeHomeMetres} type="radio" name="home-metres" checked={false} />
              <label htmlFor="ochenta-cientoveinte">Entre 80 y 120 m2</label>

              <input value="210" id="cientoveinte-trescientos" onChange={handleChangeHomeMetres} type="radio" name="home-metres" checked={false} />
              <label htmlFor="cientoveinte-trescientos">Entre 120 y 300 m2</label>

              <input value="350" id="mas-trescientos-m2" onChange={handleChangeHomeMetres} type="radio" name="home-metres" checked={false} />
              <label htmlFor="mas-trescientos-m2">Mas de 300 m2</label>
            </div>
          </form>
        );
      case "home-people":
        return (
          <form className="form-block">
            <img src={iconHouse} alt="logo-bicicleta" />
            <h2>Hogar</h2>
            <h3>¿cuántas personas convivís en casa?</h3>
            <div className="inputs-block">
              <input value="1" id="uno-gente" onChange={handleChangeHomePeople} type="radio" name="home-people" checked={false} />
              <label htmlFor="uno-gente">1</label>

              <input value="2" id="dos-gente" onChange={handleChangeHomePeople} type="radio" name="home-people" checked={false} />
              <label htmlFor="dos-gente">2</label>

              <input value="3" id="tres-gente" onChange={handleChangeHomePeople} type="radio" name="home-people" checked={false} />
              <label htmlFor="tres-gente">3</label>

              <input value="4" id="cuatro-gente" onChange={handleChangeHomePeople} type="radio" name="home-people" checked={false} />
              <label htmlFor="cuatro-gente">4</label>

              <input value="5" id="cinco-mas-gente" onChange={handleChangeHomePeople} type="radio" name="home-people" checked={false} />
              <label htmlFor="cinco-mas-gente">5 o +</label>
            </div>
          </form>
        );
      case "home-heat":
        return (
          <form className="form-block">
            <img src={iconHouse} alt="logo-bicicleta" />
            <h2>Hogar</h2>
            <h3>¿Qué tipo de energía empleas para calentar tu hogar?</h3>
            <div className="inputs-block">
              <input value="electrica" id="electrica-heat" onChange={handleChangeHomeHeat} type="radio" name="home-heat" checked={false} />
              <label htmlFor="electrica-heat">Eléctrica</label>

              <input value="gas" id="gas-heat" onChange={handleChangeHomeHeat} type="radio" name="home-heat" checked={false} />
              <label htmlFor="gas-heat">Gas</label>

              <input value="gasoleo" id="gasoleo-heat" onChange={handleChangeHomeHeat} type="radio" name="home-heat" checked={false} />
              <label htmlFor="gasoleo-heat">Gasoleo</label>
            </div>
          </form>
        );
      case "end-form":
        return (
          <div className="final-form-daily">
            <img src={deerFire} alt="ciervo en bosque ardiendo" />
            <h2>¡Lo estás haciendo genial!</h2>
            <p>Gracias a tu progreso y al de personas comprometidas con el medioambiente como tú las emisiones de {'CO2'} de tu ciudad están reduciéndose.</p>
            <Link to="/compensate"><button className="colaboration" type="button" onClick={handleSubmitAllForm}>Colabora con más proyectos</button></Link>
            <Link to="/profile"><button className="go-profile" type="button" onClick={handleSubmitAllForm}>Volver a mi perfil</button></Link>
          </div>
        );
    }

  } else {
    return <h1>Cargando...</h1>
  }

}

export default InitialForm;
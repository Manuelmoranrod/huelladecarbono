import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router";
import { useStep } from "react-hooks-helper";
import { Link } from 'react-router-dom'

// Context
import userContext from "../../context/userContext";

// Iconos
import iconBici from '../../assets/form-transport-bici.svg'
import deerFire from '../../assets/deer-fire.svg'

const defaultData = {
  "transport-vehicle": "",
  "transport-fuel": "",
  "transport-km": "",
  "transport-flys-time": "",
  "transport-flys-class": "",
};

const steps = [
  { id: "transport-vehicle" },
  { id: "transport-fuel" },
  { id: "transport-km" },
  { id: "transport-flys-time" },
  { id: "transport-flys-class" },
  { id: "end-form" },
];

const Transport = () => {

  const history = useHistory()

  //Context
  const { user } = useContext(userContext);

  useEffect(() => {
    if (user === null) {
      history.push('/')
    }
    async function getData() {
      try {
        const { data } = await axios.get('/updates/get-update-transport')
        setDataTransport(data)
      } catch (err) {
        console.log(err);
      }
    }
    getData()
    setLoader(!loader)
  }, [])

  // State data back
  const [loader, setLoader] = useState(false)
  const [dataTransport, setDataTransport] = useState({})

  // Transport
  // const [radioTransportVehicle, setRadioTransportVehicle] = useState(0)
  // const [radioTransportFuel, setRadioTransportFuel] = useState(0)
  const [radioTransportKm, setRadioTransportKm] = useState(0)
  // const [radioTransportFlysTime, setRadioTransportFlysTime] = useState(0)
  // const [radioTransportFlysClass, setRadioTransportFlysClass] = useState(0)


  // ------------------ Transport ------------------ 

  const handleChangeTransporVehicle = ({ target }) => {
    defaultData["transport-vehicle"] = target.value
    // setRadioTransportVehicle(target.value)

    if (target.id === 'coche' || target.id === 'avion') {
      target.id === 'coche' ? navigation.next() : navigation.go(3);
    } else {
      navigation.go(2)
    }
  }

  const handleChangeTransporFuel = ({ target }) => {

    defaultData["transport-fuel"] = target.value
    // setRadioTransportFuel(target.value)
    navigation.next()
  }

  const handleChangeTransporKm = ({ target }) => {

    defaultData["transport-km"] = target.value
    setRadioTransportKm(target.value)
  }

  const handleNextTransporKm = () => {

    navigation.go(5)
  }

  const handleChangeTransporFlysTime = ({ target }) => {

    defaultData["transport-flys-time"] = target.value
    // setRadioTransportFlysTime(target.value)
    navigation.next()
  }

  const handleChangeTransporFlysClass = ({ target }) => {

    defaultData["transport-flys-class"] = target.value
    // setRadioTransportFlysClass(target.value)
    navigation.next()
  }

  // ------------------ Transport ------------------ 


  const handleSubmitAllForm = () => {

    let finalNum = 0;

    if (defaultData["transport-vehicle"] === 'coche' || defaultData["transport-vehicle"] === 'avion') {

      if (defaultData["transport-vehicle"] === 'coche') {
        finalNum = Number(defaultData["transport-fuel"]) * Number(defaultData["transport-km"])
      }

      if (defaultData["transport-vehicle"] === 'avion') {

        if (defaultData["transport-flys-time"] === 'sort') {
          finalNum = Number(dataTransport.flySortBusiness)
        }

        if (defaultData["transport-flys-time"] === 'mid') {

          if (defaultData["transport-flys-class"] === 'economy') {
            finalNum = Number(dataTransport.flyMidEconomy)
          } else if (defaultData["transport-flys-class"] === 'business') {
            finalNum = Number(dataTransport.flyMidBusiness)

          } else if (defaultData["transport-flys-class"] === 'first-class') {
            finalNum = Number(dataTransport.flyMidFirstClass)
          }

        }

        if (defaultData["transport-flys-time"] === 'long') {

          if (defaultData["transport-flys-class"] === 'economy') {
            finalNum = Number(dataTransport.flyLongEconomy)
          } else if (defaultData["transport-flys-class"] === 'business') {
            finalNum = Number(dataTransport.flyLongBusiness)

          } else if (defaultData["transport-flys-class"] === 'first-class') {
            finalNum = Number(dataTransport.flyLongFirstClass)
          }

        }

      }

    } else {
      finalNum = Number(defaultData["transport-vehicle"]) * Number(defaultData["transport-km"])
    }

    axios.post('http://localhost:3001/updates/post-update', {
      type: 'transport',
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
      case "transport-vehicle":
        return (
          <form className="form-block">
            <img src={iconBici} alt="logo-bicicleta" />
            <h2>Transporte</h2>
            <h3>¿Cómo te has desplazado hoy?</h3>
            <div className="inputs-block">
              <input value="coche" id="coche" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
              <label htmlFor="coche">Coche</label>

              <input value={dataTransport.averageBus} id="bus" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
              <label htmlFor="bus">Bus</label>

              <input value={dataTransport.averageMetro} id="tren-metro" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
              <label htmlFor="tren-metro">Tren / Metro</label>

              <input value={dataTransport.averageMoto} id="moto" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
              <label htmlFor="moto">Moto</label>

              <input value="0" id="bici" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
              <label htmlFor="bici">En bici</label>

              <input value="0" id="pie" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
              <label htmlFor="pie">A pie</label>

              <input value="avion" id="avion" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
              <label htmlFor="avion">En avión</label>
            </div>
          </form>
        );
      case "transport-fuel":
        return (
          <form className="form-block">
            <img src={iconBici} alt="logo-bicicleta" />
            <h2>Transporte</h2>
            <h3>¿En qué tipo de coche te has movido hoy?</h3>
            <div className="inputs-block">
              <input value={dataTransport.averageDiesel} id="diesel" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
              <label htmlFor="diesel">Diesel</label>

              <input value={dataTransport.averagePetrol} id="gasolina" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
              <label htmlFor="gasolina">Gasolina</label>

              <input value={dataTransport.averageHybrid} id="hibrido" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
              <label htmlFor="hibrido">Híbrido</label>

              <input value={dataTransport.averageElectric} id="electrico" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
              <label htmlFor="electrico">Eléctrico</label>

              <input value={dataTransport.averageGas} id="gas" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
              <label htmlFor="gas">Gas</label>
            </div>
          </form>
        );
      case "transport-km":
        return (
          <form onSubmit={(e) => e.preventDefault()} className="form-block">
            <img src={iconBici} alt="logo-bicicleta" />
            <h2>Transporte</h2>
            <h3>¿Cuántos km te has movido?</h3>
            <div className="inputs-text-block">
              <input value={radioTransportKm} onChange={handleChangeTransporKm} type="number" name="transport-km" />
              <button type="button" onClick={handleNextTransporKm}>Siguiente</button>
            </div>
          </form>
        );
      case "transport-flys-time":
        return (
          <form className="form-block">
            <img src={iconBici} alt="logo-bicicleta" />
            <h2>Transporte</h2>
            <h3>¿Qué duración tuvieron?</h3>
            <div className="inputs-block">
              <input value="sort" id="2-h" onChange={handleChangeTransporFlysTime} type="radio" name="transport-flys-time" />
              <label htmlFor="2-h"> {'<2h'} </label>

              <input value="mid" id="2-4-h" onChange={handleChangeTransporFlysTime} type="radio" name="transport-flys-time" />
              <label htmlFor="2-4-h">Entre 2 y 4h</label>

              <input value="long" id="mas-cuatro-h" onChange={handleChangeTransporFlysTime} type="radio" name="transport-flys-time" />
              <label htmlFor="mas-cuatro-h">+4h</label>
            </div>
          </form>
        );
      case "transport-flys-class":
        return (
          <form className="form-block">
            <img src={iconBici} alt="logo-bicicleta" />
            <h2>Transporte</h2>
            <h3>¿En qué tipo de clase has viajado?</h3>
            <div className="inputs-block">
              <input value="economy" id="2" onChange={handleChangeTransporFlysClass} type="radio" name="transport-flys-class" checked={false} />
              <label htmlFor="2">Económia</label>

              <input value="business" id="business" onChange={handleChangeTransporFlysClass} type="radio" name="transport-flys-class" checked={false} />
              <label htmlFor="business">Business</label>

              <input value="first-class" id="first-class" onChange={handleChangeTransporFlysClass} type="radio" name="transport-flys-class" checked={false} />
              <label htmlFor="first-class">First class</label>
            </div>
          </form>
        );
      case "end-form":
        return (
          <div className="final-form-daily">
            <img src={deerFire} alt="ciervo en bosque ardiendo" />
            <h2>¡Lo estás haciendo genial!</h2>
            <p>Gracias a tu progreso y al de personas comprometidas con el medioambiente como tú las emisiones de {'CO2'} de tu ciudad están reduciéndose.</p>
            <Link to="/profile"><button className="colaboration" type="button" onClick={handleSubmitAllForm}>Colabora con más proyectos</button></Link>
            <Link to="/profile"><button className="go-profile" type="button" onClick={handleSubmitAllForm}>Volver a mi perfil</button></Link>
          </div>
        );
    }
  } else {
    return <h1>Cargando...</h1>
  }


}

export default Transport;

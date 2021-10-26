import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router";
import { useStep } from "react-hooks-helper";

// Context
import userContext from "../../context/userContext";


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

  useEffect(async () => {
    if (user === null) {
      history.push('/')
    }

    const { data } = await axios.get('http://localhost:3001/updates/get-update-transport')

    console.log(data);
    setDataTransport(data)
  }, [])

  // State data back
  const [dataTransport, setDataTransport] = useState({})

  // Transport
  const [radioTransportVehicle, setRadioTransportVehicle] = useState(0)
  const [radioTransportFuel, setRadioTransportFuel] = useState(0)
  const [radioTransportKm, setRadioTransportKm] = useState(0)
  const [radioTransportFlysTime, setRadioTransportFlysTime] = useState(0)
  const [radioTransportFlysClass, setRadioTransportFlysClass] = useState(0)


  // ------------------ Transport ------------------ 

  const handleChangeTransporVehicle = ({ target }) => {
    defaultData["transport-vehicle"] = target.value
    setRadioTransportVehicle(target.value)
    console.log('id', target.id);

    if (target.id === 'coche' || target.id === 'avion') {
      target.id === 'coche' ? navigation.next() : navigation.go(3);
    } else {
      navigation.go(2)
    }
  }

  const handleChangeTransporFuel = ({ target }) => {

    defaultData["transport-fuel"] = target.value
    setRadioTransportFuel(target.value)
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
    setRadioTransportFlysTime(target.value)
    navigation.next()
  }

  const handleChangeTransporFlysClass = ({ target }) => {

    defaultData["transport-flys-class"] = target.value
    setRadioTransportFlysClass(target.value)
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


  switch (step.id) {
    case "transport-vehicle":
      return (
        <form>
          <h2>Transporte</h2>
          <h3>¿Cómo te has desplazado hoy?</h3>
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
        </form>
      );
    case "transport-fuel":
      return (
        <form>
          <h2>Transporte</h2>
          <h3>¿En qué tipo de coche te has movido hoy?</h3>
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
        </form>
      );
    case "transport-km":
      return (
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Transporte</h2>
          <h3>¿Cuántos km te has movido?</h3>
          <input value={radioTransportKm} onChange={handleChangeTransporKm} type="number" name="transport-km" />
          <button type="button" onClick={handleNextTransporKm}>Siguiente</button>
        </form>
      );
    case "transport-flys-time":
      return (
        <form>
          <h2>Transporte</h2>
          <h3>¿Qué duración tuvieron?</h3>
          <input value="sort" id="2-h" onChange={handleChangeTransporFlysTime} type="radio" name="transport-flys-time" />
          <label htmlFor="2-h"> {'<2h'} </label>

          <input value="mid" id="2-4-h" onChange={handleChangeTransporFlysTime} type="radio" name="transport-flys-time" />
          <label htmlFor="2-4-h">Entre 2 y 4h</label>

          <input value="long" id="mas-cuatro-h" onChange={handleChangeTransporFlysTime} type="radio" name="transport-flys-time" />
          <label htmlFor="mas-cuatro-h">+4h</label>
        </form>
      );
    case "transport-flys-class":
      return (
        <form>
          <h2>Transporte</h2>
          <h3>¿En qué tipo de clase has viajado?</h3>
          <input value="economy" id="2" onChange={handleChangeTransporFlysClass} type="radio" name="transport-flys-class" checked={false} />
          <label htmlFor="2">Económia</label>

          <input value="business" id="business" onChange={handleChangeTransporFlysClass} type="radio" name="transport-flys-class" checked={false} />
          <label htmlFor="business">Business</label>

          <input value="first-class" id="first-class" onChange={handleChangeTransporFlysClass} type="radio" name="transport-flys-class" checked={false} />
          <label htmlFor="first-class">First class</label>
        </form>
      );
    case "end-form":
      return (
        <div>
          <img />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa laudantium unde quibusdam iure odio, repellat eos enim quidem soluta aliquid? Quis beatae voluptates provident culpa tempore necessitatibus laboriosam eum eaque.</p>
          <button type="button" onClick={handleSubmitAllForm}>Aceptar</button>
          <button>Colaborar con más proyectos</button>
        </div>
      );
  }

  // return (
  //   <div>Hola</div>
  // )

}

export default Transport;





/*
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

// Context
import userContext from "../../context/userContext";

const Transport = () => {

  // Context
  const { user } = useContext(userContext);

  const questions = [
    {
      questionText: 'Pregunta de transporte 1',
      type: 'transport',
      answerOptions: [
        { answerText: '1', isCorrect: 6 },
        { answerText: '2', isCorrect: 5 },
        { answerText: '3', isCorrect: 4 },
        { answerText: '4', isCorrect: 2 },
      ],
    },
    {
      questionText: 'Pregunta de transporte 2',
      type: 'transport',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: 2 },
        { answerText: 'Elon Musk', isCorrect: 6 },
        { answerText: 'Bill Gates', isCorrect: 9 },
        { answerText: 'Tony Stark', isCorrect: 10 },
      ],
    },
    {
      questionText: 'Pregunta de transporte 3',
      type: 'transport',
      answerOptions: [
        { answerText: 'Apple', isCorrect: 15 },
        { answerText: 'Intel', isCorrect: 18 },
        { answerText: 'Amazon', isCorrect: 20 },
        { answerText: 'Microsoft', isCorrect: 21 },
      ],
    }
  ];


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showValue, setShowValue] = useState(false);
  const [transport, setTransport] = useState(0);

  // Effect
  useEffect(() => {
    if (showValue) {
      axios.post('http://localhost:3001/updates/post-update', {
        value: transport,
        type: 'transport',
        token: user
      })
    }
  }, [showValue])


  const handleAnswerOptionClick = (value, type) => {

    if (type === 'transport') {
      setTransport(transport + value);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowValue(true)
    }
  };


  return (
    <div>
      {showValue
        ? <div className='score-section'>
          Your CO2 kg is {transport}
        </div>
        : (
          <>
            <div className='question-section'>
              <div className='icon'>
                ICON
              </div>
              <div className='question-type'>
                <span>Alimentación, pregunta {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect, questions[currentQuestion].type)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )}
    </div>
  );
};

export default Transport;
*/
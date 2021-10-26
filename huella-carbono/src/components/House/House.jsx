import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router";
import { useStep } from "react-hooks-helper";

// Context
import userContext from "../../context/userContext";


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

  useEffect(async () => {
    if (user === null) {
      history.push('/')
    }

    const { data } = await axios.get('http://localhost:3001/updates/get-update-home')

    console.log(data);
    setDataTransport(data)
  }, [])

  // State data back
  const [dataTransport, setDataTransport] = useState({})

  // Home
  const [radioHomeHouse, setRadioHomeHouse] = useState(0)
  const [radioHomeMetres, setRadioHomeMetres] = useState(0)
  const [radioHomePeople, setRadioHomePeople] = useState(0)
  const [radioHomeHeat, setRadioHomeHeat] = useState(0)


  // ------------------ Home ------------------ 

  const handleChangeHomeHouse = ({ target }) => {

    defaultData["home-house"] = target.value
    setRadioHomeHouse(target.value)
    navigation.next()
  }

  const handleChangeHomeMetres = ({ target }) => {

    defaultData["home-metres"] = target.value
    setRadioHomeMetres(target.value)
    navigation.next()
  }

  const handleChangeHomePeople = ({ target }) => {

    defaultData["home-people"] = target.value
    setRadioHomePeople(target.value)
    navigation.next()
  }

  const handleChangeHomeHeat = ({ target }) => {

    defaultData["home-heat"] = target.value
    setRadioHomeHeat(target.value)
    navigation.next()
  }

  // ------------------ Home ------------------ 


  const handleSubmitAllForm = () => {

    let finalNum = 0

    if (defaultData["home-house"] === 'piso') {
      console.log('piso');
      if (defaultData["home-heat"] === "electrica") {
        finalNum = (Number(defaultData["home-metres"]) * dataTransport.electricFlat) / Number(defaultData["home-people"])
      } else if (defaultData["home-heat"] === "gas") {
        finalNum = (Number(defaultData["home-metres"]) * dataTransport.gasFlat) / Number(defaultData["home-people"])
      } else if (defaultData["home-heat"] === "gasoleo") {
        finalNum = (Number(defaultData["home-metres"]) * dataTransport.fuelFlat) / Number(defaultData["home-people"])
      }

    }

    if (defaultData["home-house"] === 'casa') {
      console.log('casa');
      if (defaultData["home-heat"] === "electrica") {
        finalNum = (Number(defaultData["home-metres"]) * dataTransport.electricHouse) / Number(defaultData["home-people"])
      } else if (defaultData["home-heat"] === "gas") {
        finalNum = (Number(defaultData["home-metres"]) * dataTransport.gasHouse) / Number(defaultData["home-people"])
      } else if (defaultData["home-heat"] === "gasoleo") {
        finalNum = (Number(defaultData["home-metres"]) * dataTransport.fuelHouse) / Number(defaultData["home-people"])
      }

    }

    console.log(finalNum);

    axios.post('http://localhost:3001/updates/post-update', {
      type: 'home',
      value: finalNum,
      token: user
    })
  }



  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  console.log(defaultData);

  switch (step.id) {
    case "home-house":
      return (
        <form>
          <h2>Hogar</h2>
          <h3>¿En qué tipo de casa vives?</h3>
          <input value="piso" id="ninguna-dairy" onChange={handleChangeHomeHouse} type="radio" name="home-house" checked={false} />
          <label htmlFor="ninguna-dairy">Piso</label>

          <input value="casa" id="mas-tres-dairy" onChange={handleChangeHomeHouse} type="radio" name="home-house" checked={false} />
          <label htmlFor="mas-tres-dairy">Casa</label>
        </form>
      );
    case "home-metres":
      return (
        <form>
          <h2>Hogar</h2>
          <h3>¿Cuántos m2 tiene tu vivienda?</h3>
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
        </form>
      );
    case "home-people":
      return (
        <form>
          <h2>Hogar</h2>
          <h3>¿cuántas personas convivís en casa?</h3>
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
        </form>
      );
    case "home-heat":
      return (
        <form>
          <h2>Hogar</h2>
          <h3>¿Qué tipo de energía empleas para calentar tu hogar?</h3>
          <input value="electrica" id="electrica-heat" onChange={handleChangeHomeHeat} type="radio" name="home-heat" checked={false} />
          <label htmlFor="electrica-heat">Eléctrica</label>

          <input value="gas" id="gas-heat" onChange={handleChangeHomeHeat} type="radio" name="home-heat" checked={false} />
          <label htmlFor="gas-heat">Gas</label>

          <input value="gasoleo" id="gasoleo-heat" onChange={handleChangeHomeHeat} type="radio" name="home-heat" checked={false} />
          <label htmlFor="gasoleo-heat">Gasoleo</label>
        </form>
      );
    case "end-form":
      return (
        <div>
          <img />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa laudantium unde quibusdam iure odio, repellat eos enim quidem soluta aliquid? Quis beatae voluptates provident culpa tempore necessitatibus laboriosam eum eaque.</p>
          <button onClick={handleSubmitAllForm}>Aceptar</button>
          <button>Colaborar con más proyectos</button>
        </div>
      );
  }

  return (
    <div>Hola</div>
  )

}

export default InitialForm;


/*
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

// Context
import userContext from "../../context/userContext";

const House = () => {

  // Context
  const { user } = useContext(userContext);

  const questions = [
    {
      questionText: 'Pregunta de hogar 1',
      type: 'home',
      answerOptions: [
        { answerText: '1', isCorrect: 6 },
        { answerText: '2', isCorrect: 5 },
        { answerText: '3', isCorrect: 4 },
        { answerText: '4', isCorrect: 2 },
      ],
    },
    {
      questionText: 'Pregunta de hogar 2',
      type: 'home',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: 2 },
        { answerText: 'Elon Musk', isCorrect: 6 },
        { answerText: 'Bill Gates', isCorrect: 9 },
        { answerText: 'Tony Stark', isCorrect: 10 },
      ],
    },
    {
      questionText: 'Pregunta de hogar 3',
      type: 'home',
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
  const [home, setHome] = useState(0);

  // Effect
  useEffect(() => {
    if (showValue) {
      axios.post('http://localhost:3001/updates/post-update', {
        value: home,
        type: 'home',
        token: user
      })
    }
  }, [showValue])


  const handleAnswerOptionClick = (value, type) => {

    if (type === 'home') {
      setHome(home + value);
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
          Your CO2 kg is {home}
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

export default House;
*/
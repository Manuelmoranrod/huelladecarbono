import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router";
import { useStep } from "react-hooks-helper";
import { Link } from "react-router-dom";

// Context
import userContext from "../../context/userContext";

import iconFood from '../../assets/form-food-icon.svg'

const defaultData = {
  "food-meet": "",
  "food-meet-type": "",
  "food-fish": "",
  "food-eggs": "",
  "food-dairy": "",
};

const steps = [
  { id: "food-meet" },
  { id: "food-meet-type" },
  { id: "food-fish" },
  { id: "food-eggs" },
  { id: "food-dairy" },
  { id: "end-form" },
];

const Food = () => {

  const history = useHistory()

  //Context
  const { user } = useContext(userContext);

  useEffect(async () => {
    if (user === null) {
      history.push('/')
    }

    const { data } = await axios.get('http://localhost:3001/updates/get-update-food')

    console.log(data);
    setDataTransport(data)
  }, [])

  // State data back
  const [dataTransport, setDataTransport] = useState({})

  // Food
  const [radioFoodMeet, setRadioFoodMeet] = useState(0)
  const [radioFoodMeetType, setRadioFoodMeetType] = useState(0)
  const [radioFoodFish, setRadioFoodFish] = useState(0)
  const [radioFoodEggs, setRadioFoodEggs] = useState(0)
  const [radioFoodDairy, setRadioFoodDairy] = useState(0)


  // ------------------ Food ------------------ 

  const handleChangeFoodMeet = ({ target }) => {

    defaultData["food-meet"] = target.value
    setRadioFoodMeet(target.value)

    if (target.id === 'no-meet') {
      navigation.go(2)
    } else {
      navigation.next()
    }
  }

  const handleChangeFoodMeetType = ({ target }) => {

    defaultData["food-meet-type"] = target.value
    setRadioFoodMeetType(target.value)
    navigation.next()
  }

  const handleChangeFoodFish = ({ target }) => {

    defaultData["food-fish"] = target.value
    setRadioFoodFish(target.value)
    navigation.next()
  }

  const handleChangeFoodEggs = ({ target }) => {

    defaultData["food-eggs"] = target.value
    setRadioFoodEggs(target.value)
    navigation.next()
  }

  const handleChangeFoodDairy = ({ target }) => {

    defaultData["food-dairy"] = target.value
    setRadioFoodDairy(target.value)
    navigation.next()
  }

  // ------------------ Food ------------------ 



  const handleSubmitAllForm = () => {

    console.log(defaultData);


    let totalNum = 0

    if (Number(defaultData["food-meet"]) > 0) {
      console.log('entra meet');
      totalNum += Number(defaultData["food-meet"]) * Number(defaultData["food-meet-type"]);
      console.log(totalNum);
    }

    if (Number(defaultData["food-fish"]) > 0) {
      console.log('entra fish');
      totalNum += Number(defaultData["food-fish"]) * dataTransport.fish;
      console.log(totalNum);
    }

    if (Number(defaultData["food-eggs"]) > 0) {
      console.log('entra eggs');
      totalNum += Number(defaultData["food-eggs"]) * dataTransport.eggs;
      console.log(totalNum);
    }

    if (Number(defaultData["food-dairy"]) > 0) {
      console.log('entra dairy');
      totalNum += Number(defaultData["food-dairy"]) * dataTransport.dairy;
      console.log(totalNum);
    }


    axios.post('http://localhost:3001/updates/post-update', {
      type: 'food',
      value: totalNum,
      token: user
    })
  }



  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  console.log(defaultData);

  switch (step.id) {
    case "food-meet":
      return (
        <form className="form-block">
          <img src={iconFood} alt="logo-bicicleta" />
          <h2>Alimentación</h2>
          <h3>Hoy he comido carne:</h3>
          <div className="inputs-block">
            <input value="0" id="no-meet" onChange={handleChangeFoodMeet} type="radio" name="food-meet" checked={false} />
            <label htmlFor="no-meet">No</label>

            <input value="1" id="uno-vez" onChange={handleChangeFoodMeet} type="radio" name="food-meet" checked={false} />
            <label htmlFor="uno-vez">1 vez</label>

            <input value="2" id="dos-veces" onChange={handleChangeFoodMeet} type="radio" name="food-meet" checked={false} />
            <label htmlFor="dos-veces">2 veces</label>
          </div>
        </form>
      );
    case "food-meet-type":
      return (
        <form className="form-block">
          <img src={iconFood} alt="logo-bicicleta" />
          <h2>Alimentación</h2>
          <h3>¿De qué tipo?</h3>
          <div className="inputs-block">
            <input value={dataTransport.meetPig} id="cerdo" onChange={handleChangeFoodMeetType} type="radio" name="food-meet-type" checked={false} />
            <label htmlFor="cerdo">Cerdo</label>

            <input value={dataTransport.meetCow} id="vaca" onChange={handleChangeFoodMeetType} type="radio" name="food-meet-type" checked={false} />
            <label htmlFor="vaca">Vaca</label>

            <input value={dataTransport.meetLamb} id="cordero" onChange={handleChangeFoodMeetType} type="radio" name="food-meet-type" checked={false} />
            <label htmlFor="cordero">Cordero</label>

            <input value={dataTransport.meetChicken} id="pollo" onChange={handleChangeFoodMeetType} type="radio" name="food-meet-type" checked={false} />
            <label htmlFor="pollo">Pollo</label>
          </div>
        </form>
      );
    case "food-fish":
      return (
        <form className="form-block">
          <img src={iconFood} alt="logo-bicicleta" />
          <h2>Alimentación</h2>
          <h3>Hoy he comido pescado:</h3>
          <div className="inputs-block">
            <input value="0" id="no-fish" onChange={handleChangeFoodFish} type="radio" name="food-fish" checked={false} />
            <label htmlFor="no-fish">No</label>

            <input value="1" id="una-vez-fish" onChange={handleChangeFoodFish} type="radio" name="food-fish" checked={false} />
            <label htmlFor="una-vez-fish">1 vez</label>

            <input value="2" id="dos-veces-fish" onChange={handleChangeFoodFish} type="radio" name="food-fish" checked={false} />
            <label htmlFor="dos-veces-fish">2 veces</label>
          </div>
        </form>
      );
    case "food-eggs":
      return (
        <form className="form-block">
          <img src={iconFood} alt="logo-bicicleta" />
          <h2>Alimentación</h2>
          <h3>Hoy he comido huevos:</h3>
          <div className="inputs-block">
            <input value="0" id="no-eggs" onChange={handleChangeFoodEggs} type="radio" name="food-eggs" checked={false} />
            <label htmlFor="no-eggs">No</label>

            <input value="1" id="uno-vez-eggs" onChange={handleChangeFoodEggs} type="radio" name="food-eggs" checked={false} />
            <label htmlFor="uno-vez-eggs">1 vez</label>

            <input value="2" id="dos-veces-eggs" onChange={handleChangeFoodEggs} type="radio" name="food-eggs" checked={false} />
            <label htmlFor="dos-veces-eggs">2 veces</label>
          </div>
        </form>
      );
    case "food-dairy":
      return (
        <form className="form-block">
          <img src={iconFood} alt="logo-bicicleta" />
          <h2>Alimentación</h2>
          <h3>Hoy he comido lácteos:</h3>
          <div className="inputs-block">
            <input value="0" id="no-dairy" onChange={handleChangeFoodDairy} type="radio" name="food-dairy" checked={false} />
            <label htmlFor="no-dairy">No</label>

            <input value="1" id="uno-vez-dairy" onChange={handleChangeFoodDairy} type="radio" name="food-dairy" checked={false} />
            <label htmlFor="uno-vez-dairy">1 vez</label>

            <input value="2" id="dos-veces-dairy" onChange={handleChangeFoodDairy} type="radio" name="food-dairy" checked={false} />
            <label htmlFor="dos-veces-dairy">2 veces</label>
          </div>
        </form>
      );
    case "end-form":
      return (
        <div className="final-form-daily">
          <h2>¡Lo estás haciendo genial!</h2>
          <p>Gracias a tu progreso y al de personas comprometidas con el medioambiente como tú las emisiones de {'CO2'} de tu ciudad están reduciéndose.</p>
          <Link to="/profile"><button className="colaboration" type="button" onClick={handleSubmitAllForm}>Colabora con más proyectos</button></Link>
          <Link to="/profile"><button className="go-profile" type="button" onClick={handleSubmitAllForm}>Volver a mi perfil</button></Link>
        </div>
      );
  }

  return (
    <div>Hola</div>
  )

}

export default Food;



/*
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

// Context
import userContext from "../../context/userContext";

const Food = () => {

  // Context
  const { user } = useContext(userContext);

  const questions = [
    {
      questionText: 'Pregunta de comida 1',
      type: 'food',
      answerOptions: [
        { answerText: '1', isCorrect: 6 },
        { answerText: '2', isCorrect: 5 },
        { answerText: '3', isCorrect: 4 },
        { answerText: '4', isCorrect: 2 },
      ],
    },
    {
      questionText: 'Pregunta de comida 2',
      type: 'food',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: 2 },
        { answerText: 'Elon Musk', isCorrect: 6 },
        { answerText: 'Bill Gates', isCorrect: 9 },
        { answerText: 'Tony Stark', isCorrect: 10 },
      ],
    },
    {
      questionText: 'Pregunta de comida 3',
      type: 'food',
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
  const [food, setFood] = useState(0);

  // Effect
  useEffect(() => {
    if (showValue) {
      axios.post('http://localhost:3001/updates/post-update', {
        value: food,
        type: 'food',
        token: user
      })
    }
  }, [showValue])


  const handleAnswerOptionClick = (value, type) => {

    if (type === 'food') {
      setFood(food + value);
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
          Your CO2 kg is {food}
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

export default Food;
*/
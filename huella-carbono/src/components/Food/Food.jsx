import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router";
import { useStep } from "react-hooks-helper";
import { Link } from "react-router-dom";

// Context
import userContext from "../../context/userContext";

import iconFood from '../../assets/form-food-icon.svg'
import deerFire from '../../assets/deer-fire.svg'

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

  useEffect(() => {
    if (user === null) {
      history.push('/')
    }
    async function fetchData() {

      try {
        const { data } = await axios.get('http://localhost:3001/updates/get-update-food')
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

  // Food
  // const [radioFoodMeet, setRadioFoodMeet] = useState(0)
  // const [radioFoodMeetType, setRadioFoodMeetType] = useState(0)
  // const [radioFoodFish, setRadioFoodFish] = useState(0)
  // const [radioFoodEggs, setRadioFoodEggs] = useState(0)
  // const [radioFoodDairy, setRadioFoodDairy] = useState(0)


  // ------------------ Food ------------------ 

  const handleChangeFoodMeet = ({ target }) => {

    defaultData["food-meet"] = target.value
    // setRadioFoodMeet(target.value)

    if (target.id === 'no-meet') {
      navigation.go(2)
    } else {
      navigation.next()
    }
  }

  const handleChangeFoodMeetType = ({ target }) => {

    defaultData["food-meet-type"] = target.value
    // setRadioFoodMeetType(target.value)
    navigation.next()
  }

  const handleChangeFoodFish = ({ target }) => {

    defaultData["food-fish"] = target.value
    // setRadioFoodFish(target.value)
    navigation.next()
  }

  const handleChangeFoodEggs = ({ target }) => {

    defaultData["food-eggs"] = target.value
    // setRadioFoodEggs(target.value)
    navigation.next()
  }

  const handleChangeFoodDairy = ({ target }) => {

    defaultData["food-dairy"] = target.value
    // setRadioFoodDairy(target.value)
    navigation.next()
  }

  // ------------------ Food ------------------ 



  const handleSubmitAllForm = () => {

    let totalNum = 0

    if (Number(defaultData["food-meet"]) > 0) {
      totalNum += Number(defaultData["food-meet"]) * Number(defaultData["food-meet-type"]);
    }

    if (Number(defaultData["food-fish"]) > 0) {
      totalNum += Number(defaultData["food-fish"]) * dataTransport.fish;
    }

    if (Number(defaultData["food-eggs"]) > 0) {
      totalNum += Number(defaultData["food-eggs"]) * dataTransport.eggs;
    }

    if (Number(defaultData["food-dairy"]) > 0) {
      totalNum += Number(defaultData["food-dairy"]) * dataTransport.dairy;

    }

    console.log(totalNum);

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

  if (loader) {
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

export default Food;

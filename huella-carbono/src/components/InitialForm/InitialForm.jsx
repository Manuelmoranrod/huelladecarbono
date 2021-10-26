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
	"transport-flys": "",
	"transport-flys-time": "",
	"transport-flys-class": "",
	"food-meet": "",
	"food-meet-type": "",
	"food-fish": "",
	"food-eggs": "",
	"food-dairy": "",
	"home-house": "",
	"home-metres": "",
	"home-people": "",
	"home-heat": "",
};

const steps = [
	{ id: "transport-vehicle" },
	{ id: "transport-fuel" },
	{ id: "transport-km" },
	{ id: "transport-flys" },
	{ id: "transport-flys-time" },
	{ id: "transport-flys-class" },
	{ id: "food-meet" },
	{ id: "food-meet-type" },
	{ id: "food-fish" },
	{ id: "food-eggs" },
	{ id: "food-dairy" },
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
	}, [])

	// Transport
	const [radioTransportVehicle, setRadioTransportVehicle] = useState(0)
	const [radioTransportFuel, setRadioTransportFuel] = useState(0)
	const [radioTransportKm, setRadioTransportKm] = useState(0)
	const [radioTransportFlys, setRadioTransportFlys] = useState(0)
	const [radioTransportFlysTime, setRadioTransportFlysTime] = useState(0)
	const [radioTransportFlysClass, setRadioTransportFlysClass] = useState(0)

	// Food
	const [radioFoodMeet, setRadioFoodMeet] = useState(0)
	const [radioFoodMeetType, setRadioFoodMeetType] = useState(0)
	const [radioFoodFish, setRadioFoodFish] = useState(0)
	const [radioFoodEggs, setRadioFoodEggs] = useState(0)
	const [radioFoodDairy, setRadioFoodDairy] = useState(0)

	// Home
	const [radioHomeHouse, setRadioHomeHouse] = useState(0)
	const [radioHomeMetres, setRadioHomeMetres] = useState(0)
	const [radioHomePeople, setRadioHomePeople] = useState(0)
	const [radioHomeHeat, setRadioHomeHeat] = useState(0)


	// ------------------ Transport ------------------ 

	const handleChangeTransporVehicle = ({ target }) => {
		defaultData["transport-vehicle"] = target.value
		setRadioTransportVehicle(target.value)
		console.log(target.id)
		if (target.id !== 'coche') {
			navigation.go(2)
		} else {
			navigation.next()
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

	const handleChangeTransporFlys = ({ target }) => {

		defaultData["transport-flys"] = target.value
		setRadioTransportFlys(target.value)
	}

	const handleNextTransporFlys = () => {
		if(radioTransportFlys <= 0){
			navigation.go(6)
		} else {
			navigation.next()
		}
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

	// ------------------ Food ------------------ 

	const handleChangeFoodMeet = ({ target }) => {

		defaultData["food-meet"] = target.value
		setRadioFoodMeet(target.value)

		if (target.id === 'ninguna') {
			navigation.go(8)
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


		// axios.post('http://localhost:3001/info/post-info', {
		// 	transport,
		// 	food,
		// 	home,
		// 	token: user
		// })
	}



	const { step, navigation } = useStep({
		steps,
		initialStep: 0,
	});

	console.log(defaultData);

	switch (step.id) {
		case "transport-vehicle":
			return (
				<form>
					<h2>Transporte</h2>
					<h3>Selecciona el método de transporte que usas con frecuencia</h3>
					<input value="coche" id="coche" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
					<label htmlFor="coche">Coche</label>

					<input value="546" id="bus" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
					<label htmlFor="bus">Bus</label>

					<input value="546" id="tren-metro" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
					<label htmlFor="tren-metro">Tren / Metro</label>

					<input value="546" id="moto" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
					<label htmlFor="moto">Moto</label>

					<input value="0" id="bici" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
					<label htmlFor="bici">En bici</label>

					<input value="0" id="pie" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
					<label htmlFor="pie">A pie</label>
				</form>
			);
		case "transport-fuel":
			return (
				<form>
					<h2>Transporte</h2>
					<h3>¿Que tipo de coche/moto tienes?</h3>
					<input value="1" id="diesel" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
					<label htmlFor="diesel">Diesel</label>

					<input value="2" id="gasolina" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
					<label htmlFor="gasolina">Gasolina</label>

					<input value="3" id="hibrido" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
					<label htmlFor="hibrido">Híbrido</label>

					<input value="4" id="electrico" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
					<label htmlFor="electrico">Eléctrico</label>

					<input value="5" id="gas" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
					<label htmlFor="gas">Gas</label>
				</form>
			);
		case "transport-km":
			return (
				<form onSubmit={(e) => e.preventDefault()}>
					<h2>Transporte</h2>
					<h3>¿Cuántos km recorres semanalmente?</h3>
					<input value={radioTransportKm} onChange={handleChangeTransporKm} type="number" name="transport-km" />
					<button type="button" onClick={navigation.next}>Siguiente</button>
				</form>
			);
		case "transport-flys":
			return (
				<form onSubmit={(e) => e.preventDefault()}>
					<h2>Transporte</h2>
					<h3>¿Cuántos vuelos has cogido en el último año?</h3>
					<input value={radioTransportFlys} onChange={handleChangeTransporFlys} type="number" name="transport-flys" />
					<button type="button" onClick={handleNextTransporFlys}>Siguiente</button>
				</form>
			);
		case "transport-flys-time":
			return (
				<form>
					<h2>Transporte</h2>
					<h3>¿Qué duración tuvieron?</h3>
					<input value="2" id="2" onChange={handleChangeTransporFlysTime} type="radio" name="transport-flys-time" checked={false} />
					<label htmlFor="2"> {'<2h'} </label>

					<input value="3" id="2-4" onChange={handleChangeTransporFlysTime} type="radio" name="transport-flys-time" checked={false} />
					<label htmlFor="2-4">Entre 2 y 4h</label>

					<input value="4" id="electrico" onChange={handleChangeTransporFlysTime} type="radio" name="transport-flys-time" checked={false} />
					<label htmlFor="electrico">+4h</label>
				</form>
			);
		case "transport-flys-class":
			return (
				<form>
					<h2>Transporte</h2>
					<h3>¿En qué tipo de clase has viajado?</h3>
					<input value="2" id="2" onChange={handleChangeTransporFlysClass} type="radio" name="transport-flys-class" checked={false} />
					<label htmlFor="2">Económia</label>

					<input value="3" id="business" onChange={handleChangeTransporFlysClass} type="radio" name="transport-flys-class" checked={false} />
					<label htmlFor="business">Business</label>

					<input value="4" id="first-class" onChange={handleChangeTransporFlysClass} type="radio" name="transport-flys-class" checked={false} />
					<label htmlFor="first-class">First class</label>
				</form>
			);
		case "food-meet":
			return (
				<form>
					<h2>Alimentación</h2>
					<h3>¿Cuántas veces comes carne a la semana?</h3>
					<input value="2" id="ninguna" onChange={handleChangeFoodMeet} type="radio" name="food-meet" checked={false} />
					<label htmlFor="ninguna">Ninguna</label>

					<input value="3" id="uno-dos" onChange={handleChangeFoodMeet} type="radio" name="food-meet" checked={false} />
					<label htmlFor="uno-dos">1-2 veces</label>

					<input value="4" id="mas-tres" onChange={handleChangeFoodMeet} type="radio" name="food-meet" checked={false} />
					<label htmlFor="mas-tres">+3 veces</label>
				</form>
			);
		case "food-meet-type":
			return (
				<form>
					<h2>Alimentación</h2>
					<h3>¿Qué tipo es la mas frecuente?</h3>
					<input value="2" id="cerdo" onChange={handleChangeFoodMeetType} type="radio" name="food-meet-type" checked={false} />
					<label htmlFor="cerdo">Cerdo</label>

					<input value="3" id="vaca" onChange={handleChangeFoodMeetType} type="radio" name="food-meet-type" checked={false} />
					<label htmlFor="vaca">Vaca</label>

					<input value="4" id="cordero" onChange={handleChangeFoodMeetType} type="radio" name="food-meet-type" checked={false} />
					<label htmlFor="cordero">Cordero</label>

					<input value="4" id="pollo" onChange={handleChangeFoodMeetType} type="radio" name="food-meet-type" checked={false} />
					<label htmlFor="pollo">Pollo</label>

					<input value="4" id="conejo" onChange={handleChangeFoodMeetType} type="radio" name="food-meet-type" checked={false} />
					<label htmlFor="conejo">Conejo</label>
				</form>
			);
		case "food-fish":
			return (
				<form>
					<h2>Alimentación</h2>
					<h3>¿Cuántas veces comes pescado a la semana?</h3>
					<input value="2" id="ninguna-fish" onChange={handleChangeFoodFish} type="radio" name="food-fish" checked={false} />
					<label htmlFor="ninguna-fish">Ninguna</label>

					<input value="3" id="uno-dos-fish" onChange={handleChangeFoodFish} type="radio" name="food-fish" checked={false} />
					<label htmlFor="uno-dos-fish">1-2 veces</label>

					<input value="4" id="mas-tres-fish" onChange={handleChangeFoodFish} type="radio" name="food-fish" checked={false} />
					<label htmlFor="mas-tres-fish">+3 veces</label>
				</form>
			);
		case "food-eggs":
			return (
				<form>
					<h2>Alimentación</h2>
					<h3>¿Cuántas veces comes huevos a la semana?</h3>
					<input value="2" id="ninguna-eggs" onChange={handleChangeFoodEggs} type="radio" name="food-eggs" checked={false} />
					<label htmlFor="ninguna-eggs">Ninguna</label>

					<input value="3" id="uno-dos-eggs" onChange={handleChangeFoodEggs} type="radio" name="food-eggs" checked={false} />
					<label htmlFor="uno-dos-eggs">1-2 veces</label>

					<input value="4" id="mas-tres-eggs" onChange={handleChangeFoodEggs} type="radio" name="food-eggs" checked={false} />
					<label htmlFor="mas-tres-eggs">+3 veces</label>
				</form>
			);
		case "food-dairy":
			return (
				<form>
					<h2>Alimentación</h2>
					<h3>¿Cuántas veces comes lácteos a la semana?</h3>
					<input value="2" id="ninguna-dairy" onChange={handleChangeFoodDairy} type="radio" name="food-dairy" checked={false} />
					<label htmlFor="ninguna-dairy">Ninguna</label>

					<input value="3" id="uno-dos-dairy" onChange={handleChangeFoodDairy} type="radio" name="food-dairy" checked={false} />
					<label htmlFor="uno-dos-dairy">1-2 veces</label>

					<input value="4" id="mas-tres-dairy" onChange={handleChangeFoodDairy} type="radio" name="food-dairy" checked={false} />
					<label htmlFor="mas-tres-dairy">+3 veces</label>
				</form>
			);
		case "home-house":
			return (
				<form>
					<h2>Hogar</h2>
					<h3>¿En qué tipo de casa vives?</h3>
					<input value="2" id="ninguna-dairy" onChange={handleChangeHomeHouse} type="radio" name="home-house" checked={false} />
					<label htmlFor="ninguna-dairy">Piso</label>

					<input value="3" id="uno-dos-dairy" onChange={handleChangeHomeHouse} type="radio" name="home-house" checked={false} />
					<label htmlFor="uno-dos-dairy">Vivienda unifamiliar</label>

					<input value="4" id="mas-tres-dairy" onChange={handleChangeHomeHouse} type="radio" name="home-house" checked={false} />
					<label htmlFor="mas-tres-dairy">Adosado</label>
				</form>
			);
		case "home-metres":
			return (
				<form>
					<h2>Hogar</h2>
					<h3>¿Cuántos m2 tiene tu vivienda?</h3>
					<input value="2" id="menos-cincuenta" onChange={handleChangeHomeMetres} type="radio" name="home-metres" checked={false} />
					<label htmlFor="menos-cincuenta">Menos de 50 m2</label>

					<input value="3" id="cincuenta-ochenta" onChange={handleChangeHomeMetres} type="radio" name="home-metres" checked={false} />
					<label htmlFor="cincuenta-ochenta">Entre 50 y 80 m2</label>

					<input value="4" id="ochenta-cientoveinte" onChange={handleChangeHomeMetres} type="radio" name="home-metres" checked={false} />
					<label htmlFor="ochenta-cientoveinte">Entre 80 y 120 m2</label>

					<input value="4" id="cientoveinte-trescientos" onChange={handleChangeHomeMetres} type="radio" name="home-metres" checked={false} />
					<label htmlFor="cientoveinte-trescientos">Entre 120 y 300 m2</label>

					<input value="4" id="mas-trescientos-m2" onChange={handleChangeHomeMetres} type="radio" name="home-metres" checked={false} />
					<label htmlFor="mas-trescientos-m2">Mas de 300 m2</label>
				</form>
			);
		case "home-people":
			return (
				<form>
					<h2>Hogar</h2>
					<h3>¿cuántas personas convivís en casa?</h3>
					<input value="2" id="uno-gente" onChange={handleChangeHomePeople} type="radio" name="home-people" checked={false} />
					<label htmlFor="uno-gente">1</label>

					<input value="3" id="dos-gente" onChange={handleChangeHomePeople} type="radio" name="home-people" checked={false} />
					<label htmlFor="dos-gente">2</label>

					<input value="4" id="tres-gente" onChange={handleChangeHomePeople} type="radio" name="home-people" checked={false} />
					<label htmlFor="tres-gente">3</label>

					<input value="4" id="cuatro-gente" onChange={handleChangeHomePeople} type="radio" name="home-people" checked={false} />
					<label htmlFor="cuatro-gente">4</label>

					<input value="4" id="cinco-mas-gente" onChange={handleChangeHomePeople} type="radio" name="home-people" checked={false} />
					<label htmlFor="cinco-mas-gente">5 o +</label>
				</form>
			);
		case "home-heat":
			return (
				<form>
					<h2>Hogar</h2>
					<h3>¿Qué tipo de energía empleas para calentar tu hogar?</h3>
					<input value="2" id="electrica-heat" onChange={handleChangeHomeHeat} type="radio" name="home-heat" checked={false} />
					<label htmlFor="electrica-heat">Eléctrica</label>

					<input value="3" id="gas-heat" onChange={handleChangeHomeHeat} type="radio" name="home-heat" checked={false} />
					<label htmlFor="gas-heat">Gas</label>

					<input value="4" id="gasoleo-heat" onChange={handleChangeHomeHeat} type="radio" name="home-heat" checked={false} />
					<label htmlFor="gasoleo-heat">Gasoleo</label>
				</form>
			);
		case "end-form":
			return (
				<div>
					<img />
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa laudantium unde quibusdam iure odio, repellat eos enim quidem soluta aliquid? Quis beatae voluptates provident culpa tempore necessitatibus laboriosam eum eaque.</p>
					<button>Aceptar</button>
					<button>Colaborar con más proyectos</button>
				</div>
			);
	}

	return (
		<div>Hola</div>
	)

}

export default InitialForm;
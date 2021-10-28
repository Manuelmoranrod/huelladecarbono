import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router";
import { useStep } from "react-hooks-helper";
import { Link } from "react-router-dom";

// Context
import userContext from "../../context/userContext";

// Iconos
import iconHouse from '../../assets/form-home.svg'
import iconFood from '../../assets/form-food-icon.svg'
import iconBici from '../../assets/form-transport-bici.svg'
import contenedores from '../../assets/contenedores.svg'

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
		async function fetchData() {
			try {
				const { data } = await axios.get('/updates/get-update-initial-form')
				setDataAllTables(data)
			} catch (err) {
				console.log(err);
			}
		}
		fetchData();
		setLoader(!loader)
	}, [])

	// State data back
	const [loader, setLoader] = useState(false)
	const [dataAllTables, setDataAllTables] = useState({
		numbersFood: {
			dairy: 0,
			eggs: 0,
			fish: 0,
			meetChiken: 0,
			meetCow: 0,
			meetLamb: 0,
			meetPig: 0,
		},
		numbersHome: {
			electricFlat: 0,
			electricHouse: 0,
			fuelFlat: 0,
			fuelHouse: 0,
			gasFlat: 0,
			gasHouse: 0,
		},
		numbersTransport: {
			averageBus: 0,
			averageDiesel: 0,
			averageElectric: 0,
			averageGas: 0,
			averageHybrid: 0,
			averageMetro: 0,
			averageMoto: 0,
			averagePetrol: 0,
			flyLongBusiness: 0,
			flyLongEconomy: 0,
			flyLongFirstClass: 0,
			flyMidBusiness: 0,
			flyMidEconomy: 0,
			flyMidFirstClass: 0,
			flySortBusiness: 0,
			flySortEconomy: 0,
			flySortFirstClass: 0,
		}
	})

	// // Transport
	// const [radioTransportVehicle, setRadioTransportVehicle] = useState(0)
	// const [radioTransportFuel, setRadioTransportFuel] = useState(0)
	const [radioTransportKm, setRadioTransportKm] = useState(0)
	const [radioTransportFlys, setRadioTransportFlys] = useState(0)
	// const [radioTransportFlysTime, setRadioTransportFlysTime] = useState(0)
	// const [radioTransportFlysClass, setRadioTransportFlysClass] = useState(0)

	// // Food
	// const [radioFoodMeet, setRadioFoodMeet] = useState(0)
	// const [radioFoodMeetType, setRadioFoodMeetType] = useState(0)
	// const [radioFoodFish, setRadioFoodFish] = useState(0)
	// const [radioFoodEggs, setRadioFoodEggs] = useState(0)
	// const [radioFoodDairy, setRadioFoodDairy] = useState(0)

	// // Home
	// const [radioHomeHouse, setRadioHomeHouse] = useState(0)
	// const [radioHomeMetres, setRadioHomeMetres] = useState(0)
	// const [radioHomePeople, setRadioHomePeople] = useState(0)
	// const [radioHomeHeat, setRadioHomeHeat] = useState(0)


	// ------------------ Transport ------------------ 

	const handleChangeTransporVehicle = ({ target }) => {
		defaultData["transport-vehicle"] = target.value
		// setRadioTransportVehicle(target.value)
		if (target.id !== 'coche') {
			navigation.go(2)
		} else {
			navigation.next()
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

	const handleChangeTransporFlys = ({ target }) => {

		defaultData["transport-flys"] = target.value
		setRadioTransportFlys(target.value)
	}

	const handleNextTransporFlys = () => {
		if (radioTransportFlys <= 0) {
			navigation.go(6)
		} else {
			navigation.next()
		}
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

	// ------------------ Food ------------------ 

	const handleChangeFoodMeet = ({ target }) => {

		defaultData["food-meet"] = target.value
		// setRadioFoodMeet(target.value)

		if (target.id === 'ninguna') {
			navigation.go(8)
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


		// Transport

		let totalTransport = 0;

		if (defaultData["transport-vehicle"] !== '') {

			if (defaultData["transport-vehicle"] === 'coche') {
				totalTransport += Number(defaultData["transport-fuel"]) * Number(defaultData["transport-km"])
			} else {
				totalTransport += Number(defaultData["transport-vehicle"]) * Number(defaultData["transport-km"])
			}

		}

		if (Number(defaultData["transport-flys"]) > 0) {

			if (defaultData["transport-flys-time"] === 'sort') {
				totalTransport += (Number(dataAllTables.numbersTransport.flySortBusiness)) / 52
			}

			if (defaultData["transport-flys-time"] === 'mid') {

				if (defaultData["transport-flys-class"] === 'economy') {
					totalTransport += (Number(dataAllTables.numbersTransport.flyMidEconomy)) / 52
				} else if (defaultData["transport-flys-class"] === 'business') {
					totalTransport += (Number(dataAllTables.numbersTransport.flyMidBusiness)) / 52
				} else if (defaultData["transport-flys-class"] === 'first-class') {
					totalTransport += (Number(dataAllTables.numbersTransport.flyMidFirstClass)) / 52
				}

			}

			if (defaultData["transport-flys-time"] === 'long') {

				if (defaultData["transport-flys-class"] === 'economy') {
					totalTransport += (Number(dataAllTables.numbersTransport.flyLongEconomy)) / 52
				} else if (defaultData["transport-flys-class"] === 'business') {
					totalTransport += (Number(dataAllTables.numbersTransport.flyLongBusiness)) / 52
				} else if (defaultData["transport-flys-class"] === 'first-class') {
					totalTransport += (Number(dataAllTables.numbersTransport.flyLongFirstClass)) / 52
				}

			}

		}

		// Transport


		// Food
		let totalFood = 0

		if (Number(defaultData["food-meet"]) > 0) {
			totalFood += Number(defaultData["food-meet"]) * Number(defaultData["food-meet-type"]);
		}

		if (Number(defaultData["food-fish"]) > 0) {
			totalFood += Number(defaultData["food-fish"]) * dataAllTables.numbersFood.fish;
		}

		if (Number(defaultData["food-eggs"]) > 0) {
			totalFood += Number(defaultData["food-eggs"]) * dataAllTables.numbersFood.eggs;
		}

		if (Number(defaultData["food-dairy"]) > 0) {
			totalFood += Number(defaultData["food-dairy"]) * dataAllTables.numbersFood.dairy;
		}

		// Food


		// House
		let totalHome = 0

		if (defaultData["home-house"] === 'piso') {
			if (defaultData["home-heat"] === "electrica") {
				totalHome = (((Number(defaultData["home-metres"]) * dataAllTables.numbersHome.electricFlat) / Number(defaultData["home-people"])) * 365) / 52
			} else if (defaultData["home-heat"] === "gas") {
				totalHome = (((Number(defaultData["home-metres"]) * dataAllTables.numbersHome.gasFlat) / Number(defaultData["home-people"])) * 365) / 52
			} else if (defaultData["home-heat"] === "gasoleo") {
				totalHome = (((Number(defaultData["home-metres"]) * dataAllTables.numbersHome.fuelFlat) / Number(defaultData["home-people"])) * 365) / 52
			}

		}

		if (defaultData["home-house"] === 'casa') {
			if (defaultData["home-heat"] === "electrica") {
				totalHome = (((Number(defaultData["home-metres"]) * dataAllTables.numbersHome.electricHouse) / Number(defaultData["home-people"])) * 365) / 52
			} else if (defaultData["home-heat"] === "gas") {
				totalHome = (((Number(defaultData["home-metres"]) * dataAllTables.numbersHome.gasHouse) / Number(defaultData["home-people"])) * 365) / 52
			} else if (defaultData["home-heat"] === "gasoleo") {
				totalHome = (((Number(defaultData["home-metres"]) * dataAllTables.numbersHome.fuelHouse) / Number(defaultData["home-people"])) * 365) / 52
			}

		}



		// House
		totalTransport += 33;
		totalFood += 33;
		totalHome += 33;


		axios.post('http://localhost:3001/info/post-info', {
			transport: totalTransport,
			food: totalFood,
			home: totalHome,
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
						<h3>Selecciona el método de transporte que usas con frecuencia</h3>
						<div className="inputs-block">
							<input value="coche" id="coche" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
							<label htmlFor="coche">Coche</label>

							<input value={dataAllTables.numbersTransport.averageBus} id="bus" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
							<label htmlFor="bus">Bus</label>

							<input value={dataAllTables.numbersTransport.averageMetro} id="tren-metro" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
							<label htmlFor="tren-metro">Tren / Metro</label>

							<input value={dataAllTables.numbersTransport.averageMoto} id="moto" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
							<label htmlFor="moto">Moto</label>

							<input value="0" id="bici" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
							<label htmlFor="bici">En bici</label>

							<input value="0" id="pie" onChange={handleChangeTransporVehicle} type="radio" name="transport-vehicle" />
							<label htmlFor="pie">A pie</label>
						</div>
					</form>
				);
			case "transport-fuel":
				return (
					<form className="form-block">
						<img src={iconBici} alt="logo-bicicleta" />
						<h2>Transporte</h2>
						<h3>¿Que tipo de coche/moto tienes?</h3>
						<div className="inputs-block">
							<input value={dataAllTables.numbersTransport.averageDiesel} id="diesel" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
							<label htmlFor="diesel">Diesel</label>

							<input value={dataAllTables.numbersTransport.averagePetrol} id="gasolina" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
							<label htmlFor="gasolina">Gasolina</label>

							<input value={dataAllTables.numbersTransport.averageHybrid} id="hibrido" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
							<label htmlFor="hibrido">Híbrido</label>

							<input value={dataAllTables.numbersTransport.averageElectric} id="electrico" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
							<label htmlFor="electrico">Eléctrico</label>

							<input value={dataAllTables.numbersTransport.averageGas} id="gas" onChange={handleChangeTransporFuel} type="radio" name="transport-fuel" checked={false} />
							<label htmlFor="gas">Gas</label>
						</div>
					</form>
				);
			case "transport-km":
				return (
					<form onSubmit={(e) => e.preventDefault()} className="form-block">
						<img src={iconBici} alt="logo-bicicleta" />
						<h2>Transporte</h2>
						<div className="inputs-text-block">
							<h3>¿Cuántos km recorres semanalmente?</h3>
							<input value={radioTransportKm} onChange={handleChangeTransporKm} type="number" name="transport-km" />
							<button type="button" onClick={navigation.next}>Siguiente</button>
						</div>
					</form>
				);
			case "transport-flys":
				return (
					<form onSubmit={(e) => e.preventDefault()} className="form-block">
						<img src={iconBici} alt="logo-bicicleta" />
						<h2>Transporte</h2>
						<h3>¿Cuántos vuelos has cogido en el último año?</h3>
						<div className="inputs-text-block">
							<input value={radioTransportFlys} onChange={handleChangeTransporFlys} type="number" name="transport-flys" />
							<button type="button" onClick={handleNextTransporFlys}>Siguiente</button>
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
							<input value="sort" id="menos-2" onChange={handleChangeTransporFlysTime} type="radio" name="transport-flys-time" checked={false} />
							<label htmlFor="menos-2"> {'<2h'} </label>

							<input value="mid" id="2-4" onChange={handleChangeTransporFlysTime} type="radio" name="transport-flys-time" checked={false} />
							<label htmlFor="2-4">Entre 2 y 4h</label>

							<input value="long" id="mas-4-h" onChange={handleChangeTransporFlysTime} type="radio" name="transport-flys-time" checked={false} />
							<label htmlFor="mas-4-h">+4h</label>
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
							<input value="economy" id="class-economy" onChange={handleChangeTransporFlysClass} type="radio" name="transport-flys-class" checked={false} />
							<label htmlFor="class-economy">Económia</label>

							<input value="business" id="class-business" onChange={handleChangeTransporFlysClass} type="radio" name="transport-flys-class" checked={false} />
							<label htmlFor="class-business">Business</label>

							<input value="first-class" id="first-class" onChange={handleChangeTransporFlysClass} type="radio" name="transport-flys-class" checked={false} />
							<label htmlFor="first-class">First class</label>
						</div>
					</form>
				);
			case "food-meet":
				return (
					<form className="form-block">
						<img src={iconFood} alt="logo-bicicleta" />
						<h2>Alimentación</h2>
						<h3>¿Cuántas veces comes carne a la semana?</h3>
						<div className="inputs-block">
							<input value="0" id="ninga-meet" onChange={handleChangeFoodMeet} type="radio" name="food-meet" checked={false} />
							<label htmlFor="ninga-meet">Ninguna</label>

							<input value="2" id="uno-dos-meet" onChange={handleChangeFoodMeet} type="radio" name="food-meet" checked={false} />
							<label htmlFor="uno-dos-meet">1-2 veces</label>

							<input value="5" id="mas-tres-meet" onChange={handleChangeFoodMeet} type="radio" name="food-meet" checked={false} />
							<label htmlFor="mas-tres-meet">+3 veces</label>
						</div>
					</form>
				);
			case "food-meet-type":
				return (
					<form className="form-block">
						<img src={iconFood} alt="logo-bicicleta" />
						<h2>Alimentación</h2>
						<h3>¿Qué tipo es la mas frecuente?</h3>
						<div className="inputs-block">
							<input value={dataAllTables.numbersFood.meetPig} id="cerdo" onChange={handleChangeFoodMeetType} type="radio" name="food-meet-type" checked={false} />
							<label htmlFor="cerdo">Cerdo</label>

							<input value={dataAllTables.numbersFood.meetCow} id="vaca" onChange={handleChangeFoodMeetType} type="radio" name="food-meet-type" checked={false} />
							<label htmlFor="vaca">Vaca</label>

							<input value={dataAllTables.numbersFood.meetLamb} id="cordero" onChange={handleChangeFoodMeetType} type="radio" name="food-meet-type" checked={false} />
							<label htmlFor="cordero">Cordero</label>

							<input value={dataAllTables.numbersFood.meetChiken} id="pollo" onChange={handleChangeFoodMeetType} type="radio" name="food-meet-type" checked={false} />
							<label htmlFor="pollo">Pollo</label>
						</div>
					</form>
				);
			case "food-fish":
				return (
					<form className="form-block">
						<img src={iconFood} alt="logo-bicicleta" />
						<h2>Alimentación</h2>
						<h3>¿Cuántas veces comes pescado a la semana?</h3>
						<div className="inputs-block">
							<input value="0" id="ninguna-fish" onChange={handleChangeFoodFish} type="radio" name="food-fish" checked={false} />
							<label htmlFor="ninguna-fish">Ninguna</label>

							<input value="2" id="uno-dos-fish" onChange={handleChangeFoodFish} type="radio" name="food-fish" checked={false} />
							<label htmlFor="uno-dos-fish">1-2 veces</label>

							<input value="5" id="mas-tres-fish" onChange={handleChangeFoodFish} type="radio" name="food-fish" checked={false} />
							<label htmlFor="mas-tres-fish">+3 veces</label>
						</div>
					</form>
				);
			case "food-eggs":
				return (
					<form className="form-block">
						<img src={iconFood} alt="logo-bicicleta" />
						<h2>Alimentación</h2>
						<h3>¿Cuántas veces comes huevos a la semana?</h3>
						<div className="inputs-block">
							<input value="0" id="ninguna-eggs" onChange={handleChangeFoodEggs} type="radio" name="food-eggs" checked={false} />
							<label htmlFor="ninguna-eggs">Ninguna</label>

							<input value="2" id="uno-dos-eggs" onChange={handleChangeFoodEggs} type="radio" name="food-eggs" checked={false} />
							<label htmlFor="uno-dos-eggs">1-2 veces</label>

							<input value="5" id="mas-tres-eggs" onChange={handleChangeFoodEggs} type="radio" name="food-eggs" checked={false} />
							<label htmlFor="mas-tres-eggs">+3 veces</label>
						</div>
					</form>
				);
			case "food-dairy":
				return (
					<form className="form-block">
						<img src={iconFood} alt="logo-bicicleta" />
						<h2>Alimentación</h2>
						<h3>¿Cuántas veces comes lácteos a la semana?</h3>
						<div className="inputs-block">
							<input value="0" id="ninguna-dairy" onChange={handleChangeFoodDairy} type="radio" name="food-dairy" checked={false} />
							<label htmlFor="ninguna-dairy">Ninguna</label>

							<input value="2" id="uno-dos-dairy" onChange={handleChangeFoodDairy} type="radio" name="food-dairy" checked={false} />
							<label htmlFor="uno-dos-dairy">1-2 veces</label>

							<input value="5" id="mas-tres-dairy" onChange={handleChangeFoodDairy} type="radio" name="food-dairy" checked={false} />
							<label htmlFor="mas-tres-dairy">+3 veces</label>
						</div>
					</form>
				);
			case "home-house":
				return (
					<form className="form-block">
						<img src={iconHouse} alt="logo-bicicleta" />
						<h2>Hogar</h2>
						<h3>¿En qué tipo de casa vives?</h3>
						<div className="inputs-block">
							<input value="piso" id="ninguna-dairy" onChange={handleChangeHomeHouse} type="radio" name="home-house" checked={false} />
							<label htmlFor="ninguna-dairy">Piso</label>

							<input value="casa" id="uno-dos-dairy" onChange={handleChangeHomeHouse} type="radio" name="home-house" checked={false} />
							<label htmlFor="uno-dos-dairy">Casa</label>
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
					<div className="final-form">
						<img src={contenedores} alt="ilustración contenedores" />
						<h2>¡Lo tenemos!</h2>
						<p>Gracias a tu progreso y al de personas comprometidas con el medioambiente como tú las emisiones de {'CO2'} de tu ciudad están reduciéndose.</p>
						<Link to="/profile"><button type="button" onClick={handleSubmitAllForm}>Ver mi resultado</button></Link>
					</div>
				);
		}

	} else {

		return (
			<h1>Cargando...</h1>
		)
	}

}

export default InitialForm;
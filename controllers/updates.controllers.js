const user_updates = require('../models/user_updates_mysql')
const jwt = require('jsonwebtoken')

// const conexionSQL = require('../utils/mysql')

const updatesControllers = {

    postUpdate: async (req, res) => {
        const { token, value, type } = req.body
        try {
            const user = jwt.verify(token, process.env.JWT)

            const newInfo = await user_updates.setDataInUserUpdate(type, value, user.id)
            res.status(200).send({ message: 'Ok' })
        } catch (err) {
            res.status(400).send({ message: err })
        }

    },
    // Segun el type las entradas del ultimo mes de un usuario
    getUpdateFromType: async (req, res) => {
        try {

            const newInfo = await user_updates.getDataInUserUpdateLastMonthFromType(userId, type)
        } catch (err) {
            res.status(400).send({ message: err })
        }
    },

    getDataFromTransport: async (req, res) => {
        try {
            const newInfo = await user_updates.getDataFromTransport()

            let objReturn = {}

            // Dato para los coches

            // Diesel
            let totalDiesel = 0
            let fuelDieselFilter = newInfo.filter(el => el.ACTIVITY === 'Cars (by market segment)' && el.UNIT === 'km' && el.FUEL === 'Diesel')
                .map(el => totalDiesel += el.KGCOE)

            objReturn.averageDiesel = totalDiesel / fuelDieselFilter.length

            // Petrol
            let totalPetrol = 0
            let fuelPetrolFilter = newInfo.filter(el => el.ACTIVITY === 'Cars (by market segment)' && el.UNIT === 'km' && el.FUEL === 'Petrol')
                .map(el => totalPetrol += el.KGCOE)

            objReturn.averagePetrol = totalPetrol / fuelPetrolFilter.length

            // hybrid
            let totalHybrid = 0
            let fuelHybridFilter = newInfo.filter(el => el.ACTIVITY === 'Cars (by market segment)' && el.UNIT === 'km' && el.FUEL === 'Plug-in Hybrid E')
                .map(el => totalHybrid += el.KGCOE)

            objReturn.averageHybrid = totalHybrid / fuelHybridFilter.length

            // gas
            let totalGas = 0
            let fuelGasFilter = newInfo.filter(el => el.ACTIVITY === 'Cars (by market segment)' && el.UNIT === 'km' && el.FUEL === 'Unknow')
                .map(el => totalGas += el.KGCOE)

            objReturn.averageGas = totalGas / fuelGasFilter.length

            // electric
            objReturn.averageElectric = 0
            //

            // Moto
            let fuelMotoFilter = newInfo.filter(el => el.ACTIVITY === 'Motorbike' && el.TYPE === 'Average' && el.UNIT === 'km');

            objReturn.averageMoto = fuelMotoFilter[0].KGCOE

            // Vuelos

            // Cortos
            let totalFlySort = 0
            let flySortFilter = newInfo.filter(el => el.ACTIVITY === 'Flights' && el.TYPE === 'Domestic, to/from UK');

            // objReturn.flySort = flySortFilter[0].KGCOE

            // Cortos por clase
            objReturn.flySortEconomy = flySortFilter[0].KGCOE
            objReturn.flySortBusiness = flySortFilter[0].KGCOE
            objReturn.flySortFirstClass = flySortFilter[0].KGCOE


            // Medio
            let flyMidFilter = newInfo.filter(el => el.ACTIVITY === 'Flights' && el.TYPE === 'Short-haul, to/from UK');

            // Medio por clase
            objReturn.flyMidEconomy = flyMidFilter[1].KGCOE
            objReturn.flyMidBusiness = flyMidFilter[0].KGCOE
            objReturn.flyMidFirstClass = flyMidFilter[2].KGCOE

            // 'Long-haul, to/from UK'
            let flyLongFilter = newInfo.filter(el => el.ACTIVITY === 'Flights' && el.TYPE === 'Long-haul, to/from UK');

            objReturn.flyLongEconomy = flyLongFilter[0].KGCOE
            objReturn.flyLongBusiness = flyLongFilter[1].KGCOE
            objReturn.flyLongFirstClass = flyLongFilter[2].KGCOE
            //

            // Bus
            let BusFilter = newInfo.filter(el => el.ACTIVITY === 'Bus');

            objReturn.averageBus = BusFilter[0].KGCOE

            // 'Metro'

            let metroFilter = newInfo.filter(el => el.ACTIVITY === 'Metro');

            objReturn.averageMetro = metroFilter[0].KGCOE

            res.status(200).json(objReturn)
        } catch (err) {
            res.status(400).send({ message: err })
        }
    },

    getDataFromFood: async (req, res) => {
        try {
            const newInfo = await user_updates.getDataFromFood()

            let objReturn = {}

            // Tipo de carne

            // Pig
            let meetPigFilter = newInfo.filter(el => el.TYPE_DESCRIPTION === 'MAIN MEAL' && el.TYPE === 'PIG');

            objReturn.meetPig = meetPigFilter[0].KGCOE

            // Cow
            let meetCowFilter = newInfo.filter(el => el.TYPE_DESCRIPTION === 'MAIN MEAL' && el.TYPE === 'COW MEAT');

            objReturn.meetCow = meetPigFilter[0].KGCOE

            // Cordero
            let meetLambFilter = newInfo.filter(el => el.TYPE_DESCRIPTION === 'MAIN MEAL' && el.TYPE === 'LAMB MEAT');

            objReturn.meetLamb = meetLambFilter[0].KGCOE


            // Chicken
            let meetChikenFilter = newInfo.filter(el => el.TYPE_DESCRIPTION === 'MAIN MEAL' && el.TYPE === 'CHICKEN');

            objReturn.meetChiken = meetChikenFilter[0].KGCOE
            //

            // Pescado
            let fishFilter = newInfo.filter(el => el.TYPE === 'FISH');

            objReturn.fish = fishFilter[0].KGCOE

            // Huevos
            let eggsFilter = newInfo.filter(el => el.TYPE === 'EGGS');

            objReturn.eggs = eggsFilter[0].KGCOE

            // Lacteos
            let totalDairy = 0
            let dairyFilter = newInfo.filter(el => el.TYPE_DESCRIPTION === 'DAIRY PRODUCTS')
                .map(el => totalDairy += el.KGCOE)

            objReturn.dairy = totalDairy / dairyFilter.length


            res.status(200).json(objReturn)
        } catch (err) {
            res.status(400).send({ message: err })
        }
    },

    getDataFromHome: async (req, res) => {
        try {
            const newInfo = await user_updates.getDataFromHome()

            let objReturn = {}

            // Calefacción

            // Electric
            // Casa
            let electricHouseFilter = newInfo.filter(el => el.HOME_TYPE === 'HOUSE' && el.TYPE === 'HEAT PUMP');

            objReturn.electricHouse = electricHouseFilter[0].KGCOE

            // Piso
            let electricFlatFilter = newInfo.filter(el => el.HOME_TYPE === 'FLAT' && el.TYPE === 'HEAT PUMP');

            objReturn.electricFlat = electricFlatFilter[0].KGCOE


            // Gas
            // Casa
            let gasHouseFilter = newInfo.filter(el => el.HOME_TYPE === 'HOUSE' && el.TYPE === 'GAS');

            objReturn.gasHouse = gasHouseFilter[0].KGCOE

            // Piso
            let gasFlatFilter = newInfo.filter(el => el.HOME_TYPE === 'FLAT' && el.TYPE === 'GAS');

            objReturn.gasFlat = gasFlatFilter[0].KGCOE


            // Fuel
            // Casa
            let fuelHouseFilter = newInfo.filter(el => el.HOME_TYPE === 'HOUSE' && el.TYPE === 'FUEL');

            objReturn.fuelHouse = fuelHouseFilter[0].KGCOE

            // Piso
            let fuelFlatFilter = newInfo.filter(el => el.HOME_TYPE === 'FLAT' && el.TYPE === 'FUEL');

            objReturn.fuelFlat = fuelHouseFilter[0].KGCOE


            res.status(200).json(objReturn)
        } catch (err) {
            res.status(400).send({ message: err })
        }
    },

    getDataFromInitialForm: async (req, res) => {
        try {
            const dataTransport = await user_updates.getDataFromTransport()
            const dataFood = await user_updates.getDataFromFood()
            const dataHome = await user_updates.getDataFromHome()

            let numbersTransport = {}
            let numbersFood = {}
            let numbersHome = {}

            // Dato para los cohes

            // Diesel
            let totalDiesel = 0
            let fuelDieselFilter = dataTransport.filter(el => el.ACTIVITY === 'Cars (by market segment)' && el.UNIT === 'km' && el.FUEL === 'Diesel')
                .map(el => totalDiesel += el.KGCOE)

            numbersTransport.averageDiesel = totalDiesel / fuelDieselFilter.length

            // Petrol
            let totalPetrol = 0
            let fuelPetrolFilter = dataTransport.filter(el => el.ACTIVITY === 'Cars (by market segment)' && el.UNIT === 'km' && el.FUEL === 'Petrol')
                .map(el => totalPetrol += el.KGCOE)

            numbersTransport.averagePetrol = totalPetrol / fuelPetrolFilter.length

            // hybrid
            let totalHybrid = 0
            let fuelHybridFilter = dataTransport.filter(el => el.ACTIVITY === 'Cars (by market segment)' && el.UNIT === 'km' && el.FUEL === 'Plug-in Hybrid E')
                .map(el => totalHybrid += el.KGCOE)

            numbersTransport.averageHybrid = totalHybrid / fuelHybridFilter.length

            // gas
            let totalGas = 0
            let fuelGasFilter = dataTransport.filter(el => el.ACTIVITY === 'Cars (by market segment)' && el.UNIT === 'km' && el.FUEL === 'Unknow')
                .map(el => totalGas += el.KGCOE)

            numbersTransport.averageGas = totalGas / fuelGasFilter.length

            // electric
            numbersTransport.averageElectric = 0
            //

            // Moto
            let fuelMotoFilter = dataTransport.filter(el => el.ACTIVITY === 'Motorbike' && el.TYPE === 'Average' && el.UNIT === 'km');

            numbersTransport.averageMoto = fuelMotoFilter[0].KGCOE

            // Vuelos

            // Cortos
            let totalFlySort = 0
            let flySortFilter = dataTransport.filter(el => el.ACTIVITY === 'Flights' && el.TYPE === 'Domestic, to/from UK');

            // objReturn.flySort = flySortFilter[0].KGCOE

            // Cortos por clase
            numbersTransport.flySortEconomy = flySortFilter[0].KGCOE
            numbersTransport.flySortBusiness = flySortFilter[0].KGCOE
            numbersTransport.flySortFirstClass = flySortFilter[0].KGCOE


            // Medio
            let flyMidFilter = dataTransport.filter(el => el.ACTIVITY === 'Flights' && el.TYPE === 'Short-haul, to/from UK');

            // Medio por clase
            numbersTransport.flyMidEconomy = flyMidFilter[1].KGCOE
            numbersTransport.flyMidBusiness = flyMidFilter[0].KGCOE
            numbersTransport.flyMidFirstClass = flyMidFilter[2].KGCOE

            // 'Long-haul, to/from UK'
            let flyLongFilter = dataTransport.filter(el => el.ACTIVITY === 'Flights' && el.TYPE === 'Long-haul, to/from UK');

            numbersTransport.flyLongEconomy = flyLongFilter[0].KGCOE
            numbersTransport.flyLongBusiness = flyLongFilter[1].KGCOE
            numbersTransport.flyLongFirstClass = flyLongFilter[2].KGCOE
            //

            // Bus
            let BusFilter = dataTransport.filter(el => el.ACTIVITY === 'Bus');

            numbersTransport.averageBus = BusFilter[0].KGCOE

            // 'Metro'

            let metroFilter = dataTransport.filter(el => el.ACTIVITY === 'Metro');

            numbersTransport.averageMetro = metroFilter[0].KGCOE

            // ---------------------------- Transporte


            // ---------------------------- Comida

            // Tipo de carne
            // Pig
            let meetPigFilter = dataFood.filter(el => el.TYPE_DESCRIPTION === 'MAIN MEAL' && el.TYPE === 'PIG');

            numbersFood.meetPig = meetPigFilter[0].KGCOE

            // Cow
            let meetCowFilter = dataFood.filter(el => el.TYPE_DESCRIPTION === 'MAIN MEAL' && el.TYPE === 'COW MEAT');

            numbersFood.meetCow = meetPigFilter[0].KGCOE

            // Cordero
            let meetLambFilter = dataFood.filter(el => el.TYPE_DESCRIPTION === 'MAIN MEAL' && el.TYPE === 'LAMB MEAT');

            numbersFood.meetLamb = meetLambFilter[0].KGCOE


            // Chicken
            let meetChikenFilter = dataFood.filter(el => el.TYPE_DESCRIPTION === 'MAIN MEAL' && el.TYPE === 'CHICKEN');

            numbersFood.meetChiken = meetChikenFilter[0].KGCOE
            //

            // Pescado
            let fishFilter = dataFood.filter(el => el.TYPE === 'FISH');

            numbersFood.fish = fishFilter[0].KGCOE

            // Huevos
            let eggsFilter = dataFood.filter(el => el.TYPE === 'EGGS');

            numbersFood.eggs = eggsFilter[0].KGCOE

            // Lacteos
            let totalDairy = 0
            let dairyFilter = dataFood.filter(el => el.TYPE_DESCRIPTION === 'DAIRY PRODUCTS')
                .map(el => totalDairy += el.KGCOE)

            numbersFood.dairy = totalDairy / dairyFilter.length

            // ---------------------------- Comida

            // ---------------------------- Hogar

            // Calefacción

            // Electric
            // Casa
            let electricHouseFilter = dataHome.filter(el => el.HOME_TYPE === 'HOUSE' && el.TYPE === 'HEAT PUMP');

            numbersHome.electricHouse = electricHouseFilter[0].KGCOE

            // Piso
            let electricFlatFilter = dataHome.filter(el => el.HOME_TYPE === 'FLAT' && el.TYPE === 'HEAT PUMP');

            numbersHome.electricFlat = electricFlatFilter[0].KGCOE


            // Gas
            // Casa
            let gasHouseFilter = dataHome.filter(el => el.HOME_TYPE === 'HOUSE' && el.TYPE === 'GAS');

            numbersHome.gasHouse = gasHouseFilter[0].KGCOE

            // Piso
            let gasFlatFilter = dataHome.filter(el => el.HOME_TYPE === 'FLAT' && el.TYPE === 'GAS');

            numbersHome.gasFlat = gasFlatFilter[0].KGCOE


            // Fuel
            // Casa
            let fuelHouseFilter = dataHome.filter(el => el.HOME_TYPE === 'HOUSE' && el.TYPE === 'FUEL');

            numbersHome.fuelHouse = fuelHouseFilter[0].KGCOE

            // Piso
            let fuelFlatFilter = dataHome.filter(el => el.HOME_TYPE === 'FLAT' && el.TYPE === 'FUEL');

            numbersHome.fuelFlat = fuelHouseFilter[0].KGCOE

            // ---------------------------- Hogar

            res.status(200).json({
                numbersTransport,
                numbersFood,
                numbersHome
            })
        } catch (err) {
            res.status(400).send({ message: err })
        }

    }

}

module.exports = updatesControllers
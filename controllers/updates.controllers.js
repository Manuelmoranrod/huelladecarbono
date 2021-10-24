const user_updates = require('../models/user_updates_mysql')
const jwt = require('jsonwebtoken')

// const conexionSQL = require('../utils/mysql')

const updatesControllers = {

    postUpdate: async (req, res) => {
        console.log('Este es para crear entradas en la tabla user updates');

        const newInfo = await user_updates.setDataInUserUpdate(type, value, idUser)
    },

    getUpdateFromType: async (req, res) => {
        console.log('Este es para conseguir segun el type las entradas del ultimo mes de un usuario');

        const newInfo = await user_updates.getDataInUserUpdateLastMonthFromType(userId, type)
    },
}

module.exports = updatesControllers
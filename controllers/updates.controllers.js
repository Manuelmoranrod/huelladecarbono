const user_updates = require('../models/user_updates_mysql')
const jwt = require('jsonwebtoken')

// const conexionSQL = require('../utils/mysql')

const updatesControllers = {

    postUpdate: async (req, res) => {
        const {token, value, type} = req.body
        console.log(req.body);

        const user = jwt.verify(token, process.env.JWT)

        const newInfo = await user_updates.setDataInUserUpdate(type, value, user.id)
    },

    getUpdateFromType: async (req, res) => {
        console.log('Este es para conseguir segun el type las entradas del ultimo mes de un usuario');

        const newInfo = await user_updates.getDataInUserUpdateLastMonthFromType(userId, type)
    },
}

module.exports = updatesControllers
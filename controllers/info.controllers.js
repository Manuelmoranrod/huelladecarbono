const user_info = require('../models/user_info_mysql')
const jwt = require('jsonwebtoken')

// const conexionSQL = require('../utils/mysql')

const infoControllers = {

    postInfo: async (req, res) => {
        console.log('Este es para crear entradas en la tabla user info');

        const newInfo = await user_info.setDataInUserInfo(transport, food, home, userId)
    },

    getInfoLastDate: async (req, res) => {
        const { token } = req.body

        console.log('Este es para conseguir la ultima entrada de info de un usuario');
        console.log(token);

        const user = jwt.verify(token, process.env.JWT)

        console.log(user);

        const [RowDataPacket] = await user_info.getUserInfoLastDate(user.id)

        const {INFO_ID, TRANSPORT, FOOD, HOME} = RowDataPacket

        const totalKg = TRANSPORT + FOOD + HOME;

        res.status(200).send({
            totalKg,
            food: FOOD,
            transport: TRANSPORT,
            home: HOME
        })
        console.log(RowDataPacket);
    },
}

module.exports = infoControllers
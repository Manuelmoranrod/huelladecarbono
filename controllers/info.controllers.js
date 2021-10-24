const user_info = require('../models/user_info_mysql')
const jwt = require('jsonwebtoken')

// const conexionSQL = require('../utils/mysql')

const infoControllers = {

    postInfo: async (req, res) => {
        console.log('Este es para crear entradas en la tabla USER_INFO');
        console.log(req.body);

        const user = jwt.verify(req.body.token, process.env.JWT)

        const newInfo = await user_info.setDataInUserInfo(transport, food, home, userId)
        console.log("posteado formulario", newInfo);
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
const user_info = require('../models/user_info_mysql')
const jwt = require('jsonwebtoken')

// const conexionSQL = require('../utils/mysql')

const infoControllers = {

    postInfo: async (req, res) => {
        const { transport, food, home, token } = req.body

        try {
            const user = jwt.verify(token, process.env.JWT)

            const newInfo = await user_info.setDataInUserInfo(transport, food, home, user.id)

            res.status(200).send({ message: 'Ok' })
        } catch (err) {
            res.status(400).send({ message: err })

        }
    },

    getInfoLastDate: async (req, res) => {
        const { token } = req.body
        try {
            const user = jwt.verify(token, process.env.JWT)

            const [RowDataPacket] = await user_info.getUserInfoLastDate(user.id)

            const { INFO_ID, TRANSPORT, FOOD, HOME } = RowDataPacket

            const totalKg = TRANSPORT + FOOD + HOME;

            res.status(200).send({
                totalKg,
                food: FOOD,
                transport: TRANSPORT,
                home: HOME,
                alias: user.username
            })
        } catch (err) {
            res.status(400).send({ message: err })

        }
    },
}

module.exports = infoControllers
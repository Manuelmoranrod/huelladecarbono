const ranking = require('../models/ranking_mysql')
const jwt = require('jsonwebtoken')

const rankingController = {

    getRanking: async (req, res) => {
        const { token } = req.body

        try {
            const user = jwt.verify(token, process.env.JWT)

            const newInfo = await ranking.getRankingData(user.id)

            const ordenado = newInfo.map((ele, index) => {
                return {
                    alias: ele.USER_NAME,
                    city: ele.CITY,
                    co2: (ele.FOOD + ele.HOME + ele.TRANSPORT),
                }
            }).sort((a, b) => {
                let x = a.co2;
                let y = b.co2;

                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }).map((el, index) => {
                const codosString = el.co2.toString()
                return {
                    position: (index + 1),
                    co2: codosString + ' kg',
                    city: el.city,
                    alias: el.alias,
                }
            })

            const [selectUser] = ordenado.filter(el => {
                if (el.alias === user.username) {
                    return el.position
                }
            })
            const positionUser = selectUser.position

            const localFromUser = ordenado.filter(el => el.city === user.city)

            res.status(200).send({
                positionUser ,
                allSpain: ordenado,
                localFromUser,
                userCity: user.city,
            })

        } catch (err) {
            res.status(400).send({ message: err })
        }
    },
}

module.exports = rankingController

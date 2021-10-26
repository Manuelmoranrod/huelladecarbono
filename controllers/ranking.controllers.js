const ranking = require('../models/ranking_mysql')
const jwt = require('jsonwebtoken')

const rankingController = {

    getRanking: async (req, res) => {
        const {token} = req.body

        try{
            const user = jwt.verify(token, process.env.JWT)
            //console.log("hace peticion pero no token");
            
            const newInfo = await ranking.getRankingData(user.id)

            const filtrado = newInfo.map( (ele, index ) => { 
                return {
                    position: index, 
                    alias: ele.USER_NAME,
                    city: ele.CITY,
                    co2: ele.FOOD+ele.HOME+ele.TRANSPORT,
                }
            })
            console.log("new Info",filtrado);

            res.status(200).send(filtrado)
        } catch(err){
            res.status(400).send({message: err})
        } 
    },
}

module.exports = rankingController

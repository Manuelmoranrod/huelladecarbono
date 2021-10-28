const conexionSQL = require('../utils/mysql')

const ranking = {
    getRankingData: async () => {
        return new Promise(function (resolve, reject) {
            try {
                conexionSQL.query('SELECT TRANSPORT,FOOD,HOME,CITY,USER_NAME,ID FROM USER_INFO LEFT JOIN USER ON USER_INFO.USER_ID = USER.ID;', function (err, results, fields) {
                    if (err) return reject(err);
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            } 
        })
    },
}


module.exports = ranking

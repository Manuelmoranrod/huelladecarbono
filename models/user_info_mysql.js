const conexionSQL = require('../utils/mysql')

const user_info = {

    setDataInUserInfo: async (transport, food, home, userId) => {
        return new Promise(function (resolve, reject) {
            try {
                const date = new Date()
                // console.log(date);
                conexionSQL.query('INSERT INTO USER_INFO (TRANSPORT, FOOD, HOME, USER_ID, DATE) VALUES (?,?,?,?,?)', [transport, food, home, userId, date], function (err, results, fields) {
                    if (err) return reject(err);
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            } finally {
                // conexionSQL.end
            }
        })
    },

    getUserInfoLastDate: async (userId) => {
        return new Promise(function (resolve, reject) {
            try {
                // conexionSQL.connect()
                const date = new Date()
                conexionSQL.query(`
                SELECT * FROM USER_INFO
                WHERE DATE IN
                (SELECT max(DATE) FROM USER_INFO WHERE USER_ID=?)
                `, [userId], function (err, results, fields) {
                    if (err) return reject(err);
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            } finally {
                // conexionSQL.end()
            }
        })
    },


    clearUserInfo: async () => {
        return new Promise(function (resolve, reject) {
            try {
                // conexionSQL.connect()
                const date = new Date()
                conexionSQL.query('DELETE FROM USER_INFO', function (err, results, fields) {
                    if (err) return reject(err);
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            } finally {
                // conexionSQL.end()
            }
        })
    },

}


module.exports = user_info
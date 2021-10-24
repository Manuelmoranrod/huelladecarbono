const conexionSQL = require('../utils/mysql')

const user_info = {

    setDataInUserInfo: async (transport, food, home, userId) => {
        return new Promise(function (resolve, reject) {
            try {
                // conexionSQL.connect()
                // const date = new Date('2021-10-27T03:24:00')
                const date = new Date()
                // console.log(date);
                conexionSQL.query('INSERT INTO USER_INFO (TRANSPORT, FOOD, HOME, USER_ID, DATE) VALUES (?,?,?,?,?)', [transport, food, home, userId, date], function (err, results, fields) {
                    if (err) return reject(err);
                    console.log(results);
                    return resolve(results)
                })
            } catch (err) {
                console.log(err);
            } finally {
                // conexionSQL.end()
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
                    console.log(results);
                    return resolve(results)
                })
            } catch (err) {
                console.log(err);
            } finally {
                // conexionSQL.end()
            }
        })
    },

    getAllInfoUser: async () => {
        return new Promise(function (resolve, reject) {
            try {
                // conexionSQL.connect()
                const date = new Date()
                conexionSQL.query('SELECT * FROM USER_INFO', function (err, results, fields) {
                    if (err) return reject(err);
                    console.log(results);
                    return resolve(results)
                })
            } catch (err) {
                console.log(err);
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
                    console.log(results);
                    return resolve(results)
                })
            } catch (err) {
                console.log(err);
            } finally {
                // conexionSQL.end()
            }
        })
    },

}


// user_info.setDataInUserInfo()
// user_info.getUserInfoLastDate()
// user_info.getAllInfoUser()
// user_info.clearUserInfo()


module.exports = user_info
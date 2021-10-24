const conexionSQL = require('../utils/mysql')

const user_updates = {

    setDataInUserUpdate: async (type, value, idUser) => {
        return new Promise(function (resolve, reject) {
            try {
                // conexionSQL.connect()
                // const date = new Date('2021-10-23T03:24:00')
                const date = new Date()
                // console.log(date);
                conexionSQL.query('INSERT INTO USER_UPDATES (TYPE, VALUE, USER_ID, DATE) VALUES (?,?,?,?)', [type, value, idUser, date], function (err, results, fields) {
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

    getDataInUserUpdateLastMonthFromType: async (userId, type) => {
        return new Promise(function (resolve, reject) {
            try {
                // conexionSQL.connect()
                // const date = new Date('2021-10-09T03:24:00')
                const date = new Date()
                // console.log(date);
                conexionSQL.query(`
                SELECT * FROM USER_UPDATES
                WHERE MONTH(DATE)=MONTH(CURRENT_DATE)
                AND USER_ID=? AND TYPE=?
                `, [userId, type], function (err, results, fields) {
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

    createUserUpdate: async (transport, food, home, userId) => {
        return new Promise(function (resolve, reject) {
            try {
                // conexionSQL.connect()
                // const date = new Date('2021-10-27T03:24:00')
                const date = new Date()
                // console.log(date);
                conexionSQL.query(`
                CREATE TABLE USER_UPDATES (
                    UPDATE_ID int NOT NULL AUTO_INCREMENT,
                    TYPE VARCHAR(10) NOT NULL,
                    VALUE int NOT NULL,
                    USER_ID int,
                    DATE DATETIME,
                    PRIMARY KEY (UPDATE_ID),
                    FOREIGN KEY (USER_ID) REFERENCES USER(ID)
                    )
                `, function (err, results, fields) {
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

// user_updates.createUserUpdate()
// user_updates.setDataInUserUpdate()
// user_updates.getDataInUserUpdateLastMonthFromType()


module.exports = user_updates
const conexionSQL = require('../utils/mysql')

const user_updates = {

    setDataInUserUpdate: async (type, value, idUser) => {
        return new Promise(function (resolve, reject) {
            try {
                const date = new Date()
                // console.log(date);
                conexionSQL.query('INSERT INTO USER_UPDATES (TYPE, VALUE, USER_ID, DATE) VALUES (?,?,?,?)', [type, value, idUser, date], function (err, results, fields) {
                    if (err) return reject(err);
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            }
        })
    },

    getDataInUserUpdateLastMonthFromType: async (userId, type) => {
        return new Promise(function (resolve, reject) {
            try {
                const date = new Date()
                // console.log(date);
                conexionSQL.query(`
                SELECT * FROM USER_UPDATES
                WHERE MONTH(DATE)=MONTH(CURRENT_DATE)
                AND USER_ID=? AND TYPE=?
                `, [userId, type], function (err, results, fields) {
                    if (err) return reject(err);
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            }
        })
    },

    createUserUpdate: async (transport, food, home, userId) => {
        return new Promise(function (resolve, reject) {
            try {
                const date = new Date()
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
                    
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            }
        })
    },

    getDataFromTransport: async () => {
        return new Promise(function (resolve, reject) {
            try {
                const date = new Date()
                
                conexionSQL.query('SELECT * FROM TRANSPORT', function (err, results, fields) {
                    if (err) return reject(err);
                    
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            }
        })
    },

    getDataFromFood: async () => {
        return new Promise(function (resolve, reject) {
            try {
                const date = new Date()
                
                conexionSQL.query('SELECT * FROM FOOD', function (err, results, fields) {
                    if (err) return reject(err);
                    
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            }
        })
    },

    getDataFromHome: async () => {
        return new Promise(function (resolve, reject) {
            try {
                const date = new Date()
               
                conexionSQL.query('SELECT * FROM HOME', function (err, results, fields) {
                    if (err) return reject(err);
                    
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            }
        })
    },

}


module.exports = user_updates
const conexionSQL = require('../utils/mysql')

const users = {

    // PERMITE REGISTRAR UN USUARIO EN LA BD
    createUser: async (username, password, email, city) => {
        return new Promise(function (resolve, reject) {
            try {
                // conexionSQL.connect()
                conexionSQL.query('INSERT INTO USER (USER_NAME, PASSWORD, MAIL, CITY) VALUES (?,?,?,?)', [username, password, email, city], function (err, results, fields) {
                    if (err) return reject(err);
                    // console.log('results model', results);
                    return resolve(results)
                })
            } catch (err) {
                console.log(err);
            } finally {
                // conexionSQL.end()
            }
        })
    },

    createUserGoogle: async (email, password) => {
        return new Promise(function (resolve, reject) {
            try {
                // conexionSQL.connect()
                conexionSQL.query('INSERT INTO USER (MAIL, PASSWORD) VALUES (?,?)', [email, password], function (err, results, fields) {
                    if (err) return reject(err);
                    console.log('results model', results);
                    return resolve(results)
                })
            } catch (err) {
                console.log(err);
            } finally {
                // conexionSQL.end()
            }
        })
    },

    getAllUsers: async () => {
        return new Promise(function (resolve, reject) {
            try {
                // conexionSQL.connect()
                conexionSQL.query('SELECT * FROM USER', function (err, results, fields) {
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

    getOnlyOneUser: async (email) => {
        return new Promise(function (resolve, reject) {
            try {
                // conexionSQL.connect()
                conexionSQL.query('SELECT * FROM USER WHERE MAIL=?', [email] , function (err, results, fields) {
                    if (err) return reject(err);
                    // console.log('results getonlyoneuser', results);
                    return resolve(results)
                })
            } catch (err) {
                console.log(err);
            } finally {
                // conexionSQL.end()
            }
        })
    },

    getOnlyAllUser: async () => {
        return new Promise(function (resolve, reject) {
            try {
                // conexionSQL.connect()
                conexionSQL.query('SELECT * FROM USER', function (err, results, fields) {
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

    clearUserTable: async () => {
        return new Promise(function (resolve, reject) {
            try {
                // conexionSQL.connect()
                conexionSQL.query('DELETE FROM USER', function (err, results, fields) {
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

    updateUserGoogle: async (id, username,city) => {
        return new Promise(function (resolve, reject) {
            try {
                // conexionSQL.connect()
                conexionSQL.query('UPDATE USER SET USER_NAME=?, CITY=? WHERE ID=?', [username, city, id] , function (err, results, fields) {
                    if (err) return reject(err);
                    console.log('results getonlyoneuser', results);
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


// users.createUser('usernametwo', 'password', 'email', 'city')
// users.getAllUsers()
// users.clearUserTable()


module.exports = users
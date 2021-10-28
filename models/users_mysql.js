const conexionSQL = require('../utils/mysql')

const users = {

    // PERMITE REGISTRAR UN USUARIO EN LA BD
    createUser: async (username, password, email, city) => {
        return new Promise(function (resolve, reject) {
            try {
                conexionSQL.query('INSERT INTO USER (USER_NAME, PASSWORD, MAIL, CITY) VALUES (?,?,?,?)', [username, password, email, city], function (err, results, fields) {
                    if (err) return reject(err);
                    
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            } 
        })
    },

    createUserGoogle: async (email, password) => {
        return new Promise(function (resolve, reject) {
            try {
                conexionSQL.query('INSERT INTO USER (MAIL, PASSWORD) VALUES (?,?)', [email, password], function (err, results, fields) {
                    if (err) return reject(err);
                    
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            } 
        })
    },

    getAllUsers: async () => {
        return new Promise(function (resolve, reject) {
            try {
                conexionSQL.query('SELECT * FROM USER', function (err, results, fields) {
                    if (err) return reject(err);
                    
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            }
        })
    },

    getOnlyOneUser: async (email) => {
        return new Promise(function (resolve, reject) {
            try {
                conexionSQL.query('SELECT * FROM USER WHERE MAIL=?', [email], function (err, results, fields) {
                    if (err) return reject(err);
                   
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            } 
        })
    },

    clearUserTable: async () => {
        return new Promise(function (resolve, reject) {
            try {
                conexionSQL.query('DELETE FROM USER', function (err, results, fields) {
                    if (err) return reject(err);
                    
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            }
        })
    },

    updateUserGoogle: async (id, username,city) => {
        return new Promise(function (resolve, reject) {
            try {
                conexionSQL.query('UPDATE USER SET USER_NAME=?, CITY=? WHERE ID=?', [username, city, id] , function (err, results, fields) {
                    if (err) return reject(err);
                    
                    return resolve(results)
                })
            } catch (err) {
                throw err;
            } 
        })
    },

    
}


module.exports = users
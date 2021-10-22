var mysql = require('mysql');

var conexionSQL = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    database : process.env.MYSQL_DB,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASS,
});



module.exports = conexionSQL


// conexion.connect(function(err) {
//     if (err) {
//         console.error('Error de conexion: ' + err.stack);
//         return;
//     }
//     console.log('Conectado con el identificador ' + conexion.threadId);
// });

// const inser_to_user = "INSERT INTO USER (USER_NAME, PASSWORD, MAIL, CITY) VALUES ('Ivan', 'password', 'correo@correo.com', 'Madrid')"
// const select_all_from_user = "SELECT * FROM USER"

// conexion.query("SELECT * FROM USER WHERE ID = ?", [1], (error, results) => {
//     if (error){
//         console.log(error);
//     } else {
//         console.log(results)
//     }
// });

// conexion.end();






/*
var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
});

conexion.connect(function (err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});

const inser_to_user = "INSERT INTO USER (USER_NAME, PASSWORD, MAIL, CITY) VALUES ('Ivan', 'password', 'correo@correo.com', 'Madrid')"
const select_all_from_user = "SELECT * FROM USER"

conexion.query("SELECT * FROM USER WHERE ID = ?", [1], (error, results) => {
    if (error){
        console.log(error);
    } else {
        console.log(results)
    }
});

conexion.end();
*/
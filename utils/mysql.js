var mysql = require('mysql');

var conexionSQL = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    database : process.env.MYSQL_DB,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASS,
});

module.exports = conexionSQL

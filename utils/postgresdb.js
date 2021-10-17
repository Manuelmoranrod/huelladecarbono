const pg = require('pg') // Pool se usa para la conexión, y permite tener varias conexiones

pg.defaults.ssl = true
const pool = new pg.Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {rejectUnauthorized: false}
    
});

module.exports = pool
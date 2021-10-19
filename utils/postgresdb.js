const { Pool } = require('pg') // Pool se usa para la conexión, y permite tener varias conexiones

// const client = new Client({
//     host: 'localhost',
//     user: 'postgres',
//     password: 'pass123456',
//     database: 'demosql'
// });

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'pass123456',
    database: 'demosql',
    port: 5432
});

module.exports = pool
// const createUser = async (name,surname,email,password) => {

//     let result;
//     try {
//         await client.connect();
//         result = await client.query(`
//         INSERT INTO users (name,surname,email,password)
//         VALUES ($1,$2,$3,$4)
//         `, [name,surname,email,password])
//         console.log(result)
//     } catch (err) {
//         console.log(err);
//     } finally {
//         await client.end();
//     }
// }

// createUser('ivan', 'apellido', 'email@asd.com', 'pass1234')
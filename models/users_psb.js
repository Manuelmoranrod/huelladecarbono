const pool = require('../utils/postgresdb');

const users = {

    // RECUPERA TODOS LOS USUARIOS DE LA DB
    getUsers: async () => {

        let client, result;
        try {
            client = await pool.connect();
            result = await client.query(`
            SELECT * FROM users
            `)
            // console.log(result);
            return result
        } catch (err) {
            console.log(err);
        } finally {
            client.release();
        }
    },

    getOnlyOneUser: async (email) => {

        let client, result;
        try {
            //Connect
            client = await pool.connect();

            const result =  await client.query(`SELECT * FROM users 
            WHERE email = $1
            `,[email])

        return result.rows[0] 


        } catch (err) {
            console.log(err);
        } finally {
            client.release();
        }
    },

    // PERMITE REGISTRAR UN USUARIO EN LA BD
    createUser: async (name,email,password) => {

        let client, result;
        try {
            client = await pool.connect();
            result = await client.query(`
            INSERT INTO users (name,email,password)
            VALUES ($1,$2,$3)
            `, [name,email,password])
            return result
        } catch (err) {
            console.log(err);
        } finally {
            client.release();
        }
    },
    getUserForEmail: async (email) => {
        let client, result;
        try {
            client = await pool.connect();
            result = await client.query(`
            SELECT from users
            WHERE email = $1;
            `, [email])
            // console.log(result);
            return result.rows
        } catch (err) {
            console.log(err);
        } finally {
            client.release();
        }
    }
}



module.exports = users
// users.getOnlyOneUser('jaen@gmail.com')

// users.createUser('Ricardo','Sardon','sardon@gmail.com','Barcelona'); 
// users.getUsers(); 


/* 
INSERT INTO users (name,surname,email,password)
VALUES ('Ivan','Quesada','quesada@gmail.com','jaen')  */


// CREATE TABLE users (
//     id_user serial NOT NULL PRIMARY KEY,
//     name varchar(25) NOT NULL,
//     surname varchar(25) NOT NULL,
//     email varchar(100) NOT NULL UNIQUE,
//     password varchar(20),
//     role varchar(10) DEFAULT 'user'
// );

// CREATE TABLE favorites (
//     id_favorites serial NOT NULL PRIMARY KEY,
//     title varchar(100) NOT NULL,
//     company varchar(30),
//     salary varchar(25),
//     img text,
//     jobtype varchar(30),
//     city varchar(25),
//     url text NOT NULL
// )

// CREATE TABLE users_fav (
//     id_user int,
//     id_favorites int,
//     id_mongo int,
//     FOREIGN KEY (id_user) REFERENCES users(id_user),
//     FOREIGN KEY (id_favorites) REFERENCES favorites(id_favorites)
// )

module.exports = users 
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const pool = require('../utils/postgresdb');



// Definimos una nueva Strategy de identificacion, definimos la autorización, en esta caso para local
passport.use(new localStrategy({ // Indicamos los parametros que enviara el usuario para identificarse
    usernameField: 'email',
    passwordField: 'password'

}, async (email, password, done) => { // Esta función de callback la usaremos para la validación, recibe los datos de usernameField, contraseña y Done
    // const user = await User.findOne({email: email}) // Buscamos el email en la BD
    // console.log('Hola');
    const searchUserDb = await pool.query(`
        SELECT id_user, email, password FROM users WHERE email=$1
    `,[email])

    if (searchUserDb.rowCount === 0) {
        done(null, false, { message: 'Incorrect email or password' })
    } else {

        const userDB = searchUserDb.rows[0]

        // Verificamos si la contraseña es correcta
        // const matchPassword = await bcrypt.compare(password, userDB.password)
        if(userDB.password === password) {
            return done(null, { id: userDB.id_user, email: userDB.email }) // Si al contraseña coincide se hace done con el user
        } else {
            return done(null, false, {message: 'Incorrect email or password'}) // Aviso si la contraseña no es correcta
        }

    }


}))

// La serialización de passport pasa todo el objeto del usuario en este caso, a un objeto particular que se identificara en este caso por la id del usuario, para poder acceder a esos datos guarados en el id debe realizarse el proceso de deserializacion
passport.serializeUser((user, done) => { // Con este metodo de passport podremos almacenar la session del usuario, configuración obligatoria de passport, recibe el parametro con el usuario y un callback done como en el anterior
    done(null, user.id) // En el momento que el usuario de identifique este metodo almacenara en al session el id del usuario
})

passport.deserializeUser( async (id, done) => {
    const searchUserDb = await pool.query(`
        SELECT id_user, email, password FROM users WHERE id_user=$1
    `,[id])

    if (searchUserDb.rowCount === 0) {
        done(null, false, { message: 'Error when selecting user on session deserialize' })

    } else {
        const userDB = searchUserDb.rows[0]
        done(null, { id: userDB.id_user, email: userDB.email })

    }
})
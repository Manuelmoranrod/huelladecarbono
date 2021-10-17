require('dotenv').config()
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const app = express()
const session = require('express-session')
const passport = require('passport')

// Permisos de Cors
app.use(cors())

// Importdación routes
const authRoutes = require('./routes/auth.routes')

// database
require("./utils/mongodb")

// morgan
app.use(morgan('dev'));

//Passport
app.use(session({ 
    secret: 'secretsession',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize()) // Iinicializamos passport . Metodo de passport con todo lo que se necesita configurar
app.use(passport.session()) // Indicamos que passport utilice session
require('./config/passport') // Requerimos la Strategy que utilizara passport, en esta caso solo local

// Para que el serivor pueda leer archivos json y recibir formularios
app.use(express.json()); // para convertir a JSON
app.use(express.urlencoded({ extended: true })) // Recibir formularios

// Routes
app.get('/', async (req,res) => {
    res.send('logueado')
});

app.use('/auth/', authRoutes)




const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`http://localhost:3001`)
})
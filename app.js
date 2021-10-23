require('dotenv').config()
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const app = express()

// Permisos de Cors
app.use(cors())

// Importdación routes
const authRoutes = require('./routes/auth.routes')



// morgan
app.use(morgan('dev'));


// Para que el serivor pueda leer archivos json y recibir formularios
app.use(express.json()); // para convertir a JSON
app.use(express.urlencoded({ extended: true })) // Recibir formularios


app.use('/auth/', authRoutes)


const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`http://localhost:3001`)
})
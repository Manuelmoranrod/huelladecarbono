require('dotenv').config()
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const app = express()

// Permisos de Cors
app.use(cors())

// Importación routes
const authRoutes = require('./routes/auth.routes')
const infoRoutes = require('./routes/info.routes')
const updatesRoutes = require('./routes/updates.routes')

// morgan
app.use(morgan('dev'));

// Para que el serivor pueda leer archivos json y recibir formularios
app.use(express.json()); // para convertir a JSON
app.use(express.urlencoded({ extended: true })) // Recibir formularios


// Authentication
app.use('/auth/', authRoutes)

// user_info
app.use('/info/', infoRoutes)

// user_updates
app.use('/updates/', updatesRoutes)


const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`http://localhost:3001`)
})
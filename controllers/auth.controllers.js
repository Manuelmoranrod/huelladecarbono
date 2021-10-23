// const users = require('../models/users_psb')
const users = require('../models/users_mysql')
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')

const conexionSQL = require('../utils/mysql')

const authControllers = {

    postRegister: async (req, res) => {
        const { username, password, email, city } = req.body

        const getUser = await users.getOnlyOneUser(email)

        if (getUser.length !== 0) {
            res.status(400).json({ message: 'Usuario ya registrado' })
        } else {
            const passwordHash = CryptoJS.HmacSHA256(password, process.env.SECRET_SHA256).toString()

            const newUser = await users.createUser(username, passwordHash, email, city)

            const [RowDataPacket] = await users.getOnlyOneUser(email)

            const userForToken = {
                id: RowDataPacket.ID,
                username: RowDataPacket.USER_NAME,
                city: RowDataPacket.CITY,
            }

            const token = jwt.sign(userForToken, process.env.JWT, {
                expiresIn: '7d'
            })

            res.status(200).send({
                token
            })
        }
    },

    postLogin: async (req, res) => {
        const { email, password } = req.body

        const user = await users.getOnlyOneUser(email)

        const passwordHash = CryptoJS.HmacSHA256(password, process.env.SECRET_SHA256).toString()

        if (user.length !== 0 && user[0].PASSWORD === passwordHash) {
            const RowDataPacket = user[0]

            const userForToken = {
                id: RowDataPacket.ID,
                username: RowDataPacket.USER_NAME,
                city: RowDataPacket.CITY,
            }

            const token = jwt.sign(userForToken, process.env.JWT, {
                expiresIn: '7d'
            })

            res.status(200).send({
                token
            })
        } else {
            res.status(401).send({
                error: 'Usuario o contraseña invalidos'
            })
        }
    },

    postLoginGoogle: async (req, res) => {
        const { password, email } = req.body

        let user = await users.getOnlyOneUser(email)

        if (user.length !== 0) {
            const RowDataPacket = user[0]

            const userForToken = {
                id: RowDataPacket.ID,
                username: RowDataPacket.USER_NAME,
                city: RowDataPacket.CITY,
            }

            const token = jwt.sign(userForToken, process.env.JWT, {
                expiresIn: '7d'
            })

            res.send({
                firstTime: false,
                token
            })
        } else {
            const passwordHash = CryptoJS.HmacSHA256(password, process.env.SECRET_SHA256).toString()

            const newUser = await users.createUserGoogle(email, passwordHash)

            user = await users.getOnlyOneUser(email)

            const RowDataPacket = user[0]

            const userForToken = {
                id: RowDataPacket.ID,
                username: RowDataPacket.USER_NAME,
                city: RowDataPacket.CITY,
            }

            const token = jwt.sign(userForToken, process.env.JWT, {
                expiresIn: '7d'
            })

            res.send({
                firstTime: true,
                token
            })

            res.status(200)
        }
    },
}

module.exports = authControllers
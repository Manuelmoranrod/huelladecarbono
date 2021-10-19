const users = require('../models/users_psb')
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')

const authControllers = {

    postRegister: async (req, res) => {
        const { name, surname, email, password } = req.body

        const searchUser = await users.getOnlyOneUser(email)

        if (searchUser) {
            res.status(400).json({ message: 'Usuario ya registrado' })
        } else {
            const passwordHash = CryptoJS.HmacSHA256(password, process.env.SECRET_SHA256).toString()

            const newUser = await users.createUser(name, surname, email, passwordHash)

            const user = await users.getOnlyOneUser(email)

            const userForToken = {
                id: user.id,
                email: user.email,
            }

            const token = jwt.sign(userForToken, process.env.JWT, {
                expiresIn: '7d'
            })

            res.send({
                name: user.name,
                token
            })
        }
    },

    postLogin: async (req, res) => {
        const { email, password } = req.body

        const user = await users.getOnlyOneUser(email)

        const passwordHash = CryptoJS.HmacSHA256(password, process.env.SECRET_SHA256).toString()


        if (user !== undefined && user.password === passwordHash) {
            const userForToken = {
                id: user.id,
                email: user.email,
            }

            const token = jwt.sign(userForToken, process.env.JWT, {
                expiresIn: '7d'
            })

            res.send({
                name: user.name,
                token
            })
        } else {
            res.status(401).send({
                error: 'Usuario o contraseña invalidos'
            })
        }
    },

    postLoginGoogle: async (req, res) => {
        const { email, password, name, surname } = req.body

        let user = await users.getOnlyOneUser(email)

        if (user !== undefined) {
            const userForToken = {
                id: user.id,
                email: user.email,
            }

            const token = jwt.sign(userForToken, process.env.JWT, {
                expiresIn: '7d'
            })

            res.send({
                name: user.name,
                token
            })
        } else {
            const passwordHash = CryptoJS.HmacSHA256(password, process.env.SECRET_SHA256).toString()

            const newUser = await users.createUser(name, surname, email, passwordHash)
            user = await users.getOnlyOneUser(email)

            const userForToken = {
                id: user.id,
                email: user.email,
            }

            const token = jwt.sign(userForToken, process.env.JWT, {
                expiresIn: '7d'
            })

            res.send({
                name: user.name,
                token
            })

            res.status(200)
        }
    },
}

// authControllers.test()
module.exports = authControllers
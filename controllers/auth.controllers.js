const users = require('../models/users_psb')
// const bcrypt = require('bcrypt')
const CryptoJS = require("crypto-js");
const crypto = require("crypto");
const SHA256 = require("crypto-js/sha256");
const jwt = require('jsonwebtoken')

const authControllers = {

    postRegister: async (req, res) => {
        const { name, surname, email, password } = req.body

        const searchUser = await users.getOnlyOneUser(email)

        if (searchUser) {
            res.json({ message: 'Usuario ya registrado' })
        } else {
            const passwordHash = CryptoJS.HmacSHA256(password, process.env.SECRET_SHA256).toString()

            const newUser = await users.createUser(name, surname, email, passwordHash)

            res.status(200)
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

            const token = jwt.sign(userForToken, process.env.JWT)

            res.send({
                name: user.name,
                token
            })
        } else {
            res.status(401).send({
                error: 'Usuario o contraseña invalidos'
            })
        }
    }
}

// authControllers.test()
module.exports = authControllers
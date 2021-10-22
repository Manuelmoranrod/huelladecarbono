// const users = require('../models/users_psb')
const users = require('../models/users_mysql')
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')

const conexionSQL = require('../utils/mysql')

const authControllers = {

    postRegister: async (req, res) => {
        const { username, password, email, city } = req.body

        console.log(req.body);

        // const searchUser = await users.createUser(username, password, email, city)
        // console.log('searchUser',searchUser);

        
        const getUser = await users.getOnlyOneUser(email)
        console.log('searchUser',getUser);
        console.log('******************');

        if (getUser !== []) {
            console.log('entra en error 400');
            res.status(400).send({ message: 'Usuario ya registrado' })
        } else {
            console.log('hola');
            const passwordHash = CryptoJS.HmacSHA256(password, process.env.SECRET_SHA256).toString()
            console.log(passwordHash);
            const newUser = await users.createUser(username, passwordHash, email, city)

            const user = await users.getOnlyOneUser(email)
            console.log(user);
            
            // const userForToken = {
            //     id: user.id,
            //     email: user.email,
            // }

            // const token = jwt.sign(userForToken, process.env.JWT, {
            //     expiresIn: '7d'
            // })

            // res.send({
            //     name: user.name,
            //     token
            // })
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
        const { password, email } = req.body

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

            const newUser = await users.createUserGoogle(username, passwordHash)
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

// authControllers.postRegister()
module.exports = authControllers



/*
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
*/
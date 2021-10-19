const router = require('express').Router()
const passport = require('passport')
const authControllers = require('../controllers/auth.controllers')

router.post('/register', authControllers.postRegister)

router.post('/login', authControllers.postLogin)

module.exports = router
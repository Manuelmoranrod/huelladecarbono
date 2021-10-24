const router = require('express').Router()
const authControllers = require('../controllers/auth.controllers')

router.post('/register', authControllers.postRegister)

router.post('/login', authControllers.postLogin)

router.post('/login-google', authControllers.postLoginGoogle)

//post initial form on DB
router.post('/', authControllers.postForm)


module.exports = router
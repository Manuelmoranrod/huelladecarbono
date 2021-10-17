const router = require('express').Router()
const passport = require('passport')


// Login
router.post('/login', passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: '/auth/login',
}))

// Logout
router.get('/logout', (req, res) => {
    req.logOut() // Metodo de passport que nos permite hacer desconexion de la session
    res.redirect('/')
})


module.exports = router
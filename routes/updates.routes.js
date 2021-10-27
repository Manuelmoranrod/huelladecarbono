const router = require('express').Router()
const updatesControllers = require('../controllers/updates.controllers')

router.post('/post-update', updatesControllers.postUpdate)

router.post('/get-update-type', updatesControllers.getUpdateFromType)

router.get('/get-update-transport', updatesControllers.getDataFromTransport)

router.get('/get-update-food', updatesControllers.getDataFromFood)

router.get('/get-update-home', updatesControllers.getDataFromHome)

router.get('/get-update-initial-form', updatesControllers.getDataFromInitialForm)

module.exports = router
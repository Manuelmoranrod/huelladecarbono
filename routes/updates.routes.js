const router = require('express').Router()
const updatesControllers = require('../controllers/updates.controllers')

router.post('/post-update', updatesControllers.postUpdate)

router.post('/get-update-type', updatesControllers.getUpdateFromType)

module.exports = router
const router = require('express').Router()
const infoControllers = require('../controllers/info.controllers')

router.post('/post-info', infoControllers.postInfo)

router.post('/get-info', infoControllers.getInfoLastDate)

module.exports = router
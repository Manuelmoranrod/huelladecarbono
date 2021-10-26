const router = require('express').Router()
const rankingControllers = require('../controllers/ranking.controllers')

router.post('/ranking-data', rankingControllers.getRanking)


module.exports = router
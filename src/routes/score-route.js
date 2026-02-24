const express = require('express')
const router = express.Router()
const {
  addScore,
  getScores
} = require('../controllers/score-controller')

router.post('/', addScore)
router.get('/', getScores)

module.exports = router
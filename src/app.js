const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/scores', require('./routes/score-route'))

module.exports = app
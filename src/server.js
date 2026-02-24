require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const scoreRoutes = require('./routes/score-route')
app.use('/api/scores', scoreRoutes)

app.listen(5000, '0.0.0.0', () => {
  console.log('Server running')
})
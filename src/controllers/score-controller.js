const db = require('../config/db')

exports.addScore = (req, res) => {
  const { username, revealedCell, time } = req.body
  let multiple = 1
  if (time<=40){
    multiple = 4
  }
  else if (40 < time <= 100){
    multiple = 3
  }
  else if (100 < time <= 180){
    multiple = 2
  }
  else {
    multiple = 1
  }
  const score = revealedCell*multiple

  const sql = 'INSERT INTO score_board (username, score) VALUES (?, ?)'

  db.query(sql, [username, score], (err, result) => {
    if (err) return res.status(500).json(err)
    res.json({ message: 'Score saved!' })
  })
}

exports.getScores = (req, res) => {
  const sql = 'SELECT * FROM score_board ORDER BY score DESC LIMIT 10'

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err)
    res.json(results)
  })
}
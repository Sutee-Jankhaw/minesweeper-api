const db = require('../config/db')

exports.addScore = (req, res) => {
  const { username, score } = req.body

  const sql = 'INSERT INTO score_board (username, score) VALUES (?, ?)'

  db.query(sql, [username, score], (err, result) => {
    if (err) return res.status(500).json(err)
    res.json({ message: 'Score saved!' })
  })
}

exports.getScores = (req, res) => {
  const sql = 'SELECT * FROM score_board ORDER BY score ASC LIMIT 10'

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err)
    res.json(results)
  })
}
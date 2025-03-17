const express = require('express')
const app = express()
const port = 3000

app.get('/movies', (req, res) => {
  res.send('Get Movies List')
})
app.post('/movie', (req, res) => {
  res.send('Create Movie')
})
app.put('/movie/:id', (req, res) => {
  res.send('Update Movie')
})
app.delete('/movie/:id', (req, res) => {
  res.send('Delete Movie')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
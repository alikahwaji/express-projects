const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('New server')
})

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>')
})

app.get('/users/:name', (req,res) => {
  let user = req.params.name
  res.send('<h1>' + user + '</h1>')
})

app.listen(3000, () => {
  console.log(`Server started on port 3000...`)
})

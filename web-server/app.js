const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

// middleware for body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// setting a static path

app.use(express.static(path.join(__dirname, 'public')))

app.get('/users', (req, res) => {
  let users = [{
    first_name: 'John',
    last_name: 'Don',
    age: 34,
    gender: 'male'
  }, {
    first_name: 'Leo',
    last_name: 'Messi',
    age: 30,
    gender: 'male'
  }, {
    first_name: 'Maya',
    last_name: 'James',
    age: 20,
    gender: 'female'
  }]
  res.json(users)
})

app.get('/download', (req, res) => {
  res.download(path.join(__dirname, '/downloads/CodeSchool_MasteringGithubCourse.pdf'))
})

app.post('/subscribe', (req, res) => {
  let name = req.body.name
  let email = req.body.email

  console.log(`${name} has subscribe with ${email}`)
})
app.listen(3000, () => {
  console.log(`Server started on port 3000...`)
})

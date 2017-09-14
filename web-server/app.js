const express = require('express')
const path = require('path')

const app = express()
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
app.listen(3000, () => {
  console.log(`Server started on port 3000...`)
})

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

//Setup port 

const port = 3000

// init app

const app = express()

const MongoClient = require ('mongodb').MongoClient
const url = 'mongodb://localhost:27017/todoapp'
// body parser middleware 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

// Setup views

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Connect to mongodb

MongoClient.connect(url, (err, database) => {
    console.log('Mongodb is connected...')
    if(err) throw err
})

app.get('/', (req, res, next) => {
    res.render('index')
})

app.listen(port, () => {
    console.log('Server running on port'+ port)
})

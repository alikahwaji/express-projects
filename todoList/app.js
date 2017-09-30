const express = require('express')
const path = require('path')
const bodyPaser = require('body-parser')

//Setup port 

const port = 3000

// init app

const app = express()

// body parser middleware 

app.user(bodyPaser.json())
app.user(bodyPaser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

// Setup views

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log('Server running on port'+ port)
})

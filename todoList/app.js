const express = require('express')
const path = require('path')
const bodyPaser = require('body-parser')

// init app

const app = express()

// body parser middleware 

app.user(bodyPaser.json())
app.user(bodyPaser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

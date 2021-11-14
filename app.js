const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const Userauthentication = require('./models/userauthentication')

mongoose.connect('mongodb://localhost/user-authentication')
const db = mongoose.connection
db.on('error', () => console.log('Mongoose error!'))
db.once('open', () => console.log('Mongoose connected!'))

app.use(bodyParser.urlencoded({ extended: true}))
app.use(methodOverride('_method'))

// route setting
app.get('/', (req, res) => {

})

//

app.listen(port, () => console.log(`App is running on http://localhost:${port}`))
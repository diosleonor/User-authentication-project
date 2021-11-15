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

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true}))

// route setting
app.get('/', (req, res) => {
	res.render('index')
})
app.post('/result', (req,res) =>{
	const loginFailed = 'Username或Password錯誤'
	Userauthentication.findOne({email:req.body.username, password:req.body.password})
	.then(data => data ? res.render('result', {username:data.firstName}): res.render('index',{loginFailed}))
	.catch(error => console.log(error))
})

app.listen(port, () => console.log(`App is running on http://localhost:${port}`))
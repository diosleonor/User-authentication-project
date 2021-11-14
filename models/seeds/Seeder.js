const Userauthentication = require('../userauthentication')
const users = require('../users.json').users

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/user-authentication')
const db = mongoose.connection
db.once('open', () => {
	console.log('Mongodb connected.')
	Userauthentication.create(users)
	console.log('Data creation done.')
})
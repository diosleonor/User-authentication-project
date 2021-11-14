const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const app = express()
const port = 3000

app.use(bodyParser, urlencoded({ extended: true}))
app.use(methodOverride('_method'))

// route setting


//

app.listen(port, () => console.log(`App is running on ${port}`))
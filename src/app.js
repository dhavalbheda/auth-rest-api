const express = require('express')
const morgan = require('morgan')

require('../db/config')
const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/users', require('./router/user'))

module.exports = app
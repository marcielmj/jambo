const cookieParser = require('cookie-parser')
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const routes = require('./routes')

mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, authSource: 'admin' })

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', routes)

module.exports = app

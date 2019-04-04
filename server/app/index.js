'use strict'

const cookieParser = require('cookie-parser')
const express = require('express')
const logger = require('morgan')
const path = require('path')

const cors = require('./middlewares/cors')
const routes = require('./routes')
const unauthorized = require('./middlewares/unauthorized')
const notFound = require('./middlewares/not-found')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors)
app.use('/', routes)
app.use(unauthorized)
app.use(notFound)

module.exports = app

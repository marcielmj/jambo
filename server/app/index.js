'use strict'

const cookieParser = require('cookie-parser')
const express = require('express')
const expressJwt = require('express-jwt')
const logger = require('morgan')
const path = require('path')

const auth = require('./auth')
const config = require('../config')
const routes = require('./routes')

const app = express()

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const jwt = expressJwt({ secret: config.jwt.secret })

app.use('/api', jwt, routes)
app.use('/auth', auth.routes)

app.use(auth.unauthorizedHandler)
app.use((req, res) => {
  return res.status(404)
})

module.exports = app

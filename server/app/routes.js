'use strict'

const express = require('express')
const routes = express.Router()

const controllers = require('./controllers')

routes.use('/posts', controllers.posts)

module.exports = routes

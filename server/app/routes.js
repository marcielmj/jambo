'use strict'

const express = require('express')
const expressJwt = require('express-jwt')

const api = express.Router()
const routes = express.Router()

const auth = require('./auth')
const posts = require('./controllers/posts')
const config = require('../config')

const jwt = expressJwt({ secret: config.jwt.secret })

api.use('/posts', posts)

routes.use('/auth', auth)
routes.use('/api', jwt, api)

module.exports = routes

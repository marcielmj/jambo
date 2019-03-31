'use strict'

const express = require('express')
const routes = express.Router()

const unauthorizedHandler = require('./unauthorized-handler')

routes.post('/login', (req, res) => {
  // TODO
})

routes.get('/logout', (req, res) => {
  // TODO
})

module.exports = { routes, unauthorizedHandler }

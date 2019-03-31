const express = require('express')
const jwt = require('jsonwebtoken')
const routes = express.Router()

const config = require('../../config')
const unauthorizedHandler = require('./unauthorized-handler')

const User = require('../models').User

routes.post('/login', (req, res) => {
  const { username, password } = req.body

  User.findOne({ username: username, password: password }).exec((_err, user) => {
    if (user) {
      const payload = {
        id: user._id,
        username: user.username
      }

      const token = jwt.sign(payload, config.jwt.secret)
      return res.json({ token: token })
    }

    res.status(401).json({
      message: 'Incorrect username or password.'
    })
  })
})

routes.post('/signup', (req, res) => {
  const user = new User({ ...req.body })

  user.save((err, user) => {
    if (err) {
      return res.status(400).json(err)
    }

    res.json({
      username: user.username,
      createdAt: user.createdAt
    })
  })
})

routes.get('/logout', (req, res) => {
  // TODO
})

module.exports = { routes, unauthorizedHandler }

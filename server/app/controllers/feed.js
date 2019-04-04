const express = require('express')
const routes = express.Router()

const Post = require('../models/post')

routes.get('/', (req, res) => {
  Post.find({})
    .sort('-createdAt')
    .populate('user', '_id username')
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json(err)
      }

      res.json(posts)
    })
})

module.exports = routes

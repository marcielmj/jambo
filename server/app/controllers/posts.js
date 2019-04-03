const express = require('express')
const routes = express.Router()

const Post = require('../models').Post

routes.get('/', (req, res) => {
  Post.find({})
    .sort('-createdAt')
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json(err)
      }

      res.json(posts)
    })
})

routes.post('/', (req, res) => {
  const post = new Post({ userId: req.user.id, ...req.body })

  post.save((err, post) => {
    if (err) {
      return res.status(400).json(err)
    }

    res.json(post)
  })
})

module.exports = routes

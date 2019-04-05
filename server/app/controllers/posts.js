const express = require('express')
const routes = express.Router()

const Post = require('../models/post')

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
  const user = {
    _id: req.user.id,
    username: req.user.username
  }

  const post = new Post({ user: user._id, ...req.body })

  post.save((err, post) => {
    if (err) {
      return res.status(400).json(err)
    }

    Post.findById(post._id)
      .populate('user', '_id username')
      .exec((err, post) => {
        if (err) {
          return res.status(400).json(err)
        }

      res.json(post)
    })
  })
})

module.exports = routes

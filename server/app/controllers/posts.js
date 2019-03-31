'use strict'

const express = require('express')
const router = express.Router()

const Post = require('../models').Post

router.get('/', (req, res) => {
  Post.find({})
    .sort('-createdAt')
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json(err)
      }

      res.json(posts)
    })
})

router.post('/', (req, res) => {
  const post = new Post({ ...req.body })

  post.save((err, post) => {
    if (err) {
      return res.status(400).json(err)
    }

    res.json(post)
  })
})

module.exports = router

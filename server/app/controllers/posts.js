const express = require('express')
const router = express.Router()

const Post = require('../models/post')

router.get('/', (request, response) => {
  const posts = Post.find({})
    .sort('-createdAt')
    .exec((error, data) => {
      if (error) {
        return response.status(400).json(error)
      }

      return response.json(data)
    })
})

router.post('/', (request, response) => {
  const post = new Post({ ...request.body })

  post.save((error, result) => {
    if (error) {
      return response.status(400).json(error)
    }

    return response.json(result)
  })
})

module.exports = router

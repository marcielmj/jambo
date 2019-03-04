const express = require('express')
const router = express.Router()

const Post = require('../models/post')

router.post('/', (request, response) => {
  const post = new Post({ ...request.body })

  console.log(post)

  post.save((error, success) => {
    if (error) {
      response.status(500).send(error)
    }

    response.json({ success })
  })
})

module.exports = router

const express = require('express')
const router = express.Router()

const posts = require('./controllers/posts')

router.use('/posts', posts)

module.exports = router

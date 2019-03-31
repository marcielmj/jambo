'use strict'

const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    maxlength: 140
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Post', postSchema)

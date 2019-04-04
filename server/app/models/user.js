'use strict'

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  nickname: {
    type: String,
    maxlength: 32
  },

  username: {
    type: String,
    required: true,
    unique: true,
    maxlength: 32
  },

  password: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', userSchema)

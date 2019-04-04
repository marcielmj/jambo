'use strict'

module.exports = {
  uri: process.env.DATABASE_URL || 'mongodb://localhost:27017/test',
  options: {
    useNewUrlParser: true,
    autoReconnect: true,
    authSource: 'admin',
    useCreateIndex: true
  }
}

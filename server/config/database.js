module.exports = {
  uri: process.env.DATABASE_URL || 'mongodb://localhost:27017/test',
  options: {
    useNewUrlParser: true,
    authSource: 'admin'
  }
}
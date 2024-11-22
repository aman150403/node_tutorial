const mongoose = require('mongoose')
require('dotenv').config()

// const url = process.env.MONGO_URL_LOCAL
const url = process.env.MONGO_URL 

// mongoose.connect(url)
mongoose.connect(url, {bufferCommands: false})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Connection error:', err));

const db = mongoose.connection;

db.on('connected', () => {
    console.log('db connected')
})

module.exports = db

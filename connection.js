const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/hotel'

mongoose.connect(url)

const db = mongoose.connection;

db.on('connected', () => {
    console.log('db connected')
})

module.exports = db

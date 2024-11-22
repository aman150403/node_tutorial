const express = require('express')
const app = express()

const db = require('./connection')
require('dotenv').config()
const PORT = process.env.PORT || 7500

// const logRequest = (req, res, next) => {

// }

const personRoutes = require('./Routes/personRoutes.js')
const menuItemRoutes = require('./Routes/menuItemRoutes.js')

app.use(express.json())

app.get('/', (req, res) => {
    res.end("Hello from Home page")
})

app.use('/person', personRoutes)
app.use('/menu', menuItemRoutes)


app.listen(PORT, () => console.log('server created !!'))
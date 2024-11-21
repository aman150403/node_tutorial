const express = require('express')
const PORT = 7500
const db = require('./connection')

const app = express()

const personRoutes = require('./Routes/personRoutes.js')
const menuItemRoutes = require('./Routes/menuItemRoutes.js')

app.use(express.json())

app.get('/', (req, res) => {
    res.end("Hello from Home page")
})

app.use('/person', personRoutes)
app.use('/menu', menuItemRoutes)


app.listen(PORT, () => console.log('server created !!'))
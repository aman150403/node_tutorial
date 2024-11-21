const express = require('express')
const app = express()

const menuItem = require('./../models/menuModel')
const router = require('./personRoutes')

const routes = express.Router

router.get('/', async (req, res) => {
    try{
        const items = await menuItem.find({})
        console.log("Items fetched")
        res.status(200).json(items)
    }catch(error){
        console.log("Error at server side : " , error)
        res.status(500).json({Error : "Error at server" })
    }
})

router.post('/', async (req, res) => {
    try{
        const item = req.body
        const newItem = new menuItem(item)

        const savedItem = await newItem.save()
        console.log("Item saved")
        res.status(200).json({Success : "Item added successfully"})
    }catch(error){
        console.log('Error at server side : ', error)
        res.status(500).json({Error : "Error at server side"})
    }
})

module.exports = router
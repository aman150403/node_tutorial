const express = require('express')
const app = express()

const Person = require('./../models/Person.js')

const router = express.Router()

router.post('/', async (req, res) => {
    try{   
        const data = req.body
        const newPerson = new Person(data)

        const savedPerson = await newPerson.save()
        console.log("Data saved successfully")
        res.status(200).json({ Success: savedPerson })
    }
    catch(error){
        console.log("Error in savong process", error)
        res.status(500).json({ Error : "Error at server side" })
    }        
});

router.get('/', async(req, res) => {
    try{
        const persons = await Person.find({})
        console.log("Data fetched")
        res.status(200).json(persons)
    }catch(error){
        console.log("Error at server side : ", error)
        res.status(500).json({Error : error })
    }
})

router.post('/:workType', async (req, res) => {
    try{
        const workType = req.body.params
        const work = await Person.find({ workType })
        res.status(200).json(work)
    }catch(error){
        console.log("Error in server side : ", error)
        res.status(500).json({ Error : "Error on server side"})
    }
})

router.put('/:id', async (req, res) => {
    try{
        const personId = req.params.id
        const updatedData = req.body

        const response = await Person.findByIdAndUpdate(personId, updatedData, {
            new: true,
            runValidators: true
        })

        if(!response){
            res.status(404).json({ Error : "Person not found"})
        } 
        console.log("data updated")
        res.status(200).status({ Error : "Data fetched" })

    }catch(error){
        console.log("Error in server side : ", error)
        res.status(500).json({ Error : "Error on server side"})
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const personId = req.params.id

        const deletedPerson = await Person.findByIdAndDelete(personId)
        if(!deletedPerson){
            res.status(404).json({ Error : "Person not found"})
        }
        res.status(200).json({ Success : "Person deleted "})
    }
    catch(error){
        console.log("Error in server side : ", error)
        res.status(500).json({ Error : "Error on server side"})
    }
})


// comment adding for testing purpose
module.exports = router
const express = require('express')
const router = express.Router()

const db = require('../db/animals')

router.get('/', (req,res) => {
  db.getAnimals()
    .then(animals => {
      res.json(animals)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong...' })
    })
})

router.get('/:id', (req,res) => {
  db.getAnimal(req.params.id)
    .then(animal => {
      res.json(animal)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong...' })
    })
})

router.post('/', (req,res) => {
  const animal = req.body
  db.createAnimal(animal)
    .then(id => {
      res.json({id: id})
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong...' })
    })
})

module.exports = router
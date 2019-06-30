const flatten = require('array-flatten')

const animalData = require('./data/animals.json')

const result = animalData.list_of_animals.map((animal, i) => {
    return animal.nouns.map(noun => {
      return {
        name: noun,
        animal_id: i + 1,
      }
  })
})

console.log(flatten(result))
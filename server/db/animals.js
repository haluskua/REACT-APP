const knex = require('knex')
const config = require('../../knexfile').development
const connection = knex(config)

function getAnimals(db = connection) {
  return db('animals').select().orderBy('name')
    .then(animals => {
        return Promise.all(
          animals.map(animal => {
            return db('nouns').where({animal_id: animal.id})
          })
        )
        .then(allNouns => {
          console.log(allNouns)
          return animals.map((animal, i) => {
            animal.nouns = allNouns[i]
            return animal
          })
        })
    })
}

// function getAnimals(db = connection) {
//   return db('animals').join('nouns', 'animals.id', 'nouns.animal_id').select('animals.id as id', 'nouns.id as noun_id', 'animals.name AS name', 'nouns.name AS noun_name').orderBy('animals.name')
//     .then(nouns => {
//         return Object.values(animals.reduce((obj, animal) => {

//           const existingAnimal = obj[animal.id]
//           if(existingAnimal) {
//             existingAnimal.nouns.push(animal.noun_name)
//           } else {
//             obj[animal.id] = { name: animal.name, nouns: [animal.noun_name] }
//           }

//           return obj
//         }, {}))
//     })
// }

function getAnimal(id, db = connection) {
  return db('animals').where({id: id}).select().first()
}

function createAnimal(animal, db = connection) {
  console.log('animal', animal)
  return db('animals').insert(animal)
    .then(newIds => newIds[0])
}

module.exports = {
  getAnimals,
  getAnimal,
  createAnimal,
}
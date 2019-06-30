const flatten = require('array-flatten')
const animalData = require('../data/animals.json')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nouns').del()
    .then(function () {
      // Inserts seed entries
      return knex('nouns').insert(
        flatten(animalData.list_of_animals.map((animal, i) => {
          return animal.nouns.map(noun => {
            return {
              name: noun,
              animal_id: i + 1,
            }
          })
        }))
      );
    });
};

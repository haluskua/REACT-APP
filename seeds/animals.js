const animalData = require('../data/animals.json')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert(
        animalData.list_of_animals.map((animal, i) => {
          return {
            id: i + 1,
            name: animal.animal
          }
        })
      );
    });
};

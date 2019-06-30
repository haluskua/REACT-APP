import request from 'superagent'

export function getAnimals() {
  return request.get('/api/v1/animals')
    .then(response => {
      console.log('Animals: ', response.body)
      return response.body
    })
}

export function createAnimal(animal) {
  return request.post('/api/v1/animals')
    .send(animal)
    .then(response => {
      console.log('New animal: ', response.body)
      return response.body
    })
}
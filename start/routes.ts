import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/pets', 'PetsController').apiOnly()
Route.resource('/owners', 'OwnersController').apiOnly()
Route.resource('/owners.pets', 'PetsController').apiOnly()

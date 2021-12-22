import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('restaurants', 'RestaurantsController').apiOnly()
})
  .prefix('/admin')
  .prefix('/v1')
  .prefix('/api')
  .as('api')

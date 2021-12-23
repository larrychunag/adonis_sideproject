import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('restaurants', 'RestaurantsController').apiOnly().as('restaurantsAdmin')
})
  .prefix('/admin')
  .prefix('/v1')
  .prefix('/api')
  .as('api')
  .namespace('App/Controllers/Http/Admin')

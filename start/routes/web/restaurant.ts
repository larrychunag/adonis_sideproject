import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('restaurants', 'RestaurantsController').apiOnly().only(['index', 'show'])
})
  .prefix('/v1')
  .prefix('/api')
  .namespace('App/Controllers/Http/Web')

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('restaurants.categories', 'CategoriesController').apiOnly().only(['index', 'show'])
})
  .prefix('/v1')
  .prefix('/api')
  .as('api')

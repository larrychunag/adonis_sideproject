import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('restaurants.categories', 'CategoriesController').apiOnly().as('categoriesAdmin')
})
  .prefix('/admin')
  .prefix('/v1')
  .prefix('/api')
  .as('api')
  .namespace('App/Controllers/Http/Admin')

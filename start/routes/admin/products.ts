import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('products', 'ProductsController').apiOnly().as('productsAdmin')
})
  .prefix('/admin')
  .prefix('/v1')
  .prefix('/api')
  .as('api')
  .namespace('App/Controllers/Http/Admin')

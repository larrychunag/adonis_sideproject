import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Restaurant from 'App/Models/Restaurant'

export default class RestaurantsController {
  public async index({}: HttpContextContract) {
    const restaurants = await Restaurant.all()
    return restaurants
  }

  public async store({ request }: HttpContextContract) {
    const input = request.body()
    if (input.name !== '') {
      const restaurant = await Restaurant.create(input)
      return restaurant
    }
  }

  public async show({ params }: HttpContextContract) {
    const restaurant = await Restaurant.findOrFail(params.id)
    if (restaurant) {
      return restaurant.$original
    }
  }

  public async update({ request, params }: HttpContextContract) {
    const input = request.body()
    const restaurant = await Restaurant.findOrFail(params.id)
    if (input.name !== '') {
      restaurant.merge(input)
      await restaurant.save()
    }
    return restaurant
  }

  public async destroy({ params }: HttpContextContract) {
    const restaurant = await Restaurant.findOrFail(params.id)
    await restaurant.delete()
    return 'success'
  }
}

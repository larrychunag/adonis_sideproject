import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RestaurantsController {
  public async index({}: HttpContextContract) {
    return 'get all Restaurants'
  }

  public async show({ params }: HttpContextContract) {
    return `get single Restaurant id = ${params.id}`
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RestaurantsController {
  public async index({}: HttpContextContract) {
    return 'get all Restaurants'
  }

  public async store({}: HttpContextContract) {
    return 'create Restaurant'
  }

  public async show({ params }: HttpContextContract) {
    return `get single Restaurant id = ${params.id}`
  }

  public async update({ params }: HttpContextContract) {
    return `update Restaurant id = ${params.id}`
  }

  public async destroy({ params }: HttpContextContract) {
    return `delete Restaurant id = ${params.id}`
  }
}

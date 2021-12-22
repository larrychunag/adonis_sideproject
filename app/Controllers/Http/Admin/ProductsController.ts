import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RestaurantsController {
  public async index({}: HttpContextContract) {
    return 'get all Products'
  }

  public async store({}: HttpContextContract) {
    return 'create Product'
  }

  public async show({ params }: HttpContextContract) {
    return `get single Product id = ${params.id}`
  }

  public async update({ params }: HttpContextContract) {
    return `update Product id = ${params.id}`
  }

  public async destroy({ params }: HttpContextContract) {
    return `delete Product id = ${params.id}`
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RestaurantsController {
  public async index({}: HttpContextContract) {
    return 'get all Categories'
  }

  public async store({}: HttpContextContract) {
    return 'create Category'
  }

  public async show({ params }: HttpContextContract) {
    return `get single Category id = ${params.id}`
  }

  public async update({ params }: HttpContextContract) {
    return `update Category id = ${params.id}`
  }

  public async destroy({ params }: HttpContextContract) {
    return `delete Category id = ${params.id}`
  }
}

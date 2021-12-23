import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriesController {
  public async index({}: HttpContextContract) {
    return 'get all Categories'
  }

  public async show({ params }: HttpContextContract) {
    return `get single Category id = ${params.id}`
  }
}

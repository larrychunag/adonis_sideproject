import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProductsController {
  public async index({}: HttpContextContract) {
    return 'get all Products'
  }

  public async show({ params }: HttpContextContract) {
    return `get single Product id = ${params.id}`
  }
}

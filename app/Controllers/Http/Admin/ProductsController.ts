import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ response, params }: HttpContextContract) {
    try {
      const products = await Product.query()
        .where('product_id', params.product_id)
        .orWhereNull('productId')
      return response.status(200).json(products)
    } catch (error) {
      response.status(500).json(error)
    }
  }

  public async store({ request, response, params }: HttpContextContract) {
    if (request.body().title.length === undefined || request.body().title === null) {
      return response.status(500).send({ error: 'name invalid' })
    }
    if (params.product_id === undefined || params.product_id === null) {
      return response.status(500).send({ error: 'product_id invalid' })
    }
    if (request.body().name.length) {
    }
    try {
      await Product.create({
        title: request.body().title,
        description: request.body().description,
        price: request.body().price,
        allergen: request.body().allergen,
      })
      return response.status(200).json('success')
    } catch (error) {
      response.status(500).json(error)
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const product = Product.findOrFail(params.id)
      return response.status(200).json(product)
    } catch (error) {
      response.status(500).json(error)
    }
  }

  public async update({ params }: HttpContextContract) {
    return `update Product id = ${params.id}`
  }

  public async destroy({ params }: HttpContextContract) {
    return `delete Product id = ${params.id}`
  }
}

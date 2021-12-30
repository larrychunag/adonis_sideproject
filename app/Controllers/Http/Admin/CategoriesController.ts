import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index({ response, params }: HttpContextContract) {
    try {
      const categories = await Category.query()
        .where('restaurant_id', params.restaurant_id)
        .orWhereNull('restaurantId')
      return response.status(200).json(categories)
    } catch (error) {
      response.status(500).json(error)
    }
  }

  public async store({ request, response, params }: HttpContextContract) {
    if (
      request.body().name === undefined ||
      request.body().name === null ||
      request.body().name === ''
    ) {
      return response.status(400).json({ error: 'invalid name' })
    }
    if (request.body().restaurant_id !== Number(params.restaurant_id)) {
      return response.status(400).json({ error: 'restaurant_id invalited' })
    }
    try {
      await Category.create({
        name: request.body().name,
        restaurantId: request.body().restaurant_id,
      })
      return response.status(200).json({ message: 'success' })
    } catch (error) {
      response.status(500).json(error)
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const category = Category.find(Number(params.id))
      return response.status(200).json(category)
    } catch (error) {
      response.status(500).json(error)
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    if (request.body.name === undefined || request.body.name === '' || request.body.name === null) {
      return response.status(400).json({ error: 'name invalited' })
    }
    try {
      const category = await Category.findOrFail(params.id)
      await category.merge({ name: request.body.name }).save()
      return response.status(200).json({ message: 'success' })
    } catch (error) {
      return response.status(500).json({ error: error })
    }
  }

  public async destroy({ params }: HttpContextContract) {
    return `delete Category id = ${params.id}`
  }
}

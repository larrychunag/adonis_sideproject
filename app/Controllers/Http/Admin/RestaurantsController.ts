import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Restaurant from 'App/Models/Restaurant'

export default class RestaurantsController {
  public async index({ response }: HttpContextContract) {
    try {
      await Restaurant.query()
        .where('status', 'public')
        .then((data) => {
          response.status(200).json(data)
        })
    } catch (error) {
      response.status(500).json({ error: error.message })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const input = request.body()
    console.log(input)
    if (input.name === '') {
      return response.status(400).json({ error: '名前が空欄です' })
    }
    if (input.status !== 'public') {
      return response.status(400).json({ error: 'statusがpublicではありません。' })
    }

    try {
      const restaurant = await Restaurant.create(input)
      response.status(200).json(restaurant)
    } catch (error) {
      response.status(500).json({ error: error.message })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    const { id } = params
    try {
      await Restaurant.query()
        .where('id', id)
        .where('status', 'public')
        .then((data) => {
          response.status(200).json(data)
        })
    } catch (error) {
      response.status(500).json({ error: error.message })
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    const { id } = params
    const input = request.body()
    if (input.name === '') {
      return response.status(400).json({ error: '名前が空欄です' })
    }
    if (input.status !== 'public') {
      return response.status(400).json({ error: 'statusがpublicではありません。' })
    }
    try {
      const restaurant = await Restaurant.findOrFail(id)
      restaurant.merge(input).save()
      response.status(200).json(restaurant)
    } catch (error) {
      response.status(500).json({ error: error.message })
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    const { id } = params
    try {
      const restaurant = await Restaurant.findOrFail(id)
      restaurant.merge({ status: 'deleted' }).save()
      response.status(200).json(restaurant)
    } catch (error) {
      response.status(500).json({ error: error.message })
    }
  }
}

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
      response.status(500)
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const input = request.body()
    try {
      if (input.name !== null && input.status === 'public') {
        await Restaurant.create(input).then((data) => {
          response.status(200).json(data)
        })
      } else {
        response.send('フォームに空欄があります。')
      }
    } catch (error) {
      response.status(500)
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
      response.status(200)
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    const { id } = params
    const input = request.body()
    try {
      await Restaurant.findOrFail(id).then((data) => {
        if (input.name !== null && input.status === 'public') {
          data.merge(input).save()
          response.status(200).json(data)
        } else {
          response.send('フォームに空欄があります。')
        }
      })
    } catch (error) {
      response.status(500)
    }
  }

  public async destroy({ request, response, params }: HttpContextContract) {
    const { id } = params
    const input = request.body()
    try {
      if (input.status === 'deleted') {
        await Restaurant.findOrFail(id).then((data) => {
          data.merge(input).save()
          response.status(200).json(data)
        })
      }
    } catch (error) {
      response.status(500)
    }
  }
}

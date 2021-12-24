import test from 'japa'
import { JSDOM } from 'jsdom'
import { RestaurantFactory } from 'database/factories/restaurant'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`
const request = supertest(BASE_URL)

test.group('Restaurant', () => {
  test('restaurant get all', async () => {
    await request.get('/api/v1/restaurants').expect(200)
  })

  test('restaurant get single restaurant', async () => {
    await request.get('/api/v1/restaurants/1').expect(200)
  })

  test('restaurant get categories list', async () => {
    await request.get('/api/v1/restaurants/1/categories').expect(200)
  })

  test('restaurant get single category', async () => {
    await request.get('/api/v1/restaurants/1/categories/1').expect(200)
  })
})

import test from 'japa'
import { RestaurantFactory } from 'database/factories/restaurant'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`
const request = supertest(BASE_URL)

test.group('Restaurant', () => {
  test('restaurant get all', async () => {
    await request.get('/api/v1/admin/restaurants').expect(200)
  })
  test('restaurant get single restaurant', async () => {
    await request.get('/api/v1/admin/restaurants/1').expect(200)
  })
  test('create restaurant', async () => {
    await request.post('/api/v1/admin/restaurants').expect(200)
  })
  test('update restaurant', async () => {
    await request.put('/api/v1/admin/restaurants/1').expect(200)
  })
  test('delete restaurant', async () => {
    await request.delete('/api/v1/admin/restaurants/1').expect(200)
  })
})

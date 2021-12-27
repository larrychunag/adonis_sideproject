import test from 'japa'
import supertest from 'supertest'
import { RestaurantFactory } from 'Database/factories/restaurant'
import { CategoryFactory } from 'Database/factories/category'
import Database from '@ioc:Adonis/Lucid/Database'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}/api/v1`

test.group('Category', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })

  test('Create Category Datas', async () => {
    await RestaurantFactory.with('categories', 3).create()
  })

  test('Check categories summary endpoint', async () => {
    await supertest(BASE_URL).get('/admin/restaurants/:restaurant_id/categories').expect(200)
  })

  test('Check categories create endpoint', async () => {
    await supertest(BASE_URL).post('/admin/restaurants/:restaurant_id/categories').expect(200)
  })

  test('Check categories show endpoint', async () => {
    await supertest(BASE_URL).get('/admin/restaurants/:restaurant_id/categories/:id').expect(200)
  })

  test('Check categories update endpoint', async () => {
    await supertest(BASE_URL).put('/admin/restaurants/:restaurant_id/categories/:id').expect(200)
  })

  test('Check categories deleted endpoint', async () => {
    await supertest(BASE_URL).delete('/admin/restaurants/:restaurant_id/categories/:id').expect(200)
  })
})

import test from 'japa'
import supertest from 'supertest'
import Database from '@ioc:Adonis/Lucid/Database'
import { RestaurantFactory } from 'Database/factories/restaurant'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}/api/v1`
const request = supertest(BASE_URL)

test.group('Products', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })

  test('Create Product Datas', async () => {
    await RestaurantFactory.with('categories', 2, (category) =>
      category.with('products', 5)
    ).create()
  })

  test('products get all', async () => {
    await request.get('/products').expect(200)
  })

  test('products get single product', async () => {
    await request.get('/products/:id').expect(200)
  })
})

import test from 'japa'
import supertest from 'supertest'
import { RestaurantFactory } from 'Database/factories/restaurant'
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
    await RestaurantFactory.merge([{ id: 1 }])
      .with('categories', 2, (category) => category.merge([{ id: 1 }, { id: 2 }]))
      .create()
  })

  test('Check categories summary endpoint', async () => {
    await supertest(BASE_URL).get('/admin/restaurants/1/categories').expect(200)
  })

  test('Check categories create endpoint', async (assert) => {
    await RestaurantFactory.merge([{ id: 1 }]).create()
    const res = await supertest(BASE_URL)
      .post('/admin/restaurants/1/categories')
      .send({ name: 'test', restaurant_id: 1 })
    assert.equal(res.status, 200)
    assert.equal(res.body.message, 'success')
  })

  test('Check categories create endpoint with invalid name', async (assert) => {
    await RestaurantFactory.merge([{ id: 1 }]).create()
    const res = await supertest(BASE_URL)
      .post('/admin/restaurants/1/categories')
      .send({ name: '', restaurant_id: 1 })
    assert.equal(res.status, 400)
    assert.equal(res.body.error, 'invalid name')
  })

  test('Check categories show endpoint', async () => {
    await supertest(BASE_URL).get('/admin/restaurants/1/categories/1').expect(200)
  })

  test('Check categories update endpoint', async (assert) => {
    await RestaurantFactory.merge([{ id: 1 }])
      .with('categories', 1, (category) => category.merge([{ id: 1, name: 'test' }]))
      .create()
    const res = await supertest(BASE_URL)
      .put('/admin/restaurants/1/categories/1')
      .send({ name: 'change' })
    assert.equal(res.status, 200)
    assert.equal(res.body.message, 'success')
  })

  test('Check categories deleted endpoint', async () => {
    await supertest(BASE_URL).delete('/admin/restaurants/1/categories/1').expect(200)
  })
})

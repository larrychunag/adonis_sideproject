import test from 'japa'
import { RestaurantFactory } from 'Database/factories/restaurant'
import supertest from 'supertest'
import Database from '@ioc:Adonis/Lucid/Database'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}/api/v1`
const request = supertest(BASE_URL)

test.group('Restaurant index', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })
  test('get all Restaurants routes', async () => {
    await request.get('/admin/restaurants').expect(200)
  })

  test('get all Restaurants', async (assert) => {
    await RestaurantFactory.merge([{ id: 1 }]).create()

    const res = await request.get('/admin/restaurants')
    assert.equal(res.status, 200)
  })
})

test.group('Restaurant show', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })
  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })
  test('get single Restaurant routes', async () => {
    await request.get('/admin/restaurants/1').expect(200)
  })

  test('get single Restaurant', async (assert) => {
    await RestaurantFactory.merge([{ id: 1 }]).create()
    const res = await request.get('/admin/restaurants/1')
    assert.equal(res.status, 200)
  })
})

test.group('Restaurant store', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })

  test('create validation name', async (assert) => {
    await RestaurantFactory.merge([{ id: 1 }]).create()
    const res = await request.post('/admin/restaurants').send({ name: '', status: 'public' })
    assert.equal(res.body.error, '名前が空欄です')
    assert.equal(res.status, 400)
  })

  test('create validation status', async (assert) => {
    await RestaurantFactory.merge([{ id: 1 }]).create()
    const res = await request.post('/admin/restaurants').send({ name: 'test', status: 'deleted' })
    assert.equal(res.body.error, 'statusがpublicではありません。')
    assert.equal(res.status, 400)
  })

  test('create Restaurant', async (assert) => {
    await RestaurantFactory.merge([{ id: 1 }]).create()
    const res = await request.post('/admin/restaurants').send({ name: 'test', status: 'public' })
    assert.equal(res.status, 200)
  })
})

test.group('Restaurant update', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })

  test('update validation name', async (assert) => {
    await RestaurantFactory.merge([{ id: 1 }]).create()
    const res = await request.put('/admin/restaurants/1').send({ name: '', status: 'public' })
    assert.equal(res.body.error, '名前が空欄です')
    assert.equal(res.status, 400)
  })
  test('update validation status', async (assert) => {
    const res = await request.put('/admin/restaurants/1').send({ name: 'test', status: 'deleted' })
    assert.equal(res.body.error, 'statusがpublicではありません。')
    assert.equal(res.status, 400)
  })
  test('update Restaurant', async (assert) => {
    const res = await request.put('/admin/restaurants/1').send({ name: 'test', status: 'public' })
    assert.equal(res.status, 500)
  })
})

test.group('Restaurant delete', async (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })

  test('make the restaurant private', async (assert) => {
    await RestaurantFactory.merge([{ id: 1 }]).create()
    const res = await request
      .delete('/admin/restaurants/1')
      .send({ name: 'test', status: 'deleted' })
    assert.equal(res.status, 200)
  })
})

import test from 'japa'
import { RestaurantFactory } from 'Database/factories/restaurant'
import supertest from 'supertest'
import Database from '@ioc:Adonis/Lucid/Database'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}/api/v1`
const request = supertest(BASE_URL)

test.group('Restaurant', (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction()
  })
  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction()
  })
  test('create restaurant data', async () => {
    await RestaurantFactory.create()
  })

  test('restaurant get all', async () => {
    await request.get('/restaurants').expect(200)
  })

  test('restaurant get single restaurant', async () => {
    await request.get('/restaurants/1').expect(200)
  })
})

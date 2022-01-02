import test from 'japa'
import supertest from 'supertest'
import { RestaurantFactory } from 'Database/factories/restaurant'
import { CategoryFactory } from 'Database/factories/category'
import Database from '@ioc:Adonis/Lucid/Database'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}/api/v1`
const request = supertest(BASE_URL)

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

  test('categories list', async () => {
    await request.get('/restaurants/1/categories').expect(200)
  })

  test('single category', async () => {
    await request.get('/restaurants/1/categories/1').expect(200)
  })
})

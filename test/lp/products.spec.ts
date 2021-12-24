import test from 'japa'
import { JSDOM } from 'jsdom'
import { ProductFactory } from 'database/factories/products'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`
const request = supertest(BASE_URL)

test.group('Products', () => {
  test('products get all', async () => {
    await request.get('/api/v1/products').expect(200)
  })

  test('products get single product', async () => {
    await request.get('/api/v1/products/:id').expect(200)
  })
})

// import test from 'japa'
// import supertest from 'supertest'
// import Database from '@ioc:Adonis/Lucid/Database'
// import { RestaurantFactory } from 'Database/factories/restaurant'

// const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}/api/v1`

// test.group('Product', (group) => {
//   group.beforeEach(async () => {
//     await Database.beginGlobalTransaction()
//   })

//   group.afterEach(async () => {
//     await Database.rollbackGlobalTransaction()
//   })

//   test('Create Product Datas', async () => {
//     await RestaurantFactory.merge([{ id: 2 }])
//       .with('categories', 2, (category) =>
//         category.merge([{ id: 3 }, { id: 4 }]).with('products', 5)
//       )
//       .create()
//   })
//   test('Check products summary endpoint', async () => {
//     await supertest(BASE_URL).get('/admin/products').expect(200)
//   })

//   test('Check products create endpoint', async () => {
//     await supertest(BASE_URL).post('/admin/products').expect(200)
//   })

//   test('Check products show endpoint', async () => {
//     await supertest(BASE_URL).get('/admin/products/:id').expect(200)
//   })

//   test('Check products update endpoint', async () => {
//     await supertest(BASE_URL).put('/admin/products/:id').expect(200)
//   })

//   test('Check products deleted endpoint', async () => {
//     await supertest(BASE_URL).delete('/admin/products/:id').expect(200)
//   })
// })

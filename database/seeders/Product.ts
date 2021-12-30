import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'
export default class ProductSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Product.createMany([
      {
        categoryId: 1,
        name: 'test1',
        title: 'product1',
        description: 'test',
        price: 1000,
        allergen: {},
      },
      {
        categoryId: 2,
        name: 'test2',
        title: 'product2',
        description: 'test',
        price: 1000,
        allergen: {},
      },
    ])
  }
}

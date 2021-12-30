import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class CategorySeeder extends BaseSeeder {
  public static developmentOnly = true
  public async run() {
    // Write your database queries inside the run method
    await Category.createMany([
      {
        restaurantId: 1,
        name: 'test1',
      },
      {
        restaurantId: 2,
        name: 'test1',
      },
    ])
  }
}

import Category from 'App/Models/Category'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { ProductFactory } from './product'

export const CategoryFactory = Factory.define(Category, ({ faker }) => {
  return {
    restaurantId: faker.datatype.number(),
    name: faker.commerce.department(),
  }
})
  .relation('products', () => ProductFactory)
  .build()

import Product from 'App/Models/Product'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const ProductFactory = Factory.define(Product, ({ faker }) => {
  return {
    categoryId: faker.datatype.number(),
    title: faker.commerce.productName(),
    description: faker.lorem.paragraph(),
    price: faker.datatype.number(),
    allergen: JSON,
  }
}).build()

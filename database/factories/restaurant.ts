import Restaurant from 'App/Models/Restaurant'
import { CategoryFactory } from './category'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const RestaurantFactory = Factory.define(Restaurant, ({ faker }) => {
  return {
    name: faker.company.companyName(),
  }
})
  .relation('categories', () => CategoryFactory)
  .build()

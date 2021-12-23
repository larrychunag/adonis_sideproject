import Restaurant from 'App/Models/Restaurant'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const RestaurantFactory = Factory.define(Restaurant, ({ faker }) => {
  return {
    name: faker.company.companyName(),
  }
}).build()

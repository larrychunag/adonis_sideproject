import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterRestaurants extends BaseSchema {
  protected tableName = 'alter_restaurants'

  public async up() {
    this.schema.alterTable('restaurants', (table) => {
      table.string('status')
    })
  }

  public async down() {
    this.schema.alterTable('restaurants', (table) => {
      table.dropColumn('status')
    })
  }
}

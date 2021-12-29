import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterProducts extends BaseSchema {
  protected tableName = 'alter_products'

  public async up() {
    this.schema.alterTable('products', (table) => {
      table.string('status')
    })
  }

  public async down() {
    this.schema.alterTable('products', (table) => {
      table.dropColumn('status')
    })
  }
}

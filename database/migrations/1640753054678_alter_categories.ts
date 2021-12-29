import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterCategories extends BaseSchema {
  protected tableName = 'alter_categories'

  public async up() {
    this.schema.alterTable('categories', (table) => {
      table.string('status')
    })
  }

  public async down() {
    this.schema.alterTable('categories', (table) => {
      table.dropColumn('status')
    })
  }
}

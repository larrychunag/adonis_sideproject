import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('status').notNullable()
      table
        .integer('category_id')
        .unsigned()
        .notNullable()
        .references('categories.id')
        .onDelete('CASCADE')
        .onUpdate('RESTRICT')
      table.string('title').notNullable()
      table.text('description').notNullable()
      table.integer('price').notNullable()
      table.json('allergen')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

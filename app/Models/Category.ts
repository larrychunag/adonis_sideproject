import { DateTime } from 'luxon'
import Product from './Product'
import { BaseModel, column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Restaurant from './Restaurant'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public restaurantId: number

  @column()
  public name: string

  @column()
  public status: 'public' | 'deleted'

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Product)
  public products: HasMany<typeof Product>

  @belongsTo(() => Restaurant)
  public restaurant: BelongsTo<typeof Restaurant>
}

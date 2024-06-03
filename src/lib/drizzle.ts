import {drizzle} from 'drizzle-orm/vercel-postgres'
import {sql} from '@vercel/postgres'
import {  integer, pgTable, varchar } from 'drizzle-orm/pg-core'
import { InferModel } from 'drizzle-orm'


export const cartTable = pgTable("shahmircart",{
    userid :varchar('userid', {length : 255}).notNull(),
    productid :varchar('productid', {length : 255}).notNull(),
    quantity : integer('quantity')

})

export type typeOfCart = InferModel<typeof cartTable>

export const db = drizzle(sql);
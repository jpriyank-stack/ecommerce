import { pgTable, serial, integer, timestamp, numeric } from 'drizzle-orm/pg-core';
import  users  from './user.js';
import { products } from './product.js';

export const cart = pgTable('cart', {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id).notNull(),
    productId: integer('product_id').references(() => products.id).notNull(),
    quantity: integer('quantity').default(1).notNull(),
    price: numeric('price', { precision: 10, scale: 2 }).notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at').defaultNow(),
});

import { pgTable, PgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    vulgo: text('vulgo'),
    email: text('emai').notNull().unique(),
    createdAt: timestamp('created_at').defaultNow(),
});


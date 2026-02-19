import { db }from "../db";
import { usersTable } from "../User/schema";
import { CreateUserDTO, UpdateUserDTO } from "../User/dtos";
import { eq } from "drizzle-orm";

export class UserRepository{

    async findAll(){
        return await db.select().from(usersTable);
    }

    async findByEmail(email: string){
        const result = await db.select().from(usersTable).where(eq(usersTable.email, email));
            return result[0];
    }

    async create(data: CreateUserDTO) {
        const result = await db.insert(usersTable).values(data).returning();
        return result[0];
    }

    async update(id: number, data: UpdateUserDTO){
        const result = await db
            .update(usersTable)
            .set(data)
            .where(eq(usersTable.id, id))
            .returning();

        return result[0];
    }

    async findById(id: number) {
        const result = await db.select().from(usersTable).where(eq(usersTable.id, id));
        return result[0];
    }
}
import { db }from "../db";
import { usersTable } from "../db/schema";
import { CreateUserDTO } from "../dtos";
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
}
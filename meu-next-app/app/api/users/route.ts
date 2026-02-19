import { NextResponse } from "next/server";
import { UserService } from "@/src/User/services/userService";
import { createUserSchema } from "@/src/User/dtos";
import { ZodError } from "zod";

const userService = new UserService();

export async function GET(){
    const users = await userService.getAllUsers();
    return NextResponse.json(users);
}

export async function POST(request: Request){
    try{
        const body = await request.json();

        const validatedData = createUserSchema.parse(body);

        const newUser = await userService.createUser(validatedData);


        return NextResponse.json(newUser, {status:201});
    }

    catch (error: any){

        if (error instanceof ZodError) {
            return NextResponse.json(
                {
                    message: "Erro de validação",
                    errors : error.issues.map(issue => ({
                        campo: issue.path[0],
                        mensagem: issue.message,
                    }))
                },
                { status: 400}
            );
        }
        return NextResponse.json(
            {error: error.message},
            {status:400}
        );
    }
}
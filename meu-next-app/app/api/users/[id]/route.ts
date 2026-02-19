import { NextResponse } from "next/server";
import { UserService } from "@/src/User/services/userService";
import { updateUserSchema } from "@/src/User/dtos";
import { ZodError } from "zod";

const userService = new UserService();

interface Props {
    params: Promise<{
        id: string
    }>
}

export async function PUT(request: Request, {params}: Props) {
    try{
        const {id} = await params;
        const userId = Number(id);

        if(isNaN(userId)){
            return NextResponse.json({ error: "ID inválido" }, { status: 400 });
        }

        const body = await request.json();
        const validatedData = updateUserSchema.parse(body);

        const updatedUser = await userService.updateUser(userId, validatedData);

        return NextResponse.json(updatedUser);
    } catch(error: any){
        if (error instanceof ZodError){
            return NextResponse.json({ errors: error.issues }, { status: 400 });
        }

        if (error.message === "Usuário não encontrado.") {
        return NextResponse.json({ error: error.message }, { status: 404 });
        }

        return NextResponse.json({ error: error.message }, { status: 400 });
    }
};
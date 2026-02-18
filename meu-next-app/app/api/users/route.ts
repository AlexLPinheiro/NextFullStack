import { NextResponse } from "next/server";
import { UserService } from "@/src/db/services/userService";

const userService = new UserService();

export async function GET(){
    const users = await userService.getAllUsers();
    return NextResponse.json(users);
}

export async function POST(request: Request){
    try{
        const body = await request.json();

        const newUser = await userService.createUser({
            name:body.name,
            email:body.email,
            vulgo:body.vulgo
        });

        return NextResponse.json(newUser, {status:201});
    }

    catch (error: any){
        return NextResponse.json(
            {error: error.message},
            {status:400}
        );
    }
}
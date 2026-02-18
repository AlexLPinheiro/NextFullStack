import { UserRepository } from "@/src/repositories/userRepository";
import { CreateUserDTO } from "@/src/dtos";


export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository;
    }

    async getAllUsers(){
        return await this.userRepository.findAll();
    }

    async createUser(request:CreateUserDTO){
        const userExists = await this.userRepository.findByEmail(request.email);

        if (userExists){
            throw new Error("Usuário já existe com este email!");
        }

        if(!request.name) {
            throw new Error("O nome é obrigatório !");
        }

        return await this.userRepository.create(request);
    }
}
import { UserRepository} from '@/src/User/userRepository';
import { CreateUserDTO, UpdateUserDTO } from "@/src/User/dtos";


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

    async updateUser(id: number , request: UpdateUserDTO){
        const existingUser = await this.userRepository.findById(id);

        if (!existingUser){
            throw new Error("Usuário não encontrado!");
        }

        if (request.email && request.email !== existingUser.email){
            const emailTaken = await this.userRepository.findByEmail(request.email);
            if(emailTaken){
                throw new Error("Este email já pertence a outra pessoa")
            }
        }

        return await this.userRepository.update(id, request);
    }
}
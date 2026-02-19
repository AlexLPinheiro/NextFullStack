// export interface CreateUserDTO {
//   name: string;
//   email: string;
//   vulgo?: string;
// }

// export interface UserResponseDTO {
//   id: number;
//   name: string;
//   email: string;
//   vulgo: string | null;
// }

import {z} from "zod";

export const createUserSchema = z.object({
  name: z.string().min(2, "O nome precisa ter no mínimo duas letras"),
  email: z.string().email("Formato de email inválido"),
  vulgo: z.string().optional(),
});

export const updateUserSchema = createUserSchema.partial();

export type CreateUserDTO = z.infer<typeof createUserSchema>;
export type UpdateUserDTO = z.infer<typeof updateUserSchema>;
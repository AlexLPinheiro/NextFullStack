export interface CreateUserDTO {
  name: string;
  email: string;
  vulgo?: string;
}

export interface UserResponseDTO {
  id: number;
  name: string;
  email: string;
  vulgo: string | null;
}
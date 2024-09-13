export interface RegisterData {
  nombreUsuario: string;
  email: string;
  passwordHash: string;
}

export interface RegisterResponse {
  id: number,
  nombreUsuario: string,
  email: string,
}

export interface LoginData {
  email: string;
  password: string;
}

export type LoginResponse = string;

import { LoginData, RegisterData } from "../../types/auth";
import { User } from "../../types/user";

export interface UserContextProps {
  user: User | null;
  register: (data: RegisterData) => Promise<void>;
  login: (data: LoginData) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

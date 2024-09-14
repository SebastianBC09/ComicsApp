import { useState } from 'react';
import { IonLoading, useIonRouter } from '@ionic/react';
import { AuthContext } from './AuthContext';
import api from '../api/axiosConfig';
import { User } from '../types/user';
import { AuthProviderProps } from '../types/Context';

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null >(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useIonRouter();

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    try {
      const response = await api.post('/auth/login', { email, password });
      const userData: User = {
        id: response.data.id,
        nombreUsuario: response.data.nombreUsuario,
        email: response.data.email,
        };
      setUser(userData);
      setLoading(false);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error en el login', error);
      setLoading(false);
    }
  }

  const logout = () => {
      setUser(null);
      router.push('/login');
    }

    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        <IonLoading isOpen={loading} message="Autenticado Usuario..." />
        {children}
      </AuthContext.Provider>
    )
}

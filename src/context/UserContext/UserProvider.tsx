import React, { useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import { login as loginService, register as registerService } from '../../services/AuthService';
import { User } from '../../types/user';
import { LoginData, RegisterData } from '../../types/auth';

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    const dummyUser: User = {
      id: 1,
      nombreUsuario: 'MiNombreDeUsuario',
      email: 'miUsuario@correo.com',
    };
    setUser(dummyUser);
  }, []);

  // Función para iniciar sesión
  const login = async (formData: LoginData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginService(formData);
      const loggedInUser = response.user as User; // Asegúrate de que el backend devuelve un objeto user
      setUser(loggedInUser);
      // Guardar el usuario en localStorage
      localStorage.setItem('user', JSON.stringify(loggedInUser));
    } catch (err) {
      setError('Error al iniciar sesión');
      console.error('Error en el inicio de sesión:', err);
    } finally {
      setLoading(false);
    }
  };

  // Función para registrar un nuevo usuario
  const register = async (formData: RegisterData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await registerService(formData);
      const registeredUser = response.user as User;
      setUser(registeredUser);
      localStorage.setItem('user', JSON.stringify(registeredUser));
    } catch (err) {
      setError('Error al registrar');
      console.error('Error en el registro:', err);
    } finally {
      setLoading(false);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Cargar el usuario desde localStorage al iniciar la aplicación
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout, register, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

import api from '../api/axiosConfig';

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (nombreUsuario: string, email: string, password: string) => {
  try {
    const response = await api.post('/auth/registro', { nombreUsuario, email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

import api from '../api/axiosConfig';
import { LoginData, RegisterData } from '../types/auth';

export const login = async (formData: LoginData) => {
  try {
    const response = await api.post('/auth/login', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (formData: RegisterData) => {
  try {
    const response = await api.post('/auth/registro', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

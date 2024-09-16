import { useState } from 'react';
import { login } from '../services/AuthService';
import { LoginData, LoginResponse } from '../types/auth';

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loginResponse, setLoginResponse] = useState<LoginResponse | null>(null);

  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await login(formData);
      setLoginResponse(response);
    } catch (error) {
      console.error("Error en el inicio de sesion!", error);
    } finally {
      setLoading(false);
    }
  }

    return {
      formData,
      handleChange,
      handleSubmit,
      loading,
      loginResponse
    }
}

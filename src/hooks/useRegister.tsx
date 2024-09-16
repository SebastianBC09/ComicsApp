import React, { useState } from 'react';
import { RegisterData, RegisterResponse } from '../types/auth';
import { register } from '../services/AuthService';

export const useRegister = () => {
  const [formData, setFormData] = useState<RegisterData>({
    nombreUsuario: '',
    email: '',
    passwordHash: ''
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [registerResponse, setRegisterResponse] = useState<RegisterResponse | null>(null);

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
      const response = await register(formData);
      setRegisterResponse(response);
    } catch (error) {
      console.error("Error registrando al usuario", error);
    } finally {
      setLoading(false);
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    registerResponse
  }
}

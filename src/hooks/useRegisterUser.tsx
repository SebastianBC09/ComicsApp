import React, { useState } from 'react';
import api from 'api/axiosConfig';
import { AxiosResponse } from 'axios';
import { RegisterData, RegisterResponse } from 'types/auth';

const useRegisterUser = () => {
  const [formData, setFormData] = useState<RegisterData>({
    nombreUsuario: '',
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
    try {
      const response: AxiosResponse<RegisterResponse> = await api.post('/auth/registro', formData);
    } catch (error) {
      console.error("Error registrando al usuario", error);
    }
  }

  return {
    formData,
    handleChange,
    handleSubmit
  }
}

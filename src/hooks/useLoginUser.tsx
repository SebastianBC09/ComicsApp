import { useState } from 'react';
import api from 'api/axiosConfig';
import { LoginData, LoginResponse } from 'types/auth';
import { AxiosResponse } from 'axios';

const useLoginUser = () => {
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
    try {
      const response:AxiosResponse<LoginResponse> = await api.post('/auth/login', formData);
    } catch (error) {
      console.error("Error en el inicio de sesion!", error);
      }
    }

    return {
      formData,
      handleChange,
      handleSubmit
    }
}

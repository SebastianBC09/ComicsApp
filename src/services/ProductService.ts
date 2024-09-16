import api from '../api/axiosConfig';

export const getProducts = async () => {
  try {
    const response = await api.get('/productos');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await api.get(`/productos/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

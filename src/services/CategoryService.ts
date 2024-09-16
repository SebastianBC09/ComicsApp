import api from '../api/axiosConfig';

// Obtener la lista de categorías
export const getCategories = async () => {
  try {
    const response = await api.get('/categorias');
    return response.data;
  } catch (error) {
    throw error;
  }
};

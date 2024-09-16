import api from '../api/axiosConfig';

export const getWishlist = async (userId: number) => {
  if (!userId) {
    throw new Error('El ID de usuario no está disponible');
  }

  try {
    const response = await api.get(`/deseados/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addProductToWishlist = async (userId: number, productoId: number) => {
  try {
    const response = await api.post('/deseados/agregar', { userId, productoId });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removeProductFromWishlist = async (userId: number, productoId: number) => {
  try {
    const response = await api.delete('/deseados/eliminar', { data: { userId, productoId } });
    return response.data;
  } catch (error) {
    throw error;
  }
};

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5263/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        console.log('No autorizado!');
      } else if (status === 404) {
        console.log('Recurso no encontrado!');
      } else {
        console.log('Error en el servidor!');
      }
    }
    return Promise.reject(error);
  }
);

export default api;

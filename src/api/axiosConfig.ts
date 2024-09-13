import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5263/api',
  headers: {
    'Content-Type': 'application/json',
  }
})

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.log('No autorizado!');
    }
    return Promise.reject(error);
  }
)
export default api;

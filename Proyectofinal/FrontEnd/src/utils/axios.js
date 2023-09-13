import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:9090/api',
    withCredentials: true
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Aquí puedes manejar y registrar los errores de manera centralizada
    console.error('Error de solicitud:', error);
    return Promise.reject(error);
  }
);

export default instance
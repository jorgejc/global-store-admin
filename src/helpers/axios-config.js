import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:5000/api/'
    // baseURL: 'http://ecommerce.appenlaweb.com:5000/api/'
     baseURL: 'https://global-store-bk.onrender.com/api/'
});


// Añadir el token JWT a todas las solicitudes
axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export {
    axiosInstance,
}

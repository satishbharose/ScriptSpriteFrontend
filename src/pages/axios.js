import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Set your base URL in your .env file
});

instance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('jwtToken'); // Get your JWT token from session storage or wherever you store it

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
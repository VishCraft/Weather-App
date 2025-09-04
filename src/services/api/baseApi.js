import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.openweathermap.org/data/2.5';

export const baseApi = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

baseApi.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => Promise.reject(error)
);

baseApi.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 404) {
      throw new Error('Location not found');
    } else if (error.response?.status === 401) {
      throw new Error('Invalid API key');
    } else if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout');
    }
    throw new Error(error.response?.data?.message || 'An error occurred');
  }
);

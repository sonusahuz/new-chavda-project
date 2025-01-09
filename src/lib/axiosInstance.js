// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API base URL
  timeout: 5000, // Optional timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptors if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Add authentication token or custom logic here
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors (e.g., token expiry, network issues)
    if (error.response?.status === 401) {
      console.error('Unauthorized, redirecting to login...');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

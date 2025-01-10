import axios from 'axios';
import Cookies from 'js-cookie';

// Create an Axios instance
const adminApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://localhost:3000', // Replace with your API base URL
  timeout: 5000, // Optional: set a timeout for requests
});

// Add an interceptor to include the token in the headers
adminApi.interceptors.request.use(
  (config) => {
    // Get the token from cookies
    const token = Cookies.get('adminToken'); // Replace 'token' with the name of your cookie

    // If token exists, set the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle the request error
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional, e.g., to handle errors globally)
adminApi.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can add error handling logic here
    if (error.response && error.response.status === 401) {
      throw new Error('Unauthorized, please log in again.');
    }
    return Promise.reject(error);
  }
);

export default adminApi;

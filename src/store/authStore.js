import { create } from 'zustand';
import Cookies from 'js-cookie';
import api from '../auth/axiosProvider';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Replace with your API URL

export const useAuthStore = create((set) => ({
  user: null,
  token: Cookies.get('token') || null,
  isLogin: !!Cookies.get('token'),
  loading: false,
  error: null,

  // Helper function to handle error
  handleError: (error) => {
    const errorMessage =
      error?.response?.data?.error || error.message || 'An error occurred';
    set({ error: errorMessage, loading: false });
    throw errorMessage;
  },

  // Register a new user
  register: async (name, email, password) => {
    try {
      set({ loading: true, error: null });
      const response = await api.post(`${API_BASE_URL}/api/user/register`, {
        name,
        email,
        password,
      });
      set({ loading: false });
      return response.data.message; // Return success message
    } catch (error) {
      useAuthStore.getState().handleError(error);
    }
  },

  // Log in an existing user
  login: async (email, password) => {
    try {
      set({ loading: true, error: null });
      const response = await api.post(`${API_BASE_URL}/api/user/login`, {
        email,
        password,
      });
      console.log(response);
      const { token, name } = response.data.details;

      // Save token in cookies
      Cookies.set('token', token, { expires: 7 }); // 7-day expiration
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      set({ user: { name }, token, isLogin: true, loading: false });
      return 'Login successful';
    } catch (error) {
      useAuthStore.getState().handleError(error);
    }
  },

  // Update user profile
  updateProfile: async (updatedData) => {
    try {
      set({ loading: true, error: null });
      const response = await api.put(
        `${API_BASE_URL}/api/user/updateProfile`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
          },
        }
      );

      set({ user: response.data.user, loading: false });
      return response.data.message;
    } catch (error) {
      useAuthStore.getState().handleError(error);
    }
  },

  // Forgot Password
  forgotPassword: async (email) => {
    try {
      set({ loading: true, error: null });
      const response = await api.post(
        `${API_BASE_URL}/api/user/forgot-password`,
        {
          email,
        }
      );
      set({ loading: false });
      return response.data.message;
    } catch (error) {
      useAuthStore.getState().handleError(error);
    }
  },

  // Reset Password
  resetPassword: async (token, newPassword) => {
    try {
      set({ loading: true, error: null });
      const response = await api.post(
        `${API_BASE_URL}/api/user/reset-password`,
        {
          token,
          newPassword,
        }
      );
      set({ loading: false });
      return response.data.message;
    } catch (error) {
      useAuthStore.getState().handleError(error);
    }
  },

  // Check Login Status
  checkLoginStatus: async () => {
    try {
      set({ loading: true, error: null });
      const token = Cookies.get('token');
      if (!token) {
        set({ user: null, isLogin: false, loading: false });
        return false;
      }

      // Optionally validate the token with an API call
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      set({ isLogin: true, loading: false });
      return true;
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      set({ user: null, token: null, isLogin: false, loading: false });
      Cookies.remove('token');
      return false;
    }
  },

  // Logout
  logout: async () => {
    try {
      set({ loading: true, error: null });
      const token = Cookies.get('token');
      if (token) {
        await api.get(`${API_BASE_URL}/api/user/logout`, null, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      Cookies.remove('token');
      set({ user: null, token: null, isLogin: false, loading: false });
    } catch (error) {
      useAuthStore.getState().handleError(error);
    }
  },
}));

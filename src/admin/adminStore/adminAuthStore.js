import { create } from 'zustand';
import Cookies from 'js-cookie';
import adminApi from './adminProvider';
import cookie from 'js-cookie';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Replace with your API URL
export const useAdminAuthStore = create((set) => ({
  admin: null,
  adminToken: Cookies.get('adminToken') || null,
  isLogin: !!Cookies.get('adminToken'),
  loading: false,
  error: null,

  // Helper function to handle error
  handleError: (error) => {
    const errorMessage =
      error?.response?.data?.error || error.message || 'An error occurred';
    set({ error: errorMessage, loading: false });
    throw errorMessage;
  },

  // Register a new admin
  register: async (name, email, password) => {
    try {
      set({ loading: true, error: null });
      const response = await adminApi.post(
        `${API_BASE_URL}/api/admin/register`,
        {
          name,
          email,
          password,
        }
      );
      set({ loading: false });
      return response.data.message; // Return success message
    } catch (error) {
      useAdminAuthStore.getState().handleError(error);
    }
  },

  // Log in an existing admin
  login: async (email, password) => {
    try {
      set({ loading: true, error: null });
      const response = await adminApi.post(`${API_BASE_URL}/api/admin/login`, {
        email,
        password,
      });
      const { token } = response.data.details;

      // Save adminToken in cookies
      Cookies.set('adminToken', token, { expires: 7 }); // 7-day expiration
      adminApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      set({ admin: { name }, token, isLogin: true, loading: false });
      return 'Login successful';
    } catch (error) {
      useAdminAuthStore.getState().handleError(error);
    }
  },

  // Update admin profile
  updateProfile: async (updatedData) => {
    try {
      set({ loading: true, error: null });
      const response = await adminApi.put(
        `${API_BASE_URL}/api/admin/update-profile`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('adminToken')}`,
          },
        }
      );

      set({ admin: response.data.admin, loading: false });
      return response.data.message;
    } catch (error) {
      useAdminAuthStore.getState().handleError(error);
    }
  },

  // Forgot Password
  forgotPassword: async (email) => {
    const token = cookie.get('adminToken');
    try {
      set({ loading: true, error: null });
      const response = await adminApi.post(
        `${API_BASE_URL}/api/admin/forgot-password`,
        {
          token,
          email,
        }
      );
      set({ loading: false });
      return response.data.message;
    } catch (error) {
      useAdminAuthStore.getState().handleError(error);
    }
  },

  // Reset Password
  resetPassword: async (token, newPassword) => {
    try {
      set({ loading: true, error: null });
      const response = await adminApi.post(
        `${API_BASE_URL}/api/admin/reset-password`,
        {
          token,
          newPassword,
        }
      );
      set({ loading: false });
      return response.data.message;
    } catch (error) {
      useAdminAuthStore.getState().handleError(error);
    }
  },

  // Check Login Status
  checkLoginStatus: async () => {
    try {
      set({ loading: true, error: null });
      const adminToken = Cookies.get('adminToken');
      if (!adminToken) {
        set({ admin: null, isLogin: false, loading: false });
        return false;
      }

      // Optionally validate the adminToken with an API call
      adminApi.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${adminToken}`;
      set({ isLogin: true, loading: false });
      return true;
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      set({ admin: null, adminToken: null, isLogin: false, loading: false });
      Cookies.remove('adminToken');
      return false;
    }
  },

  // Logout
  logout: async () => {
    try {
      set({ loading: true, error: null });
      const adminToken = Cookies.get('adminToken');
      if (adminToken) {
        await adminApi.get(`${API_BASE_URL}/api/admin/logout`, null, {
          headers: { Authorization: `Bearer ${adminToken}` },
        });
      }
      Cookies.remove('adminToken');
      set({ admin: null, adminToken: null, isLogin: false, loading: false });
    } catch (error) {
      useAdminAuthStore.getState().handleError(error);
    }
  },
}));

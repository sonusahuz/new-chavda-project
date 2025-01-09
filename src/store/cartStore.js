import { create } from 'zustand';
import api from '../auth/axiosProvider';
import { API_URL } from '../lib/utils';

const useCartStore = create((set, get) => ({
  cartItems: [],
  loading: false,
  error: null,

  fetchCart: async () => {
    try {
      set({ loading: true, error: null });
      const response = await api.get(`${API_URL}/api/cart`);
      set({ cartItems: response.data.cartItems, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || 'Error fetching cart',
        loading: false,
      });
    }
  },

  addToCart: async (productId, quantity = 1) => {
    try {
      set({ loading: true, error: null });
      await api.post(`${API_URL}/api/cart`, { productId, quantity });
      get().fetchCart(); // Refresh cart data
    } catch (error) {
      set({
        error: error.response?.data?.message || 'Error adding to cart',
        loading: false,
      });
    }
  },

  updateCartItem: async (productId, quantity) => {
    try {
      set({ loading: true, error: null });
      await api.put(`${API_URL}/api/cart/${productId}`, {
        productId,
        quantity,
      });
      get().fetchCart(); // Refresh cart data
    } catch (error) {
      set({
        error: error.response?.data?.message || 'Error updating cart',
        loading: false,
      });
    }
  },

  removeFromCart: async (productId) => {
    try {
      set({ loading: true, error: null });
      await api.delete(`${API_URL}/api/cart/${productId}`);
      get().fetchCart(); // Refresh cart data
    } catch (error) {
      set({
        error: error.response?.data?.message || 'Error removing from cart',
        loading: false,
      });
    }
  },

  clearCart: async () => {
    try {
      set({ loading: true, error: null });
      await api.delete(`${API_URL}/api/cart`);
      set({ cartItems: [], loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || 'Error clearing cart',
        loading: false,
      });
    }
  },
}));

export default useCartStore;

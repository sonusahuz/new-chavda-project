import { create } from 'zustand';
import api from '../auth/axiosProvider';
import { API_URL } from '../lib/utils';

const useWishlistStore = create((set) => ({
  wishlistItems: [],
  loading: false,
  error: null,

  // Fetch wishlist items for the user
  fetchWishlist: async () => {
    try {
      set({ loading: true, error: null });
      const response = await api.get(`${API_URL}/api/wishlist`);
      set({ wishlistItems: response.data.wishlistItems, loading: false });
    } catch (error) {
      set({
        error: error.response?.data?.message || 'Error fetching wishlist',
        loading: false,
      });
    }
  },

  // Add an item to the wishlist
  addToWishlist: async (productId) => {
    try {
      set({ loading: true, error: null });
      const response = await api.post(`${API_URL}/api/wishlist`, {
        productId,
      });
      set((state) => ({
        wishlistItems: [...state.wishlistItems, response.data.wishlistItem],
        loading: false,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message || 'Error adding to wishlist',
        loading: false,
      });
    }
  },

  // Remove an item from the wishlist
  removeFromWishlist: async (productId) => {
    try {
      set({ loading: true, error: null });
      await api.delete(`${API_URL}/api/wishlist/${productId}`);
      set((state) => ({
        wishlistItems: state.wishlistItems.filter(
          (item) => item.productId !== productId
        ),
        loading: false,
      }));
    } catch (error) {
      set({
        error: error.response?.data?.message || 'Error removing from wishlist',
        loading: false,
      });
    }
  },
}));

export default useWishlistStore;

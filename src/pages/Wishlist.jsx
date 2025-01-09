import { useEffect } from 'react';
import useWishlistStore from '../store/wishlistStore';

const Wishlist = () => {
  const { wishlistItems, loading, error, fetchWishlist, removeFromWishlist } =
    useWishlistStore();

  // Fetch wishlist items on component mount
  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  const handleRemove = (productId) => {
    removeFromWishlist(productId);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="text-center py-10 text-2xl"> No items in wishlist</div>
    );
  }

  return (
    <div className="bg-gray-50 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="mb-6 sm:mb-10 lg:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Your Wishlist
          </h2>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : wishlistItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {wishlistItems.map((item) => (
              <div
                key={item.productId}
                className="flex flex-col items-center border rounded-lg p-4"
              >
                <img
                  src={item.image || 'https://via.placeholder.com/150'}
                  alt={item.Name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.Product.Name}
                </h3>
                <p className="text-gray-500 mb-4">
                  ${item.Product.RegularPrice}
                </p>
                <button
                  className="mb-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                  onClick={() => handleRemove(item.productId)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

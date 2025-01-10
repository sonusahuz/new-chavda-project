import { useEffect } from 'react';
import useCartStore from '../store/cartStore';

const Cart = () => {
  const { cartItems, fetchCart, updateCartItem, removeFromCart, clearCart } =
    useCartStore();

  useEffect(() => {
    fetchCart(); // Load cart items when component mounts
  }, [fetchCart]);

  console.log(cartItems);

  const handleIncrease = (productId, currentQuantity) => {
    updateCartItem(productId, currentQuantity + 1);
  };

  const handleDecrease = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      updateCartItem(productId, currentQuantity - 1);
    }
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item) => total + item.Product.RegularPrice * item.quantity,
        0
      )
      .toFixed(2);
  };

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Your Cart
            </h2>
          </div>

          {cartItems.length > 0 ? (
            <>
              <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6">
                {cartItems.map((item) => (
                  <div
                    key={item.Product.productId}
                    className="flex flex-wrap gap-x-4 overflow-hidden rounded-lg border sm:gap-y-4 lg:gap-6"
                  >
                    <div className="group relative block h-48 w-32 overflow-hidden bg-gray-100 sm:h-56 sm:w-40">
                      <img
                        src={item.Product.image}
                        alt={item.Product.Name}
                        className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between py-4">
                      <div>
                        <h3 className="mb-1 text-lg font-bold text-gray-800 lg:text-xl">
                          {item.Product.Name}
                        </h3>
                        <span className="block text-gray-500">
                          Price: ${item.Product.RegularPrice}
                        </span>
                        <span className="block text-gray-500">In stock</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <button
                          className="text-indigo-500 hover:text-indigo-600"
                          onClick={() => handleRemove(item.productId)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="flex w-full justify-between border-t p-4 sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-2 bg-gray-200 hover:bg-gray-300 rounded"
                          onClick={() =>
                            handleDecrease(item.productId, item.quantity)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="p-2 bg-gray-200 hover:bg-gray-300 rounded"
                          onClick={() =>
                            handleIncrease(item.productId, item.quantity)
                          }
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold">
                        $
                        {(item.Product.RegularPrice * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-end gap-4">
                <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
                  <div className="flex justify-between gap-4 text-gray-500">
                    <span>Total</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </div>

                <button
                  className="rounded-lg bg-red-500 px-8 py-3 text-white hover:bg-red-600"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>

                <button className="rounded-lg bg-indigo-500 px-8 py-3 text-white hover:bg-indigo-600">
                  Checkout
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

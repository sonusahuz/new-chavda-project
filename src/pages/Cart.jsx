import { useEffect, useState } from 'react';
import { Button, Card, Input } from '@material-tailwind/react';
import { MinusIcon, PlusIcon, ShoppingCart, TrashIcon } from 'lucide-react';
import useCartStore from '../store/cartStore';

export default function CartPage() {
  const { cartItems, fetchCart, updateCartItem, removeFromCart, clearCart } =
    useCartStore();

  const [promoCode, setPromoCode] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchCart(); // Load cart items when component mounts
  }, [fetchCart]);

  useEffect(() => {
    // Calculate subtotal, VAT, and total
    const calculatedSubtotal = cartItems.reduce(
      (total, item) => total + item.Product.RegularPrice * item.quantity,
      0
    );
    const calculatedVat = calculatedSubtotal * 0.15; // 15% VAT
    setSubtotal(calculatedSubtotal);
    setTotal(calculatedSubtotal + calculatedVat);
  }, [cartItems]);

  const handlePromoCodeApply = () => {
    // Example: Apply a promo code discount
    if (promoCode === 'DISCOUNT10') {
      const discount = subtotal * 0.1; // 10% discount
      setTotal(total - discount);
    } else {
      alert('Invalid promo code');
    }
  };

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

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="text-center py-10 text-2xl"> No items in cart</div>
      ) : (
        <>
          {/* Header */}
          <header className="bg-[#006400] py-16 lg:py-4 text-center">
            <div className="flex items-center md:justify-between justify-center px-4 md:px-5 lg:px-10 xl:px-24 flex-wrap">
              <h1 className="text-white text-5xl font-bold">CART</h1>
              <img
                className="h-60 hidden md:block"
                src="./assets/images/contact/cart-image.png"
                alt="Chavda International"
              />
            </div>
          </header>

          <div className="mx-auto px-4 md:px-5 lg:px-10 xl:px-24">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="pt-4">
                <div className="text-left mb-2">
                  <h2 className="text-2xl font-bold">Product Details</h2>
                  <div className="w-44 h-1 bg-green-800 mb-4"></div>
                </div>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="p-4">
                      <div className="flex gap-4 flex-wrap">
                        <img
                          src={item.image}
                          alt={item.name}
                          width={100}
                          height={100}
                          className="rounded-lg"
                        />
                        <div className="flex-1 space-y-2">
                          <h3 className="font-medium">{item.Product.Name}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold">
                              ₹ {item.Product.RegularPrice}
                            </span>
                            <span className="text-sm text-green-600">
                              FREE DELIVERY : Orders Above R1000
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outlined"
                              size="sm"
                              onClick={() =>
                                handleDecrease(item.productId, item.quantity)
                              }
                            >
                              <MinusIcon className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outlined"
                              size="sm"
                              onClick={() =>
                                handleIncrease(item.productId, item.quantity)
                              }
                            >
                              <PlusIcon className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outlined"
                              size="sm"
                              className="text-red-500 hover:text-red-600"
                              onClick={() => handleRemove(item.productId)}
                            >
                              Remove Item
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-blue-100 pt-4">
                <div className="text-center mx-auto mb-2">
                  <h2 className="text-2xl font-bold">Order Summary</h2>
                  <div className="w-44 h-1 bg-green-800 mx-auto mb-4"></div>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold mb-2 bg-green-600 text-white p-2">
                        PROMO CODE
                      </h3>
                      <Input
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter promo code"
                        className="w-full bg-white text-black"
                      />
                      <Button
                        className="mt-2"
                        onClick={handlePromoCodeApply}
                        disabled={!promoCode}
                      >
                        Apply
                      </Button>
                    </div>

                    <div className="bg-green-100 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">
                        National Shipping - Delivers to Gauteng, South Africa
                      </h3>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span>₹{total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-center w-full flex-col md:flex-row gap-5">
                      <Button
                        size="sm"
                        className="rounded-lg w-full bg-red-500 px-8 py-3 h-12 text-white hover:bg-red-600 flex items-center justify-center gap-4"
                        onClick={handleClearCart}
                      >
                        <TrashIcon className="mr-2 h-5 w-5" />
                        Clear Cart
                      </Button>
                      <Button className="font-bold w-full text-center h-12 bg-green-600 hover:bg-green-700 flex items-center justify-center gap-4 text-white">
                        <ShoppingCart className="ml-2 h-6 w-6" />
                        CHECKOUT
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

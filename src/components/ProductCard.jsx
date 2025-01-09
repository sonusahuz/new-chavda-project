import { Button, Card } from '@material-tailwind/react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import useCartStore from '../store/cartStore';
import useWishlistStore from '../store/wishlistStore';
import { useAuthStore } from '../store/authStore';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const { addToCart } = useCartStore();
  const { isLogin } = useAuthStore();
  const navigate = useNavigate();

  const { addToWishlist } = useWishlistStore();

  const handleAddToCart = async (id) => {
    if (isLogin) {
      await addToCart(id, 1);
      alert('Product added to cart successfully');
    } else {
      navigate('/login');
    }
  };

  const handleAddToWishlist = async (id) => {
    if (isLogin) {
      await addToWishlist(id);
      alert('Product added to wishlist successfully');
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <Card
        key={product.id}
        className="relative rounded-lg mx-auto hover:border-green-500 duration-300 hover:shadow-2xl max-w-sm w-full"
      >
        {/* Floating Buttons */}
        <div className="absolute right-2 top-2 flex flex-col gap-2">
          <Button
            onClick={() => handleAddToWishlist(product.id)}
            size="sm"
            variant="filled"
            className="z-10 bg-green-600 hover:bg-green-700 text-white"
          >
            <Heart className="h-5 w-5" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
          <Button
            onClick={() => handleAddToCart(product.id)}
            size="sm"
            variant="ghost"
            className="mt-2 z-10 bg-green-600 hover:bg-green-700 text-white"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Add to cart</span>
          </Button>
        </div>

        {/* Card Content */}
        <Link
          to={`/product/${product.id}`}
          onClick={() => window.scrollTo(0, 0)}
          className="p-0"
        >
          <div className="relative w-full h-full sm:h-40">
            {/* <img
              src={product.images}
              alt={product.name}
              className="w-full h-full aspect-[4/3] object-contain"
            /> */}
          </div>
          <div className="p-4">
            <h3 className="font-medium text-sm mb-2 truncate">
              {product.Name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">
                ₹ {product.RegularPrice}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                ₹ {product.SalesPrice}
              </span>
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default ProductCard;

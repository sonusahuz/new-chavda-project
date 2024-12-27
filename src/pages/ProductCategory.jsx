import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Spinner';
import ProductCard from '../components/ProductCard';

const ProductCategory = () => {
  const { category } = useParams();
  const api = `https://dummyjson.com/products/search?q=${category}`;

  // Typing the response correctly as { products: Product[] }
  const { data, loading, error } = useFetch(api);

  if (loading) return <Loading />;

  if (error) {
    return <div>Error loading products: {error}</div>;
  }

  if (!data || data.products.length === 0) {
    return (
      <div className="text-center">No products found in this category.</div>
    );
  }

  return (
    <div className="py-6 px-4 md:px-5 lg:px-10 xl:px-24">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;

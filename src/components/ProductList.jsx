import useFetch from '../hooks/useFetch';
import { API_URL } from '../lib/utils';
import ProductCard from './ProductCard';
import Loading from './Spinner';

const ProductList = () => {
  const { loading, data, error } = useFetch(`${API_URL}/api/products`);

  if (loading) return <Loading />;
  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  if (!data || data.products?.length === 0) {
    return <div className="text-center">No products found.</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductList;

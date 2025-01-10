import { Button, Textarea } from '@material-tailwind/react';
import axios from 'axios';
import { API_URL } from '../../lib/utils';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../../components/Spinner';

const AdminUpdateProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const API = API_URL;
  const [loading, setLoading] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/api/products/${id}`, {})
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch product details');
        return res.json();
      })
      .then((product) => {
        setProduct(product.product);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;

  if (!product || product.products?.length === 0) {
    return <div className="text-center">No products found.</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);

    try {
      await axios.put(`${API}/api/products/${id}`, data);
      navigate('/admin/products');
    } catch (error) {
      console.error('Failed to update product:', error);
      alert('There was an error updating the product. Please try again.');
    }
  };
  return (
    <div className="bg-gray-100">
      <div className="gap-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-startc">
          <div className="p-6 border-r border-gray-200 w-[500px]">
            <img
              src="https://via.placeholder.com/150"
              alt="T-shirt"
              className="w-full rounded-md mb-4"
            />
            <h2 className="text-lg font-bold">Men Black Slim Fit T-shirt</h2>
            <p className="text-gray-500">(Fashion)</p>
            <p className="text-gray-700 mt-4">
              <span className="line-through text-red-500">$100</span>{' '}
              <span className="text-green-500 font-bold">$80</span>{' '}
              <span className="text-gray-500">(30% Off)</span>
            </p>
            <div className="mt-4">
              <p className="text-gray-700 font-semibold">Size:</p>
              <div className="flex space-x-2 mt-2">
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  S
                </button>
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  M
                </button>
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  XL
                </button>
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  XXL
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 font-semibold">Colors:</p>
              <div className="flex space-x-2 mt-2">
                <div className="w-6 h-6 rounded-full bg-yellow-400 border"></div>
                <div className="w-6 h-6 rounded-full bg-blue-500 border"></div>
                <div className="w-6 h-6 rounded-full bg-white border"></div>
                <div className="w-6 h-6 rounded-full bg-red-500 border"></div>
              </div>
            </div>
          </div>

          {/* Middle Section: Add Product Photo */}
          <form onSubmit={handleSubmit} className="p-6 w-full">
            <h2 className="text-lg font-bold mb-4">Add Product Photo</h2>
            <div className="border-2 w-full border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 16v-4a1 1 0 011-1h4m4 4h10m-4-4a1 1 0 01-1-1V7m4 4a1 1 0 011-1h3m-7 4V7m-7 7v-4a1 1 0 011-1h4"
                />
              </svg>
              <p className="mt-2">
                Drop your images here, or{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  click to browse
                </a>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                1600 x 1200 (4:3) recommended. PNG, JPG, and GIF files are
                allowed.
              </p>
            </div>
            {/* Right Section: Product Information */}
            <div className="mt-4">
              <h2 className="text-lg font-bold mb-4">Product Information</h2>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="productName"
                    className="block text-gray-700 font-medium"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    defaultValue={product.Name}
                    name="Name"
                    className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="brand"
                      className="block text-gray-700 font-medium"
                    >
                      SKU
                    </label>
                    <input
                      defaultValue={product.SKU}
                      type="text"
                      id="brand"
                      name="SKU"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="weight"
                      className="block text-gray-700 font-medium"
                    >
                      Regular Price
                    </label>
                    <input
                      defaultValue={product.RegularPrice}
                      type="text"
                      name="RegularPrice"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-gray-700 font-medium"
                    >
                      Sales Price
                    </label>
                    <input
                      defaultValue={product.SalesPrice}
                      type="text"
                      name="SalesPrice"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Tag Number"
                      className="block text-gray-700 font-medium"
                    >
                      Sales Price Active
                    </label>
                    <select
                      defaultValue={product.isSalePriceActive}
                      label="Sales Price Active"
                      name="isSalePriceActive"
                      className="w-full border mt-2.5 p-2 rounded"
                    >
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="Stock"
                      className="block text-gray-700 font-medium"
                    >
                      Stock
                    </label>
                    <input
                      type="text"
                      id="Stock"
                      name="Stock"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue={product.Stock}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Tag"
                      className="block text-gray-700 font-medium"
                    >
                      Features
                    </label>
                    <input
                      type="text"
                      id="Tag"
                      name="Features"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue={product.Features}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Support"
                      className="block text-gray-700 font-medium"
                    >
                      Support
                    </label>
                    <input
                      type="text"
                      id="Tag"
                      name="Support"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue={product.Support}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Tag"
                      className="block text-gray-700 font-medium"
                    >
                      Categories
                    </label>
                    <input
                      type="text"
                      id="Tag"
                      name="Categories"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue={product.Categories}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Tag"
                      className="block text-gray-700 font-medium"
                    >
                      Tag
                    </label>
                    <input
                      type="text"
                      id="Tag"
                      name="Tags"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue={product.Tags}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="Description"
                    className="block text-gray-700 font-medium"
                  >
                    Description
                  </label>
                  <Textarea
                    name="Description"
                    defaultValue={product.Description}
                    label="Description"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-end">
              <div className="space-x-4">
                <Button type="reset" variant="outlined" size="md">
                  Reset
                </Button>
                <Button
                  type="submit"
                  size="md"
                  className="bg-orange-700 text-white"
                >
                  Update
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateProductDetail;

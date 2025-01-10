import { Checkbox, Option, Select } from '@material-tailwind/react';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { DefaultPagination } from '../pagination';
import { useEffect, useState } from 'react';
import { API_URL } from '../../lib/utils';
import { Link } from 'react-router-dom';
import adminApi from '../adminStore/adminProvider';

const AdminProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProduct() {
    const res = await fetch(`${API_URL}/api/products`);
    const data = await res.json();
    return data.products;
  }
  useEffect(() => {
    setLoading(true);
    fetchProduct().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );

  const handleDeleteProduct = async (id) => {
    await adminApi.delete(`${API_URL}/api/products/${id}`);
    alert('Product deleted successfully');
    fetchProduct().then((data) => {
      setProducts(data);
    });
  };

  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl font-bold">All Product List</h1>
        <div className="flex items-center justify-between gap-4">
          <button className="bg-orange-500 text-white w-40 px-2 py-2 rounded hover:bg-orange-600">
            Add Product
          </button>
          <Select label="This Month">
            <Option value="download">Download</Option>
            <Option value="export">Export</Option>
            <Option value="import">Import</Option>
          </Select>
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="min-w-full table-auto border-collapse text-left">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-2 py-2 text-left">
                <Checkbox />
              </th>
              {[
                'Id',
                'Name',
                'Images',
                'SKU',
                'RegularPrice',
                'SalesPrice',
                'isSalePriceActive',
                'Stock',
                'Description',
                'Features',
                'Support',
                'Categories',
                'Tages',
              ].map((column) => (
                <th key={column} className="px-2 py-2 text-left">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-2">
                  <Checkbox />
                </td>
                <td className="px-2 py-2 flex items-left space-x-2">
                  <img
                    src={`https://techzaa.in/larkon/admin/assets/images/product/p-1.png`}
                    alt={product.name}
                    className="w-16 h-16 rounded"
                  />
                  <div>
                    <p className="font-medium">{product.name}</p>
                  </div>
                </td>
                <td className="px-2 py-2 text-left">{product.SKU}</td>
                <td className="px-2 py-2 text-left">
                  <p>{product.RegularPrice}</p>
                  <p className="text-sm text-gray-500">{product.SalesPrice}</p>
                </td>
                <td className="px-2 py-2 text-left">
                  {product.isSalePriceActive}
                </td>
                <td className="px-2 py-2 text-left">
                  <span>{product.Description}</span>
                </td>
                <td className="px-2 py-2 text-left">
                  <span>{product.Features}</span>
                </td>{' '}
                <td className="px-2 py-2 text-left">
                  <span>{product.Support}</span>
                </td>{' '}
                <td className="px-2 py-2 text-left">
                  <span>{product.Categories}</span>
                </td>{' '}
                <td className="px-2 py-2 text-left">
                  <span>{product.Tags}</span>
                </td>
                <td className="px-2 py-2 flex space-x-2 justify-start">
                  <Link to={`/admin/product/detail/${product.id}`}>
                    <button className="text-blue-500 hover:text-blue-600 bg-blue-100 p-2 rounded-sm">
                      <Eye className="w-5 h-5" />
                    </button>
                  </Link>
                  <Link to={`/admin/product/edit/${product.id}`}>
                    <button className="text-orange-500 hover:text-orange-600 bg-orange-100 p-2 rounded-sm">
                      <Edit className="w-5 h-5" />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="text-red-500 hover:text-red-600 bg-red-100 p-2 rounded-sm"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mx-auto text-center mt-6 flex items-center justify-end">
          <DefaultPagination />
        </div>
      </div>
    </div>
  );
};

export default AdminProductList;

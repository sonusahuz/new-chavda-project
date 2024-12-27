import { Checkbox, Option, Select } from '@material-tailwind/react';
import { Star, Eye, Edit, Trash2 } from 'lucide-react';
import { DefaultPagination } from '../pagination';
const products = [
  {
    id: 1,
    name: 'Black T-shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    price: '$80.00',
    stock: '486 Items Left',
    sold: '155 Sold',
    category: 'Fashion',
    rating: 2.5,
    reviews: 55,
  },
  {
    id: 2,
    name: 'White T-shirt',
    sizes: ['S', 'M', 'L', 'XL'],
    price: '$70.00',
    stock: '200 Items Left',
    sold: '120 Sold',
    category: 'Fashion',
    rating: 2.3,
    reviews: 30,
  },
  {
    id: 3,
    name: 'Blue Hoodie',
    sizes: ['M', 'L', 'XL'],
    price: '$120.00',
    stock: '150 Items Left',
    sold: '75 Sold',
    category: 'Fashion',
    rating: 2.8,
    reviews: 90,
  },
  {
    id: 2,
    name: 'Green Polo',
    sizes: ['S', 'M', 'L'],
    price: '$50.00',
    stock: '300 Items Left',
    sold: '110 Sold',
    category: 'Fashion',
    rating: 2.2,
    reviews: 40,
  },
  {
    id: 5,
    name: 'Red Jacket',
    sizes: ['L', 'XL'],
    price: '$150.00',
    stock: '80 Items Left',
    sold: '60 Sold',
    category: 'Fashion',
    rating: 2.9,
    reviews: 100,
  },
];
const CouponsList = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 p-6">
        {/* Small Coupon Pack */}
        <div className="flex-1 bg-[#fff1ee] rounded-2xl p-6 flex flex-col">
          <h2 className="text-[#1a237e] text-2xl font-semibold mb-2">
            4 Coupons
          </h2>
          <p className="text-gray-600 mb-4">Small nice summer coupons pack</p>
          <p className="text-[#ff5722] text-3xl font-bold mb-4">$140.00</p>
          <p className="text-gray-500 mb-6">Duration : 1 Year</p>
          <button className="bg-[#ff5722] text-white px-6 py-2 rounded-lg w-fit hover:bg-[#f4511e] transition-colors">
            Buy Now
          </button>
        </div>

        {/* Medium Coupon Pack */}
        <div className="flex-1 bg-[#e0f7fa] rounded-2xl p-6 flex flex-col">
          <h2 className="text-[#1a237e] text-2xl font-semibold mb-2">
            8 Coupons
          </h2>
          <p className="text-gray-600 mb-4">Medium nice summer coupons pack</p>
          <p className="text-[#26a69a] text-3xl font-bold mb-4">$235.00</p>
          <p className="text-gray-500 mb-6">Duration : 1 Year</p>
          <button className="bg-[#26a69a] text-white px-6 py-2 rounded-lg w-fit hover:bg-[#00897b] transition-colors">
            Buy Now
          </button>
        </div>

        {/* Special Discount Card */}
        <div className="flex-1 bg-[#fff1ee] rounded-2xl p-6 flex flex-col relative overflow-hidden">
          <div className="absolute right-0 top-0 w-40 h-40">
            <div className="absolute right-0 top-0 w-full h-full bg-gradient-to-bl from-[#ff8a65] via-transparent to-transparent opacity-20"></div>
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-[#ff5722] rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h2 className="text-[#1a237e] text-2xl font-semibold mb-2">
              30% Special discounts for customers
            </h2>
            <p className="text-gray-600 mb-6">25 November - 2 December</p>
            <button className="bg-[#ff5722] text-white px-6 py-2 rounded-lg w-fit hover:bg-[#f4511e] transition-colors">
              View Plan
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 border shadow-2xl m-6">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-bold">All Product List</h1>
          <div className="flex items-center justify-between gap-4">
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

                <th className="px-2 py-2 text-left">Product Name & Size</th>
                <th className="px-2 py-2">Price</th>
                <th className="px-2 py-2">Stock</th>
                <th className="px-2 py-2">Category</th>
                <th className="px-2 py-2">Rating</th>
                <th className="px-2 py-2">Action</th>
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
                      <p className="text-sm text-gray-500">
                        Size: {product.sizes.join(', ')}
                      </p>
                    </div>
                  </td>
                  <td className="px-2 py-2 text-left">{product.price}</td>
                  <td className="px-2 py-2 text-left">
                    <p>{product.stock}</p>
                    <p className="text-sm text-gray-500">{product.sold}</p>
                  </td>
                  <td className="px-2 py-2 text-left">{product.category}</td>
                  <td className="px-2 py-2 text-left">
                    <div className="flex items-center justify-start space-x-1">
                      <Star className="text-yellow-500 w-4 h-4" />
                      <span>{product.rating}</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {product.reviews} Review
                    </p>
                  </td>
                  <td className="px-2 py-2 flex space-x-2 justify-start">
                    <button className="text-blue-500 hover:text-blue-600 bg-blue-100 p-2 rounded-sm">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="text-orange-500 hover:text-orange-600 bg-orange-100 p-2 rounded-sm">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-600 bg-red-100 p-2 rounded-sm">
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
    </div>
  );
};

export default CouponsList;

import {
  CheckCircle,
  Package,
  PenSquare,
  ShoppingCart,
  TrainFront,
  ArrowDown,
  Plus,
  Settings,
} from 'lucide-react';
import { DefaultPagination } from '../pagination';
import { LineGraph } from './line-graph';

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

const AdminCustomerDetails = () => {
  return (
    <div className="p-6 flex items-start justify-between">
      <div>
        <div className="w-full max-w-md rounded-3xl bg-white shadow-lg">
          {/* Background Pattern */}
          <div className="relative h-32 rounded-t-3xl bg-[#FF7452] bg-[radial-gradient(circle,_transparent_20%,_#FF7452_20%,_#FF7452_80%,_transparent_80%,_transparent),radial-gradient(circle,_transparent_20%,_#FF7452_20%,_#FF7452_80%,_transparent_80%,_transparent)_25px_25px] bg-[length:50px_50px]">
            {/* Profile Image */}
            <img
              src={'https://via.placeholder.com/150'}
              alt=""
              className="absolute -bottom-12 left-8 h-24 w-24 rounded-full border-4 border-white object-cover"
            />
          </div>

          {/* Content */}
          <div className="px-8 pb-6 pt-16">
            {/* Name and Verification */}
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-gray-800">
                Michael A. Miner
              </h2>
              <CheckCircle className="h-5 w-5 text-[#FF7452]" />
            </div>

            {/* Username */}
            <p className="text-[#FF7452]">Michael A. Miner</p>

            {/* Contact Information */}
            <div className="mt-4 space-y-2">
              <div>
                <span className="font-semibold text-gray-700">Email: </span>
                <span className="text-gray-600">michaelaminer@dayrep.com</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Phone: </span>
                <span className="text-gray-600">+28 (57) 760-010-27</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="flex-1 rounded-full bg-[#FF7452] px-4 py-2 font-medium text-white transition-colors hover:bg-[#ff6138]">
                Send Message
              </button>
              <button className="flex-1 rounded-full bg-gray-100 px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-200">
                Analytics
              </button>
              <button className="rounded-full bg-gray-100 p-2 text-gray-700 transition-colors hover:bg-gray-200">
                <PenSquare className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-6">
        <div className="mx-auto w-full bg-background">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {/* Special Discounts */}
            <div className="flex items-center justify-between  gap-4 shadow-2xl p-4 rounmd">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Total Invoice</h3>
                <p className="text-sm text-muted-foreground">+4.5k</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50">
                <ShoppingCart className="w-10 h-10 text-orange-500" />
              </div>
            </div>

            {/* Gift Wrapping */}
            <div className="flex items-center justify-between  gap-4 shadow-2xl p-4 rounmd">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Total Order</h3>
                <p className="text-sm text-muted-foreground">+1.03k</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50">
                <Package className="w-10 h-10 text-orange-500" />
              </div>
            </div>

            {/* Customer Service */}
            <div className="flex items-center justify-between  gap-4 shadow-2xl p-4 rounmd">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Total Expense</h3>
                <p className="text-sm text-muted-foreground">$38,908.00</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50">
                <TrainFront className="w-10 h-10 text-orange-500" />
              </div>
            </div>
            <div className="flex items-center justify-between  gap-4 shadow-2xl p-4 rounmd">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Total Expense</h3>
                <p className="text-sm text-muted-foreground">$38,908.00</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50">
                <TrainFront className="w-10 h-10 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="overflow-x-auto mt-6 shadow-2xl rounded-md">
          <table className="min-w-full table-auto border-collapse text-left">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-2 py-2 text-left">Product Name & Size</th>
                <th className="px-2 py-2">Price</th>
                <th className="px-2 py-2">Stock</th>
                <th className="px-2 py-2">Category</th>
                <th className="px-2 py-2">Rating</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="px-2 py-2 text-left">{product.price}</td>
                  <td className="px-2 py-2 text-left">{product.price}</td>
                  <td className="px-2 py-2 text-left">{product.price}</td>

                  <td className="px-2 py-2 text-left">
                    <p>{product.stock}</p>
                    <p className="text-sm text-gray-500">{product.sold}</p>
                  </td>
                  <td className="px-2 py-2 text-left">{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mx-auto text-center my-6 flex items-center justify-end">
            <DefaultPagination />
          </div>
        </div>
        <div className="grid min-h-screen grid-cols-1 gap-6 bg-gray-50 p-4 lg:grid-cols-2">
          {/* Left Column - Points Section */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-8">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Celebration illustration"
                className="mx-auto h-48 w-auto"
              />
            </div>

            <div className="flex items-center gap-2 text-2xl font-semibold text-gray-800">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7452]">
                <span className="mt-0.5 text-white">$</span>
              </div>
              <span>3,764</span>
              <span className="text-gray-500">Points Earned</span>
            </div>

            <p className="mt-2 text-gray-600">
              Collect reward points with each purchase.
            </p>

            <div className="mt-6 flex gap-4">
              <button className="flex-1 rounded-full bg-[#FF7452] px-6 py-3 font-medium text-white transition-colors hover:bg-[#ff6138]">
                Earn Point
              </button>
              <button className="flex-1 rounded-full bg-gray-100 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-200">
                View Items
              </button>
            </div>
          </div>

          {/* Right Column - Account Section */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            {/* Payment Notification */}
            <div className="mb-6 flex items-center justify-between rounded-2xl bg-gray-50 p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <ArrowDown className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Payment Arrived</h3>
                  <p className="text-sm text-gray-500">23 min ago</p>
                </div>
              </div>
              <span className="font-semibold text-gray-900">$ 1,340</span>
            </div>

            {/* User Profile */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold text-gray-900">
                    Michael A. Miner
                  </h2>
                  <p className="text-sm text-gray-500">Welcome Back</p>
                </div>
              </div>
              <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100">
                <Settings className="h-5 w-5" />
              </button>
            </div>

            {/* Account Balance */}
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <h3 className="font-medium text-gray-500">All Account</h3>
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
                <span className="text-gray-500">Total Balance</span>
                <span className="ml-auto flex items-center gap-1 text-sm text-gray-500">
                  UT5
                  <ArrowDown className="h-4 w-4" />
                </span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-gray-900">
                  $4,700
                </span>
                <span className="text-sm text-green-600">+$232</span>
              </div>
            </div>

            {/* Graph */}
            <div className="mb-6">
              <LineGraph />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 rounded-full bg-[#FF7452] px-6 py-3 font-medium text-white transition-colors hover:bg-[#ff6138]">
                Send
              </button>
              <button className="flex-1 rounded-full bg-gray-100 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-200">
                Receive
              </button>
              <button className="rounded-full bg-gray-100 p-3 text-gray-700 transition-colors hover:bg-gray-200">
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomerDetails;

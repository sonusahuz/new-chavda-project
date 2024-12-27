import {
  BadgeDollarSign,
  Package,
  ShoppingCart,
  TrainFront,
} from 'lucide-react';
import { Checkbox, Option, Select } from '@material-tailwind/react';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { DefaultPagination } from '../pagination';

const warehouseData = [
  {
    warehouseId: '#WH-001',
    warehouseName: 'Central Fulfillment',
    location: '123 Commerce St, NY',
    contactManager: 'John Doe',
    contactNumber: '+1 (555) 123-4567',
    stockAvailable: 6490,
    stockShipping: 3022,
    warehouseRevenue: '$25,737',
  },
  {
    warehouseId: '#WH-002',
    warehouseName: 'East Coast Hub',
    location: '456 Market Ave, NY',
    contactManager: 'Jane Smith',
    contactNumber: '+1 (555) 234-5678',
    stockAvailable: 7362,
    stockShipping: 4253,
    warehouseRevenue: '$67,351',
  },
  {
    warehouseId: '#WH-003',
    warehouseName: 'West Coast Depot',
    location: '789 Trade Blvd, CA',
    contactManager: 'Richard Roe',
    contactNumber: '+1 (555) 345-6789',
    stockAvailable: 8842,
    stockShipping: 3221,
    warehouseRevenue: '$45,865',
  },
  {
    warehouseId: '#WH-004',
    warehouseName: 'Southern Distribution',
    location: '101 Supply Rd, TX',
    contactManager: 'Alice Johnson',
    contactNumber: '+1 (555) 456-7890',
    stockAvailable: 5463,
    stockShipping: 2100,
    warehouseRevenue: '$54,655',
  },
  {
    warehouseId: '#WH-005',
    warehouseName: 'Northern Fulfillment',
    location: '202 Logistics Ln, IL',
    contactManager: 'Michael Brown',
    contactNumber: '+1 (555) 567-8901',
    stockAvailable: 12643,
    stockShipping: 7008,
    warehouseRevenue: '$92,533',
  },
];
const AdminCustomerList = () => {
  return (
    <div className="p-6">
      <div className="w-full bg-background">
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {/* Free Shipping */}
            <div className="flex items-center justify-between  gap-4 shadow-2xl p-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium">All Customers</h3>
                <p className="text-sm text-muted-foreground">+22.63k</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50">
                <BadgeDollarSign className="w-10 h-10 text-orange-500" />
              </div>
            </div>

            {/* Special Discounts */}
            <div className="flex items-center justify-between  gap-4 shadow-2xl p-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Orders</h3>
                <p className="text-sm text-muted-foreground">+4.5k</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50">
                <ShoppingCart className="w-10 h-10 text-orange-500" />
              </div>
            </div>

            {/* Gift Wrapping */}
            <div className="flex items-center justify-between  gap-4 shadow-2xl p-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Services Request</h3>
                <p className="text-sm text-muted-foreground">+1.03k</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50">
                <Package className="w-10 h-10 text-orange-500" />
              </div>
            </div>

            {/* Customer Service */}
            <div className="flex items-center justify-between  gap-4 shadow-2xl p-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Invoice & Payment</h3>
                <p className="text-sm text-muted-foreground">$38,908.00</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50">
                <TrainFront className="w-10 h-10 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 border shadow-2xl rounded-2xl p-6">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-lg text-gray-600 font-bold">
            All Permissions List
          </h1>
          <div className="flex items-center justify-between gap-4">
            <Select label="This Month">
              <Option value="download">Download</Option>
              <Option value="export">Export</Option>
              <Option value="import">Import</Option>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-2 py-2 text-left">
                  <Checkbox />
                </th>
                <th className="px-2 py-2 text-left">Customer Name</th>
                <th className="px-2 py-2">Invoice ID</th>
                <th className="px-2 py-2">Status</th>
                <th className="px-2 py-2">Total Amount</th>
                <th className="px-2 py-2">Due Date</th>
                <th className="px-2 py-2"> Payment Method</th>
                <th className="px-2 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {warehouseData.map((product) => (
                <tr
                  key={product.location}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-2 px-2">
                    <Checkbox />
                  </td>
                  <td className="px-2 py-2 flex items-left space-x-2">
                    <img
                      src={`https://techzaa.in/larkon/admin/assets/images/product/p-1.png`}
                      alt={product.contactManager}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{product.contactNumber}</p>
                    </div>
                  </td>
                  <td className="px-2 py-2 text-left">{product.location}</td>
                  <td className="px-2 py-2 text-left">{product.location}</td>

                  <td className="px-2 py-2 text-left">
                    <p>{product.stockShipping}</p>
                    <p className="text-sm text-gray-500">
                      {product.warehouseId}
                    </p>
                  </td>
                  <td className="px-2 py-2 text-left">
                    {product.warehouseRevenue}
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

export default AdminCustomerList;

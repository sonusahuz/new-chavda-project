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

const AdminInvoiceList = () => {
  return (
    <div className="p-6">
      <div className="w-full bg-background">
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {/* Free Shipping */}
            <div className="flex items-center justify-between  gap-4 shadow-2xl p-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Total Invoice</h3>
                <p className="text-sm text-muted-foreground">352</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50">
                <BadgeDollarSign className="w-10 h-10 text-orange-500" />
              </div>
            </div>

            {/* Special Discounts */}
            <div className="flex items-center justify-between  gap-4 shadow-2xl p-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Pending Invoice</h3>
                <p className="text-sm text-muted-foreground">1311 </p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50">
                <ShoppingCart className="w-10 h-10 text-orange-500" />
              </div>
            </div>

            {/* Gift Wrapping */}
            <div className="flex items-center justify-between  gap-4 shadow-2xl p-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Paid Invoice</h3>
                <p className="text-sm text-muted-foreground">231 </p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50">
                <Package className="w-10 h-10 text-orange-500" />
              </div>
            </div>

            {/* Customer Service */}
            <div className="flex items-center justify-between  gap-4 shadow-2xl p-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Inactive Invoice</h3>
                <p className="text-sm text-muted-foreground">2334</p>
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
          <h1 className="text-lg text-gray-600 font-bold">All Invoices List</h1>
          <div className="flex items-center justify-between gap-4">
            <Select label="This Month">
              <Option value="download">Download</Option>
              <Option value="export">Export</Option>
              <Option value="import">Import</Option>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm text-left">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-3 py-3 text-left">
                  <Checkbox />
                </th>

                <th className="px-3 py-3 text-left"> Invoice ID </th>
                <th className="px-3 py-3"> Billing Name</th>
                <th className="px-3 py-3"> Order Date</th>
                <th className="px-3 py-3"> Total </th>
                <th className="px-3 py-3"> Payment Method</th>
                <th className="px-3 py-3"> Status</th>
                <th className="px-3 py-3"> Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-left">
              {warehouseData.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-gray-50 text-left text-gray-700"
                >
                  <td className="py-3 px-3">
                    <Checkbox />
                  </td>
                  <td className="px-3 py-3 flex items-center space-x-3">
                    {product.warehouseId}
                  </td>
                  <td className="px-3 py-3 text-left">
                    {product.warehouseName}
                  </td>

                  <td className="px-3 py-3 text-left">
                    {product.stockAvailable}
                  </td>
                  <td className="px-3 py-3 text-left">
                    {product.stockShipping}
                  </td>
                  <td className="px-3 py-3 text-left">
                    {product.warehouseRevenue}
                  </td>
                  <td className="px-3 py-3 text-left">Pending</td>
                  <td className="px-3 py-3 flex space-x-3 justify-start">
                    <button className="text-blue-500 hover:text-blue-600 bg-blue-100 p-3 rounded-sm">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="text-orange-500 hover:text-orange-600 bg-orange-100 p-3 rounded-sm">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="text-red-500 hover:text-red-600 bg-red-100 p-3 rounded-sm">
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

export default AdminInvoiceList;

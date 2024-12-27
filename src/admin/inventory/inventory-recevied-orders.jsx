import { Headphones, ListOrdered, LockKeyhole, Package } from 'lucide-react';
import { Option, Select } from '@material-tailwind/react';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { DefaultPagination } from '../pagination';
const orderData = [
  {
    orderId: '#583488/80',
    customer: 'Michael A. Miner',
    items: '03',
    amount: '$289.00',
    paymentStatus: 'Paid',
    receivedStatus: 'Delivered',
  },
  {
    orderId: '#456754/80',
    customer: 'Theresa T. Brose',
    items: '05',
    amount: '$213.00',
    paymentStatus: 'COD',
    receivedStatus: 'Failed',
  },
  {
    orderId: '#578246/80',
    customer: 'Cecile D. Gordon',
    items: '03',
    amount: '$735.00',
    paymentStatus: 'Paid',
    receivedStatus: 'Delivered',
  },
  {
    orderId: '#348930/80',
    customer: 'William Moreno',
    items: '02',
    amount: '$324.00',
    paymentStatus: 'COD',
    receivedStatus: 'Pending',
  },
  {
    orderId: '#391367/80',
    customer: 'Sarah M. Brooks',
    items: '07',
    amount: '$153.00',
    paymentStatus: 'COD',
    receivedStatus: 'Delivered',
  },
];
const InventoryWarehouse = () => {
  return (
    <div className="p-6">
      <div className="w-full bg-background">
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {/* Free Shipping */}
            <div className="flex items-center justify-between gap-4 shadow-2xl p-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Pending Review</h3>
                <p className="text-sm text-muted-foreground">3521</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-100">
                <Package className="w-10 h-10 text-orange-500" />
              </div>
            </div>

            {/* Special Discounts */}
            <div className="flex items-center justify-between gap-4 shadow-2xl p-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Pending Payment</h3>
                <p className="text-sm text-muted-foreground">1311 </p>
              </div>
              <div className="p-3 rounded-lg bg-orange-100">
                <ListOrdered className="w-10 h-10 text-orange-500" />
              </div>
            </div>

            {/* Gift Wrapping */}
            <div className="flex items-center justify-between gap-4 shadow-2xl p-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Delivered</h3>
                <p className="text-sm text-muted-foreground">231 </p>
              </div>
              <div className="p-3 rounded-lg bg-orange-100">
                <LockKeyhole className="w-10 h-10 text-orange-500" />
              </div>
            </div>

            {/* Customer Service */}
            <div className="flex items-center justify-between gap-4 shadow-2xl p-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium">In Progress</h3>
                <p className="text-sm text-muted-foreground">2334</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-100">
                <Headphones className="w-10 h-10 text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 border shadow-2xl rounded-2xl p-6">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-lg text-gray-600 font-bold">All Product List</h1>
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
                <th className="px-3 py-3 text-left"> Order ID</th>
                <th className="px-3 py-3">Customer</th>
                <th className="px-3 py-3"> Items</th>
                <th className="px-3 py-3"> Amount </th>
                <th className="px-3 py-3"> Payment Status</th>
                <th className="px-3 py-3"> Received Status</th>
                <th className="px-3 py-3"> Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-left">
              {orderData.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-gray-50 text-left text-gray-700"
                >
                  <td className="px-3 py-3 flex items-center space-x-3">
                    {product.orderId}
                  </td>
                  <td className="px-3 py-3 text-left">{product.customer}</td>
                  <td className="px-3 py-3 text-left">{product.items}</td>
                  <td className="px-3 py-3 text-left">{product.amount}</td>
                  <td className="px-3 py-3 text-left">
                    <span
                      className={` px-2 text-left rounded-sm ${
                        product.paymentStatus === 'Paid'
                          ? 'text-white bg-gray-600'
                          : product.paymentStatus === 'COD'
                          ? 'text-white bg-yellow-800'
                          : ''
                      }`}
                    >
                      {product.paymentStatus}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-left">
                    <span
                      className={` px-2 text-left rounded-sm ${
                        product.receivedStatus === 'Failed'
                          ? 'text-red-900 bg-red-100'
                          : product.receivedStatus === 'Delivered'
                          ? 'text-green-900 bg-green-100'
                          : product.receivedStatus === 'Pending'
                          ? 'text-yellow-900 bg-yellow-100'
                          : ''
                      }`}
                    >
                      {product.receivedStatus}
                    </span>
                  </td>

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

export default InventoryWarehouse;

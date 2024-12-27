import { Edit, Eye, Trash2 } from 'lucide-react';
import { DefaultPagination } from '../pagination';
import { Checkbox, Option, Select } from '@material-tailwind/react';

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

const AdminPurchasesList = () => {
  return (
    <div>
      <div className="overflow-x-auto p-6 rounded-2xl">
        <div className='flex items-center justify-between mb-5'>
          <h1>All Purchase Items</h1>
          <div>
            <Select label="This Month">
              <Option value="download">Download</Option>
              <Option value="export">Export</Option>
              <Option value="import">Import</Option>
            </Select>
          </div>
        </div>
        <table className="min-w-full border-collapse text-sm text-left">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-3 py-3 text-left">
                <Checkbox />
              </th>
              <th className="px-3 py-3 text-left"> ID</th>
              <th className="px-3 py-3">Order By</th>
              <th className="px-3 py-3"> Items</th>
              <th className="px-3 py-3"> Purchase Status </th>
              <th className="px-3 py-3"> Date</th>
              <th className="px-3 py-3"> Total</th>
              <th className="px-3 py-3"> Payment Method</th>
              <th className="px-3 py-3"> Payment Status</th>
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
                  <Checkbox />
                </td>
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
  );
};

export default AdminPurchasesList;

import { Button } from '@material-tailwind/react';

export default function AdminInvoicesDetails() {
  return (
    <div className="max-w-4xl mx-auto p-6 shadow-2xl mb-10 rounded-lg">
      <div className="bg-[#e8f7f7] rounded-lg p-6 relative mb-8 ">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold">Larkon</h1>
            </div>
            <h2 className="text-lg font-semibold mb-2">Larkon Admin.</h2>
            <p className="text-gray-600">1729 Bangor St,</p>
            <p className="text-gray-600">Houlton, ME, 04730 , United States</p>
            <p className="text-gray-600">
              <span className="underline">Phone:</span> +1(142)-532-9109
            </p>
          </div>

          {/* Invoice Details */}
          <div className="text-right">
            <div className="flex items-center justify-end gap-4 mb-2">
              <span className="text-gray-600">Invoice :</span>
              <span className="font-medium">#INV-0758267/90</span>
            </div>
            <div className="flex items-center justify-end gap-4 mb-2">
              <span className="text-gray-600">Issue Date:</span>
              <span>23 April 2024</span>
            </div>
            <div className="flex items-center justify-end gap-4 mb-2">
              <span className="text-gray-600">Due Date :</span>
              <span>26 April 2024</span>
            </div>
            <div className="flex items-center justify-end gap-4 mb-2">
              <span className="text-gray-600">Amount :</span>
              <span className="font-medium">$737.00</span>
            </div>
            <div className="flex items-center justify-end gap-4">
              <span className="text-gray-600">Status :</span>
              <span className="px-2 py-1 bg-green-500 text-white text-sm rounded-md">
                Paid
              </span>
            </div>
          </div>
        </div>

        {/* Checkmark Icon */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="w-24 h-24 bg-teal-400 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Issue Details */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Issue From */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Issue From :</h3>
          <h4 className="text-lg font-medium mb-2">Larkon Admin.INC</h4>
          <p className="text-gray-600 mb-2">
            2437 Romano Street Cambridge, MA 02141
          </p>
          <p className="mb-1">
            <span className="text-gray-600 underline">Phone :</span>{' '}
            +(31)781-417-2004
          </p>
          <p>
            <span className="text-gray-600 underline">Email :</span>{' '}
            JulianeKuhn@jourrapide.com
          </p>
        </div>

        {/* Issue For */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Issue For :</h3>
          <h4 className="text-lg font-medium mb-2">Gaston Lapierre</h4>
          <p className="text-gray-600 mb-2">
            1344 Hershell Hollow Road WA 98168 , USA
          </p>
          <p className="mb-1">
            <span className="text-gray-600 underline">Phone :</span> +(123)
            732-760-5760
          </p>
          <p>
            <span className="text-gray-600 underline">Email :</span>{' '}
            hello@dundermuffilin.com
          </p>
        </div>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Product Name
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">
                Quantity
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">
                Price
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">
                Tax
              </th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-600">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Black T-shirt"
                    className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                  />
                  <div>
                    <p className="font-medium">Men Black Slim Fit T-shirt</p>
                    <p className="text-sm text-gray-500">Size : M</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-center">1</td>
              <td className="px-6 py-4 text-center">$80.00</td>
              <td className="px-6 py-4 text-center">$3.00</td>
              <td className="px-6 py-4 text-right">$83.00</td>
            </tr>
            <tr>
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Cargo Pant"
                    className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                  />
                  <div>
                    <p className="font-medium">Dark Green Cargo Pent</p>
                    <p className="text-sm text-gray-500">Size : M</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-center">3</td>
              <td className="px-6 py-4 text-center">$110.00</td>
              <td className="px-6 py-4 text-center">$4.00</td>
              <td className="px-6 py-4 text-right">$330.00</td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col items-end justify-end gap-4 mt-4">
          <div>
            <span>Sub Total :</span>
            <span>$777.00</span>
          </div>
          <div>
            <span>Discount :</span>
            <span>-$60.00</span>
          </div>{' '}
          <div>
            <span>Estimated Tax (15.5%) :</span>
            <span>$20.00</span>
          </div>{' '}
          <div>
            <strong>Grand Amount :</strong>
            <strong>$737.00</strong>
          </div>
        </div>
        <div className="mt-5">
          <div className="bg-red-100 text-red-800 p-5 rounded-lg">
            All accounts are to be paid within 7 days from receipt of invoice.
            To be paid by cheque or credit card or direct payment online. If
            account is not paid within 7 days the credits details supplied as
            confirmation of work undertaken will be charged the agreed quoted
            fee noted above.
          </div>
        </div>
        <div className='mt-4 flex items-center justify-end gap-4'>
          <Button className="bg-green-800 w-36" >Print</Button>
          <Button variant="outlined"  className=' w-36'>Submit</Button>
        </div>
      </div>
    </div>
  );
}

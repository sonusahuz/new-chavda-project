export default function AdminInvoiceCreate() {
  return (
    <div className="p-6 shadow-2xl mb-10 rounded-lg m-6">
      <div className="mb-8">
        {/* Logo Section */}
        <div className="inline-block border border-dashed border-orange-400 rounded-lg p-3">
          <div className="flex items-center gap-2">
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
            <span className="text-2xl font-bold">Larkon</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Sender Name</label>
            <input
              type="text"
              placeholder="First name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Sender Full Address
            </label>
            <textarea
              placeholder="Enter address"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Phone number</label>
            <input
              type="tel"
              placeholder="Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Invoice Number :</label>
            <input
              type="text"
              value="#INV-0758267/90"
              readOnly
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Issue Date :</label>
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Due Date :</label>
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Amount :</label>
            <div className="flex">
              <span className="inline-flex items-center px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-500">
                $
              </span>
              <input
                type="text"
                placeholder="000"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Status :</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white">
              <option>Paid</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Issue From :
          </h3>
          <input
            type="text"
            placeholder="First name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Issue For :
          </h3>
          <input
            type="text"
            placeholder="First name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
      </div>
      <div className="mt-8">
        {/* Product Table Header */}
        <div className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr] gap-4 mb-4 text-left">
          <div className="text-gray-600">Product Name</div>
          <div className="text-gray-600">Quantity</div>
          <div className="text-gray-600">Price</div>
          <div className="text-gray-600">Tax</div>
          <div className="text-gray-600">Total</div>
        </div>

        {/* Product Row */}
        <div className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr] gap-4 items-center mb-6">
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Product Name"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <input
                type="text"
                placeholder="Product Size"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg">
            <button className="px-3 py-2 hover:bg-gray-100 w-10">-</button>
            <input
              type="text"
              value="1"
              className="text-center border-x w-10 border-gray-300 py-2 focus:outline-none"
            />
            <button className="px-3 py-2 hover:bg-gray-100 w-10">+</button>
          </div>

          <div className="flex">
            <span className="inline-flex items-center px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-500">
              $
            </span>
            <input
              type="text"
              placeholder="000"
              className="flex-1 px-4 w-20 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="flex">
            <span className="inline-flex items-center px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-500">
              $
            </span>
            <input
              type="text"
              placeholder="000"
              className="flex-1 px-4 w-20 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="flex">
            <span className="inline-flex items-center px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-500">
              $
            </span>
            <input
              type="text"
              placeholder="000"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Actions and Summary */}
        <div className="flex flex-col items-end gap-4">
          {/* Action Buttons */}
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              Clear Product
            </button>
            <button className="px-4 py-2 text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50">
              Add More
            </button>
          </div>

          {/* Summary Section */}
          <div className="w-full max-w-md space-y-4">
            <div>
              <label className="block text-gray-600 mb-2">Sub Total :</label>
              <div className="flex">
                <span className="inline-flex items-center px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-500">
                  $
                </span>
                <input
                  type="text"
                  placeholder="000"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Discount :</label>
              <div className="flex">
                <span className="inline-flex items-center px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-500">
                  $
                </span>
                <input
                  type="text"
                  placeholder="000"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">
                Estimated Tax (15.5%) :
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-500">
                  $
                </span>
                <input
                  type="text"
                  placeholder="000"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Grand Amount :</label>
              <div className="flex">
                <span className="inline-flex items-center px-4 py-2 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-gray-500">
                  $
                </span>
                <input
                  type="text"
                  placeholder="000"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-red-100 text-red-800 p-5 rounded-lg mt-5">
            All accounts are to be paid within 7 days from receipt of invoice.
            To be paid by cheque or credit card or direct payment online. If
            account is not paid within 7 days the credits details supplied as
            confirmation of work undertaken will be charged the agreed quoted
            fee noted above.
          </div>
        </div>
      </div>
    </div>
  );
}

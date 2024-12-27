export default function AdminCouponsAdd() {
  return (
    <div className="flex flex-col md:flex-row gap-6 border shadow-2xl m-6 p-6 rounded-lg">
      {/* Left Column */}
      <div className="flex-1 space-y-8">
        {/* Coupon Status */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-700">Coupon Status</h2>
          <div className="flex gap-8">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                className="w-4 h-4 text-coral-500 border-gray-300 focus:ring-coral-500"
                defaultChecked
              />
              <span className="text-gray-600">Active</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                className="w-4 h-4 text-coral-500 border-gray-300 focus:ring-coral-500"
              />
              <span className="text-gray-600">In Active</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                className="w-4 h-4 text-coral-500 border-gray-300 focus:ring-coral-500"
              />
              <span className="text-gray-600">Future Plan</span>
            </label>
          </div>
        </div>

        {/* Date Schedule */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-700">Date Schedule</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-gray-600">Start Date</label>
              <input
                type="text"
                placeholder="dd-mm-yyyy"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-coral-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-600">End Date</label>
              <input
                type="text"
                placeholder="dd-mm-yyyy"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-coral-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 space-y-8">
        <h2 className="text-lg font-medium text-gray-700">
          Coupon Information
        </h2>
        <div className="space-y-6">
          {/* Coupon Code & Product */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-gray-600">Coupons Code</label>
              <input
                type="text"
                placeholder="Code enter"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-coral-500"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-gray-600">Discount Products</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-coral-500">
                <option>Choose a categories</option>
              </select>
            </div>
          </div>

          {/* Country & Limits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-gray-600">Discount Country</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-coral-500">
                <option>Choose a country</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-gray-600">Coupons Limits</label>
              <input
                type="text"
                placeholder="limits nu"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-coral-500"
              />
            </div>
          </div>

          {/* Coupon Types */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-700">Coupons Types</h3>
            <div className="flex gap-8">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  className="w-4 h-4 text-coral-500 border-gray-300 focus:ring-coral-500"
                  defaultChecked
                />
                <span className="text-gray-600">Free Shipping</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  className="w-4 h-4 text-coral-500 border-gray-300 focus:ring-coral-500"
                />
                <span className="text-gray-600">Percentage</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  className="w-4 h-4 text-coral-500 border-gray-300 focus:ring-coral-500"
                />
                <span className="text-gray-600">Fixed Amount</span>
              </label>
            </div>
          </div>

          {/* Discount Value */}
          <div className="space-y-2">
            <label className="block text-gray-600">Discount Value</label>
            <input
              type="text"
              placeholder="value enter"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-coral-500"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full md:w-auto px-6 py-2 bg-[#FF7043] text-white rounded-md hover:bg-[#FF7043]/90 transition-colors">
            Create Coupon
          </button>
        </div>
      </div>
    </div>
  );
}

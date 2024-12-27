const AdminSetting = () => {
  return (
    <div className="p-5">
      <div className="rounded-lg bg-white p-6 shadow-2xl mb-4">
        <div className="mb-6 flex items-center gap-2">
          <div className="rounded-lg bg-orange-100 p-2">
            <div className="h-5 w-5 text-orange-500">🌐</div>
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            Localization Settings
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Country</label>
            <select className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700">
              <option>Choose a country</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Language</label>
            <select className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700">
              <option>English</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Currency</label>
            <select className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700">
              <option>US Dollar</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Length Class</label>
            <select className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700">
              <option>Centimeter</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Weight Class</label>
            <select className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700">
              <option>Kilogram</option>
            </select>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-2xl mb-4">
        <div className="mb-6 flex items-center gap-2">
          <div className="rounded-lg bg-orange-100 p-2">
            <div className="h-5 w-5 text-orange-500">🏪</div>
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            Store Settings
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Store Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">
              Store Owner Full Name
            </label>
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Owner Phone number</label>
            <input
              type="tel"
              placeholder="Number"
              className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Owner Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700"
            />
          </div>

          <div className="col-span-2 space-y-2">
            <label className="text-sm text-gray-600">Full Address</label>
            <textarea
              placeholder="Type address"
              rows={4}
              className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Zip-Code</label>
            <input
              type="text"
              placeholder="zip-code"
              className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">City</label>
            <select className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700">
              <option>Choose a city</option>
            </select>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-2xl mb-4">
        <div className="mb-6 flex items-center gap-2">
          <div className="rounded-lg bg-orange-100 p-2">
            <div className="h-5 w-5 text-orange-500">⚙️</div>
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            General Settings
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Meta Title</label>
            <input
              type="text"
              placeholder="Title"
              className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Meta Tag Keyword</label>
            <input
              type="text"
              placeholder="Enter word"
              className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Store Themes</label>
            <select className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700">
              <option>Default</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Layout</label>
            <select className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700">
              <option>Default</option>
            </select>
          </div>

          <div className="col-span-2 space-y-2">
            <label className="text-sm text-gray-600">Description</label>
            <textarea
              placeholder="Type description"
              rows={4}
              className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700"
            />
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-4 shadow-2xl mb-4">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-2">
            <div className="rounded-lg bg-orange-100 p-2">
              <div className="h-5 w-5 text-orange-500">📦</div>
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Categories Settings
            </h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Category Product Count
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="product-count"
                    className="h-4 w-4 text-orange-500"
                    defaultChecked
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="product-count"
                    className="h-4 w-4 text-orange-500"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Default Items Per Page
              </label>
              <input
                type="number"
                placeholder="000"
                className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-2">
            <div className="rounded-lg bg-orange-100 p-2">
              <div className="h-5 w-5 text-orange-500">⭐</div>
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Reviews Settings
            </h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Allow Reviews</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="allow-reviews"
                    className="h-4 w-4 text-orange-500"
                    defaultChecked
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="allow-reviews"
                    className="h-4 w-4 text-orange-500"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Allow Guest Reviews
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="guest-reviews"
                    className="h-4 w-4 text-orange-500"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="guest-reviews"
                    className="h-4 w-4 text-orange-500"
                    defaultChecked
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-2">
            <div className="rounded-lg bg-orange-100 p-2">
              <div className="h-5 w-5 text-orange-500">🎟️</div>
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Vouchers Settings
            </h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Minimum Vouchers</label>
              <input
                type="number"
                defaultValue={1}
                className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Maximum Vouchers</label>
              <input
                type="number"
                defaultValue={12}
                className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-2">
            <div className="rounded-lg bg-orange-100 p-2">
              <div className="h-5 w-5 text-orange-500">💰</div>
            </div>
            <h2 className="text-lg font-semibold text-gray-900">
              Tax Settings
            </h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Prices with Tax</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="prices-tax"
                    className="h-4 w-4 text-orange-500"
                    defaultChecked
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="prices-tax"
                    className="h-4 w-4 text-orange-500"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Default Tax Rate</label>
              <input
                type="text"
                defaultValue="18%"
                className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-2xl mb-4">
        <div className="mb-6 flex items-center gap-2">
          <div className="rounded-lg bg-orange-100 p-2">
            <div className="h-5 w-5 text-orange-500">👥</div>
          </div>
          <h2 className="text-lg font-semibold text-gray-900">
            Customers Settings
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Customers Online</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="customers-online"
                  className="h-4 w-4 text-orange-500"
                  defaultChecked
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="customers-online"
                  className="h-4 w-4 text-orange-500"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Customers Activity</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="customers-activity"
                  className="h-4 w-4 text-orange-500"
                  defaultChecked
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="customers-activity"
                  className="h-4 w-4 text-orange-500"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div className="space-y-2 ">
            <label className="text-sm text-gray-600">Customer Searches</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="customer-searches"
                  className="h-4 w-4 text-orange-500"
                  defaultChecked
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="customer-searches"
                  className="h-4 w-4 text-orange-500"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">
              Allow Guest Checkout
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="guest-checkout"
                  className="h-4 w-4 text-orange-500"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="guest-checkout"
                  className="h-4 w-4 text-orange-500"
                  defaultChecked
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Login Display Price</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="login-price"
                  className="h-4 w-4 text-orange-500"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="login-price"
                  className="h-4 w-4 text-orange-500"
                  defaultChecked
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div className="col-span-2 space-y-2">
            <label className="text-sm text-gray-600">Max Login Attempts</label>
            <input
              type="text"
              defaultValue="1 hour"
              className="w-full rounded-lg border border-gray-200 p-2.5 text-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSetting;

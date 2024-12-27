import { Button, Textarea } from '@material-tailwind/react';

const AdminProductAdd = () => {
  return (
    <div className="bg-gray-100">
      <div className="gap-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-startc">
          <div className="p-6 border-r border-gray-200 w-[500px]">
            <img
              src="https://via.placeholder.com/150"
              alt="T-shirt"
              className="w-full rounded-md mb-4"
            />
            <h2 className="text-lg font-bold">Men Black Slim Fit T-shirt</h2>
            <p className="text-gray-500">(Fashion)</p>
            <p className="text-gray-700 mt-4">
              <span className="line-through text-red-500">$100</span>{' '}
              <span className="text-green-500 font-bold">$80</span>{' '}
              <span className="text-gray-500">(30% Off)</span>
            </p>
            <div className="mt-4">
              <p className="text-gray-700 font-semibold">Size:</p>
              <div className="flex space-x-2 mt-2">
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  S
                </button>
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  M
                </button>
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  XL
                </button>
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  XXL
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 font-semibold">Colors:</p>
              <div className="flex space-x-2 mt-2">
                <div className="w-6 h-6 rounded-full bg-yellow-400 border"></div>
                <div className="w-6 h-6 rounded-full bg-blue-500 border"></div>
                <div className="w-6 h-6 rounded-full bg-white border"></div>
                <div className="w-6 h-6 rounded-full bg-red-500 border"></div>
              </div>
            </div>
          </div>

          {/* Middle Section: Add Product Photo */}
          <div className="p-6 w-full">
            <h2 className="text-lg font-bold mb-4">Add Product Photo</h2>
            <div className="border-2 w-full border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 16v-4a1 1 0 011-1h4m4 4h10m-4-4a1 1 0 01-1-1V7m4 4a1 1 0 011-1h3m-7 4V7m-7 7v-4a1 1 0 011-1h4"
                />
              </svg>
              <p className="mt-2">
                Drop your images here, or{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  click to browse
                </a>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                1600 x 1200 (4:3) recommended. PNG, JPG, and GIF files are
                allowed.
              </p>
            </div>
            {/* Right Section: Product Information */}
            <div className="mt-4">
              <h2 className="text-lg font-bold mb-4">Product Information</h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="productName"
                    className="block text-gray-700 font-medium"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="productName"
                    className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="Men Black Slim Fit T-shirt"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="brand"
                      className="block text-gray-700 font-medium"
                    >
                      Brand
                    </label>
                    <input
                      type="text"
                      id="brand"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="Larkon Fashion"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="weight"
                      className="block text-gray-700 font-medium"
                    >
                      Weight
                    </label>
                    <input
                      type="text"
                      id="weight"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="300gm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-gray-700 font-medium"
                    >
                      Product Categories
                    </label>
                    <select
                      id="category"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="Fashion"
                    >
                      <option>Fashion</option>
                      <option>Electronics</option>
                      <option>Home</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="Tag Number"
                      className="block text-gray-700 font-medium"
                    >
                      Tag Number
                    </label>
                    <input
                      type="text"
                      id="Tag Number"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="300gm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Stock"
                      className="block text-gray-700 font-medium"
                    >
                      Stock
                    </label>
                    <input
                      type="text"
                      id="Stock"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="300gm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Tag"
                      className="block text-gray-700 font-medium"
                    >
                      Tag
                    </label>
                    <input
                      type="text"
                      id="Tag"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="300gm"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="gender"
                      className="block text-gray-700 font-medium"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="Men"
                    >
                      <option>Men</option>
                      <option>Women</option>
                      <option>Unisex</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="Description"
                    className="block text-gray-700 font-medium"
                  >
                    Description
                  </label>
                  <Textarea label="Description" />
                </div>
              </form>
            </div>
            <div className="">
              <h2 className="text-lg font-bold mt-6 mb-5">Pricing Details</h2>
              <div className="flex items-center space-x-4 justify-between">
                <div>
                  <label
                    htmlFor="Price"
                    className="block text-gray-700 font-medium"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    id="Price"
                    className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Discount"
                    className="block text-gray-700 font-medium"
                  >
                    Discount
                  </label>
                  <input
                    type="text"
                    id="Discount"
                    className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="30"
                  />
                </div>{' '}
                <div>
                  <label
                    htmlFor="Tex"
                    className="block text-gray-700 font-medium"
                  >
                    Tex
                  </label>
                  <input
                    type="text"
                    id="Tex"
                    className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="3"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-end">
              <div className="space-x-4">
                <Button variant="outlined" size="md">
                  Reset
                </Button>
                <Button size="md" className="bg-orange-700 text-white">
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductAdd;

import { Button, Select} from '@material-tailwind/react';

const AdminCategoryAdd = () => {
  return (
    <div className="bg-gray-100">
      <div className="gap-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-start">
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
            <div>
              <ul className="my-3">
                <li>
                  <strong>Created By: </strong>Seller
                </li>
                <li>
                  <strong>Stock ID: </strong>238427
                </li>
                <li>
                  <strong>ID: </strong>3274328
                </li>
              </ul>
            </div>
            <div className="">
              <div className="space-x-4">
                <Button variant="outlined" size="md">
                  Created Category
                </Button>
                <Button size="md" className="bg-orange-700 text-white">
                  Cancel
                </Button>
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
              <h2 className="text-lg font-bold mb-4">General Information</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="productName"
                      className="block text-gray-700 font-medium"
                    >
                      Category Title
                    </label>
                    <input
                      type="text"
                      id="productName"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="Fashion Men , Women & Kid's"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="created by"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Category By
                    </label>
                    <Select
                      label="Select Crater"
                      id="created by"
                      defaultValue="Fashion"
                    >
                      <option value={'admin'}>Admin</option>
                      <option value={'other'}>Seller</option>
                      <option value={'seller'}>Seller</option>
                    </Select>
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
                      defaultValue="3247832"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Tag ID"
                      className="block text-gray-700 font-medium"
                    >
                      Tag ID
                    </label>
                    <input
                      type="text"
                      id="Tag ID"
                      className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="FS16276"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="Description"
                    className="block text-gray-700 font-medium mb-3"
                  >
                    Description
                  </label>
                  <textarea
                    label="Description"
                    className="w-full border h-36 p-4 rounded-md"
                    placeholder="Description"
                  />
                </div>
              </form>
            </div>
            <div className="">
              <h2 className="text-lg font-bold mt-6 mb-5">Meta Options</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="Meta Title"
                    className="block text-gray-700 font-medium"
                  >
                    Meta Title
                  </label>
                  <input
                    type="text"
                    id="Meta Title"
                    className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="Meta title"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Meta Tag Keyword"
                    className="block text-gray-700 font-medium"
                  >
                    Meta Tag Keyword
                  </label>
                  <input
                    type="text"
                    id="Meta Tag Keyword"
                    className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="Meta tag keyword"
                  />
                </div>{' '}
              </div>
              <div className="mt-4">
                <label
                  htmlFor="Description"
                  className="block text-gray-700 font-medium"
                >
                  Description
                </label>
                <textarea defaultValue="Type Description"  className='w-full border h-36 p-4'/>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-end">
              <div className="space-x-4">
                <Button variant="outlined" size="md">
                  Save Change
                </Button>
                <Button size="md" className="bg-orange-700 text-white">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCategoryAdd;

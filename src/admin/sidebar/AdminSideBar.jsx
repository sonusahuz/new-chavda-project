import { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  Tags,
  Box,
  ShoppingCart,
  CircleDollarSign,
  FileText,
  Settings,
  Users,
  User2,
  MessageCircleQuestion,
  GlobeLock,
  Puzzle,
} from 'lucide-react'; // Icons from lucide-react
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="absolute top-0">
      {/* AdminSidebar */}
      <aside className="w-64 bg-gray-900 text-white h-screen overflow-y-auto">
        <div className="p-5">
          <h1 className="text-green-800 text-xl font-bold">
            Chavda International
          </h1>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold px-4 uppercase text-gray-400 mb-2">
            General
          </h2>
          <Link
            to={'/admin/dashboard'}
            className={`block py-2 px-4 rounded-lg hover:bg-gray-700`}
          >
            <span className="flex items-center gap-2">
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </span>
          </Link>
          {/* Products */}
          <div>
            <button
              className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-700"
              onClick={() => toggleDropdown('Products')}
            >
              <span className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Products
              </span>
              <svg
                className={`w-4 h-4 transform ${
                  openDropdown === 'Products' ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === 'Products' && (
              <ul className="mt-2 pl-6 space-y-2 text-sm">
                <li>
                  <Link
                    to="/admin/product-list"
                    className="block hover:text-orange-500"
                  >
                    List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/product-details"
                    className="block hover:text-orange-500"
                  >
                    Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/product-edit"
                    className="block hover:text-orange-500"
                  >
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/product-add"
                    className="block hover:text-orange-500"
                  >
                    Create
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* Category */}
          <div>
            <button
              className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-700"
              onClick={() => toggleDropdown('Category')}
            >
              <span className="flex items-center gap-2">
                <Tags className="w-5 h-5" />
                Category
              </span>
              <svg
                className={`w-4 h-4 transform ${
                  openDropdown === 'Category' ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === 'Category' && (
              <ul className="mt-2 pl-6 space-y-2 text-sm">
                <li>
                  <Link
                    to="/admin/category-list"
                    className="block hover:text-orange-500"
                  >
                    List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/category-edit"
                    className="block hover:text-orange-500"
                  >
                    Edit
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/category-add"
                    className="block hover:text-orange-500"
                  >
                    Create
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* Inventory */}
          <div>
            <button
              className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-700"
              onClick={() => toggleDropdown('Inventory')}
            >
              <span className="flex items-center gap-2">
                <Box className="w-5 h-5" />
                Inventory
              </span>
              <svg
                className={`w-4 h-4 transform ${
                  openDropdown === 'Inventory' ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === 'Inventory' && (
              <ul className="mt-2 pl-6 space-y-2 text-sm">
                <li>
                  <Link
                    to="/admin/inventory-warehouse"
                    className="block hover:text-orange-500"
                  >
                    Warehouse
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/inventory-received-orders"
                    className="block hover:text-orange-500"
                  >
                    Received Orders
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* Orders */}
          <div>
            <button
              className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-700"
              onClick={() => toggleDropdown('Orders')}
            >
              <span className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Orders
              </span>
              <svg
                className={`w-4 h-4 transform ${
                  openDropdown === 'Orders' ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === 'Orders' && (
              <ul className="mt-2 pl-6 space-y-2 text-sm">
                <li>
                  <Link
                    to="/admin/orders-list"
                    className="block hover:text-orange-500"
                  >
                    List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/orders-details"
                    className="block hover:text-orange-500"
                  >
                    Details
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* Purchases */}
          <div>
            <button
              className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-700"
              onClick={() => toggleDropdown('Purchases')}
            >
              <span className="flex items-center gap-2">
                <CircleDollarSign className="w-5 h-5" />
                Purchases
              </span>
              <svg
                className={`w-4 h-4 transform ${
                  openDropdown === 'Purchases' ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === 'Purchases' && (
              <ul className="mt-2 pl-6 space-y-2 text-sm">
                <li>
                  <Link
                    to="/admin/purchase-list"
                    className="block hover:text-orange-500"
                  >
                    List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/purchase-order"
                    className="block hover:text-orange-500"
                  >
                    Order
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/purchase-return"
                    className="block hover:text-orange-500"
                  >
                    Return
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* Invoices */}
          <div>
            <button
              className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-700"
              onClick={() => toggleDropdown('Invoices')}
            >
              <span className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Invoices
              </span>
              <svg
                className={`w-4 h-4 transform ${
                  openDropdown === 'Invoices' ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === 'Invoices' && (
              <ul className="mt-2 pl-6 space-y-2 text-sm">
                <li>
                  <Link
                    to="/admin/invoice-list"
                    className="block hover:text-orange-500"
                  >
                    List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/invoice-details"
                    className="block hover:text-orange-500"
                  >
                    Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/invoice-add"
                    className="block hover:text-orange-500"
                  >
                    Create
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            to={'/admin/setting'}
            className={`block py-2 px-4 rounded-lg hover:bg-gray-700`}
          >
            <span className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Settings
            </span>
          </Link>
        </div>

        <div>
          <h2 className="text-sm font-bold px-4 uppercase text-gray-400 mb-2">
            Users
          </h2>
          <Link
            to={'/admin/permissions'}
            className={`block py-2 px-4 rounded-lg hover:bg-gray-700`}
          >
            <span className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Permissions
            </span>
          </Link>
          {/* Customers */}
          <div>
            <button
              className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-700"
              onClick={() => toggleDropdown('Customers')}
            >
              <span className="flex items-center gap-2">
                <User2 className="w-5 h-5" />
                Customers
              </span>
              <svg
                className={`w-4 h-4 transform ${
                  openDropdown === 'Customers' ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === 'Customers' && (
              <ul className="mt-2 pl-6 space-y-2 text-sm">
                <li>
                  <Link
                    to="/admin/customer-list"
                    className="block hover:text-orange-500"
                  >
                    List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/customer-details"
                    className="block hover:text-orange-500"
                  >
                    Details
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        {/* others  */}
        <div>
          <h2 className="text-sm font-bold px-4 uppercase text-gray-400 mb-2 mt-4">
            others
          </h2>

          {/* Customers */}
          <div>
            <button
              className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-700"
              onClick={() => toggleDropdown('Coupons')}
            >
              <span className="flex items-center gap-2">
                <Puzzle className="w-5 h-5" />
                Coupons
              </span>
              <svg
                className={`w-4 h-4 transform ${
                  openDropdown === 'Coupons' ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === 'Coupons' && (
              <ul className="mt-2 pl-6 space-y-2 text-sm">
                <li>
                  <Link
                    to="/admin/coupons-list"
                    className="block hover:text-orange-500"
                  >
                    List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/coupons-add"
                    className="block hover:text-orange-500"
                  >
                    Add
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold px-4 uppercase text-gray-400 mb-2 mt-4">
            Support
          </h2>
          <Link
            to={'/admin/help-center'}
            className={`block py-2 px-4 rounded-lg hover:bg-gray-700`}
          >
            <span className="flex items-center gap-2">
              <MessageCircleQuestion className="w-5 h-5" />
              Help Center
            </span>
          </Link>
          <Link
            to={'/admin/privacy-policy'}
            className={`block py-2 px-4 rounded-lg hover:bg-gray-700`}
          >
            <span className="flex items-center gap-2">
              <GlobeLock className="w-5 h-5" />
              Privacy Policy
            </span>
          </Link>
        </div>
        {/* Authentication */}
        <div>
          <h2 className="text-sm font-bold px-4 uppercase text-gray-400 mb-2 mt-4">
            Custom
          </h2>
          <div>
            <button
              className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-gray-700"
              onClick={() => toggleDropdown('Authentication')}
            >
              <span className="flex items-center gap-2">
                <User2 className="w-5 h-5" />
                Authentication
              </span>
              <svg
                className={`w-4 h-4 transform ${
                  openDropdown === 'Authentication' ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openDropdown === 'Authentication' && (
              <ul className="mt-2 pl-6 space-y-2 text-sm">
                <li>
                  <Link
                    to="/admin/sign-in"
                    className="block hover:text-orange-500"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/sign-up"
                    className="block hover:text-orange-500"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/reset-password"
                    className="block hover:text-orange-500"
                  >
                    Reset Password
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/lock-screen"
                    className="block hover:text-orange-500"
                  >
                    Lock Screen
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default AdminSidebar;

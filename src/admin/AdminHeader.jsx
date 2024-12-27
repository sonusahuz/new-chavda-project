import { Clock, Search, Bell } from 'lucide-react';
const AdminHeader = () => {
  return (
    <div>
      {/* Welcome Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-sm">
        <h1 className="text-gray-700 font-bold text-lg">WELCOME!</h1>
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </Bell>
          <Clock className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://via.placeholder.com/150" // Replace with user image
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-md border bg-gray-200 text-gray-600 focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default AdminHeader;

import { Outlet, useLocation } from 'react-router-dom';
import AdminSidebar from './AdminSideBar';
import AdminHeader from '../AdminHeader';

const Sidebar = () => {
  const path = useLocation();
  const isAdminRoute = path.pathname.startsWith('/admin');
  return (
    <div>
      <div className="flex items-start justify-between">
        <div className=" fixed">{isAdminRoute && <AdminSidebar />}</div>
        <div className="w-full flex-1 overflow-y-auto ml-64">
          <AdminHeader />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

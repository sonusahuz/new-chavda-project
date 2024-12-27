import { Option, Select } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const links = [
  { name: 'HOME', to: '/' },
  { name: 'ABOUT US', to: '/about-us' },
  { name: 'SHOP', to: '/shop' },
  { name: 'BRANDS', to: '/brands' },
  { name: 'CONTACT US', to: '/contact-us' },
  { name: 'SHARPENING SERVICE', to: '/sharpening-service' },
  { name: 'DASHBOARD', to: '/admin/dashboard' },
];

function SubMenu() {
  return (
    <div className="hidden md:block">
      <nav className="px-4 border h-12 md:px-5 lg:px-10 xl:px-24 mb-2 mx-auto flex items-center justify-center xl:justify-start">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="hidden md:flex items-center space-x-1">
              <Select label="BROWSE CATEGORIES" className="text-white">
                <Option value="electronics">Power Tools</Option>
                <Option value="clothing">Catering & Commercial</Option>
                <Option value="books">Electrical Equipment</Option>
                <Option value="home">Hand Tools</Option>
                <Option value="home">Electronics</Option>
              </Select>

              {links.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="py-4 px-2 text-xs text-black font-semibold hover:text-green-500 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SubMenu;

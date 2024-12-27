import { Menu } from 'lucide-react';
import { ViewSwitcher } from './ViewSwitcher';
import { Button, Option, Select } from '@material-tailwind/react';

export const FilterTopBar = ({
  // eslint-disable-next-line react/prop-types
  view,
  // eslint-disable-next-line react/prop-types
  columns,
  // eslint-disable-next-line react/prop-types
  setView,
  // eslint-disable-next-line react/prop-types
  setColumns,
  // eslint-disable-next-line react/prop-types
  setSidebarOpen,
}) => {
  return (
    <div>
      <div className="flex flex-wrap flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <Button
          variant="outlined"
          className="lg:hidden flex items-center justify-center gap-4"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-4 w-4 mr-2" />
          Filters
        </Button>

        <p className="text-sm text-gray-500">Showing 1–16 of 54855 results</p>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-wrap">
          <ViewSwitcher
            view={view}
            columns={columns}
            onViewChange={setView}
            onColumnsChange={setColumns}
          />

          <div className="border-b py-4 hidden lg:block">
            <h3 className="font-semibold mb-4 lg:hidden">FILTER BY PRICE</h3>
            <Select label="Filter by Price" className="lg:w-[200px] w-full">
              <Option value="popularity">Sort by popularity</Option>
              <Option value="rating">Sort by rating</Option>
              <Option value="date">Sort by latest</Option>
              <Option value="price_low">Sort by price: low to high</Option>
              <Option value="price_high">Sort by price: high to low</Option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

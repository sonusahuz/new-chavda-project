import React from 'react';
import { X } from 'lucide-react';
import PriceRangeSlider from './PriceRangeSlider';
import { Button, Checkbox, Option, Select } from '@material-tailwind/react';
const brands = [
  { name: 'AOC' },
  { name: 'BOSCH' },
  { name: 'OneOdio' },
  { name: 'PDPOWER' },
];

const powerTypes = [
  { name: 'Corded', count: 342 },
  { name: 'Cordless', count: 247 },
  { name: 'Petrol', count: 29 },
];

// eslint-disable-next-line react/prop-types
export const FilterSideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const [priceRange, setPriceRange] = React.useState();
  return (
    <div>
      <aside
        className={`fixed top-0 left-0 z-50 w-72 h-full bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between lg:hidden">
            <h2 className="text-lg font-semibold">Filters</h2>
            <Button
              variant="filled"
              size="sm"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Price Filter */}
          <div className="border-b py-4">
            <h3 className="font-semibold mb-4">FILTER BY PRICE</h3>
            <PriceRangeSlider
              min={0}
              max={972490}
              value={priceRange}
              onValueChange={setPriceRange}
            />
            <Button className="w-full mt-4 bg-[#006400] hover:bg-[#005400]">
              FILTER
            </Button>
          </div>

          {/* Brands */}
          <div className="border-b py-4">
            <h3 className="font-semibold mb-4">BRANDS</h3>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.name} className="flex items-center gap-2">
                  <Checkbox id={`brand-${brand.name}`} />
                  <label
                    htmlFor={`brand-${brand.name}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {brand.name}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b py-4 lg:hidden">
            <h3 className="font-semibold mb-4">FILTER BY PRICE</h3>
            <Select label="apple" className="lg:w-[180px] w-full">
              <Option value="popularity">Sort by popularity</Option>
              <Option value="rating">Sort by rating</Option>
              <Option value="date">Sort by latest</Option>
              <Option value="price_low">Sort by price: low to high</Option>
              <Option value="price_high">Sort by price: high to low</Option>
            </Select>
          </div>

          {/* Power Type */}
          <div className="py-4">
            <h3 className="font-semibold mb-4">POWER TYPE</h3>
            <div className="space-y-2">
              {powerTypes.map((type) => (
                <div key={type.name} className="flex items-center gap-2">
                  <Checkbox id={`power-${type.name}`} />
                  <label
                    htmlFor={`power-${type.name}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {type.name} ({type.count})
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

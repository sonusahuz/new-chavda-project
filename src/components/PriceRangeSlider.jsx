'use client';

import { Slider } from '@material-tailwind/react';

// eslint-disable-next-line react/prop-types
function PriceRangeSlider({ min, max, value, onValueChange }) {
  return (
    <Slider
      className="relative flex items-center select-none touch-none w-full h-5"
      value={value}
      max={max}
      min={min}
      step={1}
      onValueChange={onValueChange}
    >
      <Slider.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
        <Slider.Range className="absolute bg-[#006400] rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb
        className="block w-5 h-5 bg-white border-2 border-[#006400] rounded-full hover:bg-gray-50 focus:outline-none"
        aria-label="Min price"
      />
      <Slider.Thumb
        className="block w-5 h-5 bg-white border-2 border-[#006400] rounded-full hover:bg-gray-50 focus:outline-none"
        aria-label="Max price"
      />
    </Slider>
  );
}

export default PriceRangeSlider;

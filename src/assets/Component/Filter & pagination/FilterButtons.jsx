import React from 'react';

const FilterButtons = ({ options, selectedOption, onSelect }) => {
  return (
    <div className="flex overflow-auto scroll-my-1.5   items-center gap-4">
      {options.map(option => (
        <button key={option} className={`btn btn-xs capitalize sm:btn-sm md:btn-md lg:btn-mg ${selectedOption === option ? 'bg-[#0E3997] text-white' : 'bg-gray-200'}`} onClick={() => onSelect(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;

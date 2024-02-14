import React from 'react';

const HeadlineForFirstTab = ({ title, data }) => {
  // Check if data is an array
  if (Array.isArray(data)) {
    // Join the elements of the array into a single string separated by comma
    data = data.join(', ');
  }

  return (
    <div>
      <h1 className='font-medium capitalize text-lg text-[#0E3997] font-rubik'>{title}</h1>
      <p className='capitalize text-lg'>{data? data : "NILL"}</p>
    </div>
  );
};

export default HeadlineForFirstTab;

import React from 'react';
import { Link } from 'react-router-dom';

const HomeBlogBox = ({ title,_id ,content, featured_image_url, index }) => {
  return (
    
      <Link to={`blog/${_id}`} className="max-w-md p-3 sm:flex sm:space-x-6 lg:bg-gray-50 border-white hover:bg-[#A4C2C4] rounded-tr-badge text-gray-800">
      <div className="flex-shrink-0 w-full mb-6  sm:h-32 sm:w-32 sm:mb-0 bg-gray-50">
        <img
          src={featured_image_url}
          alt=""
          className="object-cover object-center w-full h-full rounded bg-gray-500"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div className='mt-1'>
          <h2 className="text-lg uppercase text-white lg:text-black font-medium">Case Story {index + 1}</h2>
          <h2 className="text-lg font-light text-white lg:text-gray-900">{title}</h2>
          
        </div>
      </div>
    </Link>
   
  );
};

export default HomeBlogBox;

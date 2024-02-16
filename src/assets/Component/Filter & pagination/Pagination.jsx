import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav className='flex justify-center mt-4'>
      <ul className='flex'>
        <li>
          <button onClick={() => onPageChange(currentPage - 1)} className={`btn mr-2 btn-xs sm:btn-sm md:btn-md lg:btn-mg`} disabled={currentPage === 1}>Previous</button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index}>
            <button onClick={() => onPageChange(index + 1)} className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-mg ${currentPage === index + 1 ? 'bg-gray-200' : ''}`}>
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => onPageChange(currentPage + 1)} className={`btn ml-2 btn-xs sm:btn-sm md:btn-md lg:btn-mg`} disabled={currentPage === totalPages}>Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

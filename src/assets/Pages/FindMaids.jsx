import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MaidProfileBox from '../Component/FindMaid/MaidProfileBox';

const FindMaids = () => {
  const maids = useLoaderData();

  // Extracting unique values for marital status, age, and religion from the maids data
  const maritalStatuses = Array.from(new Set(maids.map(maid => maid.marital_status)));
  const ages = Array.from(new Set(maids.map(maid => Math.floor((new Date() - new Date(maid.date_of_birth)) / 31557600000 / 10) * 10)));
  const religions = Array.from(new Set(maids.map(maid => maid.religion)));

  // State to store selected filter criteria
  const [filters, setFilters] = useState({
    maritalStatus: null,
    ageRange: null,
    religion: null
  });

  // Filter function
  const filterMaids = (maid) => {
    const { maritalStatus, ageRange, religion } = filters;

    if (maritalStatus && maid.marital_status !== maritalStatus) return false;

    if (ageRange) {
      const age = Math.floor((new Date() - new Date(maid.date_of_birth)) / 31557600000);
      if (!(age >= ageRange.min && age <= ageRange.max)) return false;
    }

    if (religion && maid.religion !== religion) return false;

    return true;
  };

  // Filtered maids based on selected criteria
  const filteredMaids = maids.filter(filterMaids);

  // Function to reset filters
  const resetFilters = () => {
    setFilters({
      maritalStatus: null,
      ageRange: null,
      religion: null
    });
  };

  return (
    <div className='container mx-auto my-20'>
      <h1 className='text-center text-xl m-8'>All Maids</h1>

      {/* Filter buttons for marital status */}
      <div className='flex items-center gap-4 my-5'>
        <h1 className='text-2xl font-bold text-[#0E3997]'>Marital Status:</h1>
        {maritalStatuses.map(status => (
          <button key={status} className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-mg ${filters.maritalStatus === status ? 'bg-gray-200' : ''}`} onClick={() => setFilters({ ...filters, maritalStatus: status })}>
            {status}
          </button>
        ))}
      </div>

      {/* Filter buttons for age */}
      <div className='flex items-center gap-4 my-5'>
        <h1 className='text-2xl font-bold text-[#0E3997]'>Age:</h1>
        {ages.map(age => (
          <button key={age} className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-mg ${filters.ageRange && filters.ageRange.min === age ? 'bg-gray-200' : ''}`} onClick={() => setFilters({ ...filters, ageRange: { min: age, max: age + 9 } })}>
            {`${age} - ${age + 9}`}
          </button>
        ))}
      </div>

      {/* Filter buttons for religion */}
      <div className='flex items-center gap-4 my-5'>
        <h1 className='text-2xl font-bold text-[#0E3997]'>Religion:</h1>
        {religions.map(religion => (
          <button key={religion} className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-mg ${filters.religion === religion ? 'bg-gray-200' : ''}`} onClick={() => setFilters({ ...filters, religion: religion })}>
            {religion}
          </button>
        ))}
      </div>

      {/* Reset button */}
      <div className='flex items-center gap-4 my-5'>
        <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-mg' onClick={resetFilters}>Reset Filters</button>
      </div>

      <hr /> <br />
      {/* Conditional rendering for maids */}
      {filteredMaids.length > 0 ? (
        <section className='grid grid-cols-4 gap-4'>
          {filteredMaids.map(maid => <MaidProfileBox key={maid._id} maid={maid}></MaidProfileBox>)}
        </section>
      ) : (
        <div className="text-center text-gray-500 mt-8">
          {maids.length === 0 ? "Loading..." : <span className="loading loading-ball loading-lg"></span>}
        </div>
      )}
    </div>
  );
};

export default FindMaids;

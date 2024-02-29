import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FilterButtons from '../Component/Filter & pagination/FilterButtons';
import MaidList from '../Component/Filter & pagination/MaidList';
import Pagination from '../Component/Filter & pagination/Pagination';

const FindMaids = () => {
  const maids = useLoaderData();

  // Extracting unique values for marital status, age, and religion from the maids data
  const maritalStatuses = Array.from(new Set(maids.map(maid => maid.marital_status)));
  const ages = Array.from(new Set(maids.map(maid => Math.floor((new Date() - new Date(maid.date_of_birth)) / 31557600000 / 10) * 10)));
  const religions = Array.from(new Set(maids.map(maid => maid.religion)));
  const skills = Array.from(new Set(maids.flatMap(maid => maid.skills)));
  const nationalities = Array.from(new Set(maids.map(maid => maid.nationality)));


  // State to store selected filter criteria
  const [filters, setFilters] = useState({
    maritalStatus: null,
    ageRange: null,
    religion: null,
    skills: [],
    nationality: null,
  });

  // State to store pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [maidsPerPage] = useState(8); // Change the number of maids per page as needed

  // Filter function
  const filterMaids = (maid) => {
    const { maritalStatus, ageRange, religion, skills, nationality } = filters;

    if (maritalStatus && maid.marital_status !== maritalStatus) return false;

    if (ageRange) {
      const age = Math.floor((new Date() - new Date(maid.date_of_birth)) / 31557600000);
      if (!(age >= ageRange.min && age <= ageRange.max)) return false;
    }

    if (religion && maid.religion !== religion) return false;

    if (skills.length > 0 && !skills.every(skill => maid.skills.includes(skill))) return false;

    if (nationality && maid.nationality !== nationality) return false;

    return true;
  };

  // Filtered maids based on selected criteria
  const filteredMaids = maids.filter(filterMaids);

  // Pagination
  const indexOfLastMaid = currentPage * maidsPerPage;
  const indexOfFirstMaid = indexOfLastMaid - maidsPerPage;
  const currentMaids = filteredMaids.slice(indexOfFirstMaid, indexOfLastMaid);

  // Function to reset filters
  const resetFilters = () => {
    setFilters({
      maritalStatus: null,
      ageRange: null,
      religion: null,
      skills: [],
      nationality: null,
    });
  };

  // Function to paginate
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredMaids.length / maidsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='container px-3 mx-auto my-20 poppins-regular'>
      {/* Your existing JSX code for the header */}

      {/* Filter buttons */}
      <div className="flex flex-col space-y-5 mb-8">
        {/* Marital Status filter */}
        <div className="flex items-center space-x-5">
          <h1 className="text-[#065FB1] font-bold uppercase">Marital Status:</h1>
         
            <FilterButtons options={maritalStatuses} selectedOption={filters.maritalStatus} onSelect={status => setFilters({ ...filters, maritalStatus: status })} />
         
        </div>

        {/* Age filter */}
        <div className='flex items-center space-x-5'>
          <h1 className='text-[#065FB1] font-bold uppercase'>Age:</h1>
          <FilterButtons options={ages.map(age => `${age} - ${age + 9}`)} selectedOption={filters.ageRange ? `${filters.ageRange.min} - ${filters.ageRange.max}` : null} onSelect={ageRange => setFilters({ ...filters, ageRange: { min: parseInt(ageRange), max: parseInt(ageRange.split(' - ')[1]) } })} />
        </div>
        {/* Religion filter */}
        <div className='flex items-center space-x-5'>
          <h1 className='text-[#065FB1] font-bold uppercase'>Religion:</h1>
          <FilterButtons options={religions} selectedOption={filters.religion} onSelect={religion => setFilters({ ...filters, religion: religion })} />
        </div>

        {/* Nationality filter */}
        <div className='flex items-center space-x-5'>
          <h1 className='text-[#065FB1] font-bold uppercase'>Nationality:</h1>
          <FilterButtons options={nationalities} selectedOption={filters.nationality} onSelect={nationality => setFilters({ ...filters, nationality: nationality })} />
        </div>

        {/* Skills filter */}
        <div className='flex items-center space-x-5 '>
          <h1 className='text-[#065FB1] font-bold uppercase'>Skill:</h1>
          <FilterButtons options={skills} selectedOption={null} onSelect={skill => setFilters({ ...filters, skills: filters.skills.includes(skill) ? filters.skills.filter(s => s !== skill) : [...filters.skills, skill] })} />

        </div>
        {/* Reset Filters button */}
        <div className="flex items-center">
          {/* {filters.skills.length > 0 && <p>Filters Applied: {filters.skills.join(', ')}</p>} */}
          <button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-mg" onClick={resetFilters}>Reset Filters</button>
        </div>
      </div>

      <hr />
      {filters.skills.length > 0 && <p><span className='text-[#065FB1] font-bold uppercase'>Showing Profile which match:</span> {filters.skills.join(', ')}</p>}
      {/* Display maid profiles */}
      <div className='my-12'>
        <MaidList maids={currentMaids} />
      </div>

      {/* Pagination */}
      <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredMaids.length / maidsPerPage)} onPageChange={setCurrentPage} />
    </div>
  );
};

export default FindMaids;

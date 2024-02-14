import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MaidProfileBox from '../Component/FindMaid/MaidProfileBox';

const FindMaids = () => {
  const maids = useLoaderData();

  // Extracting unique values for marital status, age, and religion from the maids data
  const maritalStatuses = Array.from(new Set(maids.map(maid => maid.marital_status)));
  const ages = Array.from(new Set(maids.map(maid => Math.floor((new Date() - new Date(maid.date_of_birth)) / 31557600000 / 10) * 10)));
  const religions = Array.from(new Set(maids.map(maid => maid.religion)));
  const skills = Array.from(new Set(maids.flatMap(maid => maid.skills)));

  // State to store selected filter criteria
  const [filters, setFilters] = useState({
    maritalStatus: null,
    ageRange: null,
    religion: null,
    skills: []
  });

  // State to store pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [maidsPerPage] = useState(4); // Change the number of maids per page as needed

  // Filter function
  const filterMaids = (maid) => {
    const { maritalStatus, ageRange, religion, skills } = filters;

    if (maritalStatus && maid.marital_status !== maritalStatus) return false;

    if (ageRange) {
      const age = Math.floor((new Date() - new Date(maid.date_of_birth)) / 31557600000);
      if (!(age >= ageRange.min && age <= ageRange.max)) return false;
    }

    if (religion && maid.religion !== religion) return false;

    if (skills.length > 0 && !skills.every(skill => maid.skills.includes(skill))) return false;

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
      skills: []
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
    <div className='container mx-auto my-20'>
      <h1 className='text-center text-xl m-8'>All Maids</h1>

      {/* Filter buttons */}
      <div className="flex justify-around mb-8">
        <div className="flex items-center gap-4">
          <span className="text-[#0E3997] font-bold">Marital Status:</span>
          {maritalStatuses.map(status => (
            <button key={status} className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-mg ${filters.maritalStatus === status ? 'bg-gray-200' : ''}`} onClick={() => setFilters({ ...filters, maritalStatus: status })}>
              {status}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#0E3997] font-bold">Age:</span>
          {ages.map(age => (
            <button key={age} className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-mg ${filters.ageRange && filters.ageRange.min === age ? 'bg-gray-200' : ''}`} onClick={() => setFilters({ ...filters, ageRange: { min: age, max: age + 9 } })}>
              {`${age} - ${age + 9}`}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#0E3997] font-bold">Religion:</span>
          {religions.map(religion => (
            <button key={religion} className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-mg ${filters.religion === religion ? 'bg-gray-200' : ''}`} onClick={() => setFilters({ ...filters, religion: religion })}>
              {religion}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#0E3997] font-bold">Skills:</span>
          {skills.map(skill => (
            <button key={skill} className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-mg ${filters.skills.includes(skill) ? 'bg-gray-200' : ''}`} onClick={() => setFilters({ ...filters, skills: filters.skills.includes(skill) ? filters.skills.filter(s => s !== skill) : [...filters.skills, skill] })}>
              {skill}
            </button>
          ))}
        </div>

        <div className="flex items-center">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-mg" onClick={resetFilters}>Reset Filters</button>
        </div>
      </div>

      <hr />

      <hr /> <br />
      <section className='grid grid-cols-4 gap-4'>
        {currentMaids.length > 0 ? (
          currentMaids.map(maid => <MaidProfileBox key={maid._id} maid={maid}></MaidProfileBox>)
        ) : (
          <div className="text-center text-gray-500 mt-8">
            {maids.length === 0 ? "Loading..." : "No maids found."}
          </div>
        )}
      </section>

      {/* Pagination */}
      <nav className='flex justify-center space-x-4 mt-4'>
        <ul className='flex'>
          <li>
            <button onClick={prevPage} className={`btn mr-2 btn-xs sm:btn-sm md:btn-md lg:btn-mg`} disabled={currentPage === 1}>Previous</button>
          </li>
          {Array.from({ length: Math.ceil(filteredMaids.length / maidsPerPage) }, (_, index) => (
            <li key={index}>
              <button onClick={() => paginate(index + 1)} className={`btn btn-xs sm:btn-sm md:btn-md lg:btn-mg ${currentPage === index + 1 ? 'bg-gray-200' : ''}`}>
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button onClick={nextPage} className={`btn ml-2 btn-xs sm:btn-sm md:btn-md lg:btn-mg`} disabled={currentPage === Math.ceil(filteredMaids.length / maidsPerPage)}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FindMaids;

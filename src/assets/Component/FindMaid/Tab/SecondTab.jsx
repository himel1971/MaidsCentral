import React from 'react'
import TableForSecondTab from './Shared/TableForSecondTab';

const SecondTab = ({ data }) => {

  const { experience, skills } = data;

  return (
    <>
      <div className="container p-2 space-y-8 mt-6 mx-auto sm:p-4 text-gray-800">
        <div>
          <h2 className="mb-4 text-2xl font-semibold leading-3">Employment History</h2>
          <div className="overflow-x-auto">
            <TableForSecondTab experience={experience}></TableForSecondTab>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold leading-3">Skills</h2>
          <div className="flex flex-wrap">
            {skills.map((skill, index) => (
              <div className="bg-gray-200 px-4 py-2 rounded-md mr-2 mb-2 uppercase" key={index}>
              
                {skill}
              </div>
            ))}
          </div>
        </div>








      </div>
    </>
  )
}

export default SecondTab
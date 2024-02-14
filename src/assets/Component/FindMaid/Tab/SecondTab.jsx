import React from 'react'
import TableForSecondTab from './Shared/TableForSecondTab';

const SecondTab = ({ data }) => {

  const { experience } = data;
  // console.log(experience);
  return (
    <>
      <div className="container p-2 mt-6 mx-auto sm:p-4 text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-3">Employment History</h2>
        <div className="overflow-x-auto">



          <div>







          </div>







          <TableForSecondTab experience={experience}></TableForSecondTab>
        </div>
      </div>
    </>
  )
}

export default SecondTab
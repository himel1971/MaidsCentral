import React from 'react'

const TableForSecondTab = ({experience}) => {
  return (
    <table className="min-w-full text-xs">
    <colgroup>
      <col></col>
      <col></col>
      <col></col>
      <col></col>
    </colgroup>
    <thead className="bg-[#0E3997] text-white text-base font-normal">
      <tr className="text-left">
        <th className="p-3">	Date </th>
        <th className="p-3">Country		</th>
        <th className="p-3">Employer</th>
        <th className="p-3">Work Duties</th>


      </tr>
    </thead>
    <tbody>

      {experience?.map((item, index) => (
        index >= 0 ?
          <tr key={index} className="border-b text-base border-opacity-20 border-gray-300 bg-gray-50">
            <td className="p-3">
              <p>{item.duration}</p>
            </td>
            <td className="p-3">
              <p>{item.Country}</p>
            </td>
            <td className="p-3">
              <p>{item.employer}</p>
            </td>
            <td className="p-3">
              <p>{item.responsibilities}</p>
            </td>


          </tr>

          :
          <h2>not found</h2>

      )
      )}

    </tbody>
  </table>
  )
}

export default TableForSecondTab
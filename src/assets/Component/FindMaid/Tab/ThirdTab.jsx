import React from 'react'
import HeadlineForFirstTab from './Shared/HeadlineForFirstTab';

const ThirdTab = ({ data }) => {
  // console.log(data);

  const { restriction, pork_status } = data;
  return (
    <section className='mt-6'>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>
                <HeadlineForFirstTab title='Handel Pork?' data={pork_status} ></HeadlineForFirstTab>

              </th>
              <th>
                <HeadlineForFirstTab title='Dietary Restrictions' data={restriction} ></HeadlineForFirstTab>

              </th>

            </tr>
          </thead>
        </table>
      </div>
    </section>
  )
}

export default ThirdTab
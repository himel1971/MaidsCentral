import React from 'react'
import HeadlineForFirstTab from './Shared/HeadlineForFirstTab';

const ThirdTab = ({ data }) => {
  // console.log(data);

  const { DietaryRestrictions, FoodHandling } = data;
  return (
    <section className='mt-6'>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>
                <HeadlineForFirstTab title='Dietary Restrictions' data={DietaryRestrictions} ></HeadlineForFirstTab>

              </th>
              <th>
                <HeadlineForFirstTab title='Dietary Restrictions' data={FoodHandling} ></HeadlineForFirstTab>

              </th>

            </tr>
          </thead>
        </table>
      </div>
    </section>
  )
}

export default ThirdTab
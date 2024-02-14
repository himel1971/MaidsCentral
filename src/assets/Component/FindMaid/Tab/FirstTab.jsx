import React from 'react'
import HeadlineForFirstTab from './Shared/HeadlineForFirstTab';

const FirstTab = ({ data }) => {

        const { marital_status, date_of_birth,age_of_children, home_address, place_of_birth, height, weight, education, religion, rest_day_preference, languages, nationality, number_of_children } = data;
  // console.log(data);
  const age = new Date().getFullYear() - new Date(date_of_birth).getFullYear();
  return (
    <section className='lg:flex m-4 mt-6 space-x-12 spa'>

      <div className='space-y-5'>
        <HeadlineForFirstTab title='Date Of Birth' data={date_of_birth}></HeadlineForFirstTab>
        <HeadlineForFirstTab title='Place of Birth' data={place_of_birth}></HeadlineForFirstTab>
        <HeadlineForFirstTab title='Weight' data={weight}></HeadlineForFirstTab>
        <HeadlineForFirstTab title='Home Address' data={home_address}></HeadlineForFirstTab>
        <HeadlineForFirstTab title='Education Level' data={education}></HeadlineForFirstTab>
        <HeadlineForFirstTab title='Marital Status' data={marital_status}></HeadlineForFirstTab>
        <HeadlineForFirstTab title='Age(s) of Children (if any)' data={age_of_children}></HeadlineForFirstTab>


      </div>

      {/* rightside */}

      <div className='space-y-5'>
        <HeadlineForFirstTab title='Age' data={age}></HeadlineForFirstTab>
        <HeadlineForFirstTab title='Nationality' data={nationality}></HeadlineForFirstTab>
        <HeadlineForFirstTab title='Height' data={height}></HeadlineForFirstTab>
        <HeadlineForFirstTab title='Language' data={languages}></HeadlineForFirstTab>
        <HeadlineForFirstTab title='Religion' data={religion}></HeadlineForFirstTab>
        <HeadlineForFirstTab title='Number of Children' data={number_of_children}></HeadlineForFirstTab>
        <HeadlineForFirstTab title='Preference for Rest Day' data={rest_day_preference}></HeadlineForFirstTab>






      </div>
    </section>
  )
}

export default FirstTab
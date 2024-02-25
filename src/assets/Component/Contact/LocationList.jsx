import React from 'react'
import Location from './Location'

const LocationList = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-7 container mx-auto'>
      <Location branch="KOVAN" location="Blk 203 Hougang St 21 #01-71, Singapore 530203 (by appointment only)" number="6980 6312" />
      <Location branch="BUKIT TIMAH" location="Bt Timah Shopping Centre 170 Upper Bt Timah Rd #02-58 Singapore 588179" number="6980 6310" />
      <Location branch="GEYLANG" location="55 Changi Road #01-19 Singapore 419709" number="6242 4688" />
      <Location branch="THOMSON" location="200 Upper Thomson Road #B1-02 Singapore 574424" number="6250 5070" />
    </div>
  )
}

export default LocationList
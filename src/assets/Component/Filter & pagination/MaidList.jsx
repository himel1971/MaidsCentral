import React from 'react';
import MaidProfileBox from '../FindMaid/MaidProfileBox';
import NotFound from '../FindMaid/NotFound';

const MaidList = ({ maids }) => {
  // Check if 'maids' array is empty
  if (maids.length === 0) {
    return <NotFound></NotFound>;
  }

  return (
    <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
      {maids.map(maid => (
        <MaidProfileBox key={maid._id} maid={maid}></MaidProfileBox>
      ))}
    </section>
  );
};

export default MaidList;

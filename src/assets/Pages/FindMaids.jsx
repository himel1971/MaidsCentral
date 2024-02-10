import React from 'react'
import { useLoaderData } from 'react-router-dom'
import MaidProfileBox from '../Component/FindMaid/MaidProfileBox';

const FindMaids = () => {

  const maids = useLoaderData();
  // console.log(maids);



  return (
    <div className='container mx-auto my-20'>
      <h1 className='text-center text-xl m-8'>All Maids</h1>

      <section className='grid grid-cols-4 gap-4'>

        {
          maids.map(maid => <MaidProfileBox key={maid.id} maid={maid}></MaidProfileBox>)
        }

      </section>




    </div>
  )
}

export default FindMaids
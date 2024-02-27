import React from 'react'

const Extra = () => {
  return (
    <div className="w-full h-full mx-auto max-w-[1240px] my-12">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-xl pr-16 mx-auto mb-10">
          <h2 className="uppercase text-[12px] tracking-wide">
            <hr className="inline-block w-10 mb-1 p-[1px] bg-slate-400" />{" "}
            what we do for our customers
          </h2>
          <h5 className="mb-6 text-3xl font-extrabold leading-none">
          WE MAKE IT EASIER BY BEING THE ONE STOP CENTRE.
          </h5>

          <div className=" w-full flex items-center">
            <img src="./images/eature/Untitled-design2-2.png" alt="section image" />
          </div>
        </div>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
          <div className="max-w-md ">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              
              <h1 className='text-2xl font-bold text-[#0949A1]'>1</h1>
            </div>
            <h6 className="mb-2 text-2xl font-semibold leading-5">
            EDUCATE
            </h6>
            <p className="text-sm text-gray-700">
            We bring the fundamental information needed by employers prior engaging any maid agency in Singapore
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <h1 className='text-2xl font-bold text-[#0949A1]'>2</h1>
            </div>
            <h6 className="mb-2 text-2xl font-semibold leading-5">
            FEE & WARRANTY
            </h6>
            <p className="text-sm text-gray-700">
            Every request is different and Maids Central deals with each Client individually. Our agency fee is fixed as well as minimum salary based on maids experience and qualifications.
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <h1 className='text-2xl font-bold text-[#0949A1]'>3</h1>
            </div>
            <h6 className="mb-2 text-2xl font-semibold leading-5">
            PLANNING
            </h6>
            <p className="text-sm text-gray-700">
            We exclusively understand Singaporean household needs to manage their home and meet their requirements are our priorities.
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <h1 className='text-2xl font-bold text-[#0949A1]'>4</h1>
            </div>
            <h6 className="mb-2 text-2xl font-semibold leading-5">
            CHOICE
            </h6>
            <p className="text-sm text-gray-700">
            Understanding customers and meet their requirements are our priority.When you work with us, you're more than just an application.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Extra
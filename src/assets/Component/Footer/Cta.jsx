import React from 'react';

const Cta = () => {
  return (
    <>
      <hr />
      <section className="py-6 bg-[#dbf5ff] bg-cover md:bg-contain md:bg-no-repeat md:bg-bottom md:h-max h-auto text-gray-900 bg-[url(https://i.ibb.co/M5msVNB/Untitled.png)]  sm:bg-center">
        <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
          <div className="flex flex-col space-y-4  text-center lg:text-left">
            <h1 className="text-3xl font-bold uppercase">The best way to Hire domestic helper!</h1>
            <p className="text-lg w-full md:w-[60%] ">
              Get highly suitable and trained helpers who are
              physically, mentally and emotionally prepared
              to work with your family - all without the
              hidden agency fees that will burden them
              before starting work.
            </p>
            <a className=' flex-1' href="https://wa.me/message/OTPYQ2VQURDEC1" target="_blank">
              <button
                type="button"
                className="px-5 py-3  border rounded hover:bg-white border-gray-800 text-black text-lg font-medium uppercase">
                Chat with us and find best solution
              </button>
            </a>
          </div>
          <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md ">

          
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Cta;

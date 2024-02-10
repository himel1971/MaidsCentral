import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/WD4S5mX/heroMaid.png)' }}>
                <div className="hero-overlay bg-white bg-opacity-30"></div>
                <div className="hero-content w-3/5 font-rubik text-center text-neutral-content">
                    {/* <div className="max-w-xl flex flex-col justify-center items-center text-center">
                        <h1 className="mb-5 text-5xl text-[#6D3419] font-bold">Need a Maid at Home?</h1>
                        <p className="mb-5 max-w-sm text-[#616160]">Introducing Maids Central, Singapore's premier online platform connecting employers with trusted helper agencies. Elevate your maid hiring experience with us.</p>
                        <button className="btn bg-[#88BC3D] text-white font-rubik text-base font-medium uppercase w-2/3 rounded-md ">Schedule an appointment</button>
                    </div> */}

                    <div className='max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center'
                    >
                        <p className='text-[#6D3419] font-bold p-2'>
                            GROWING WITH DATA ANALYTICS
                        </p>
                        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                            Grow with data.
                        </h1>
                        <div className='flex justify-center items-center'>
                            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                                Fast, flexible financing for
                            </p>
                            {/* <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
                        </div>
                        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                        <button className='bg-[#5F8D4E] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
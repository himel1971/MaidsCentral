import React from 'react'

const ServiceHeader = () => {
  return (
    <section
            className="relative h-[90vh] bg-[url(/images/Home/hero4.png)] bg-cover lg:bg-center bg-no-repeat"
        >

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="md:-mt-32 md:-ml-28 flex flex-col justify-center items-center space-y-4 text-white  text-center ">
                    <div className=''>
                        <h1 className="text-3xl text-left font-extrabold sm:text-5xl">
                           Our Service
                            <strong className="block font-extrabold text-white ">

                            </strong>
                        </h1>
                    </div>

                    <div>
                        <p className="mt-4 ml-2 max-w-lg sm:text-xl/relaxed text-left capitalize">
                        we understand the importance of a reliable and dedicated household staff. That's why we offer comprehensive services that cater to both employers and maids, ensuring a seamless and positive experience for everyone involved. </p>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default ServiceHeader
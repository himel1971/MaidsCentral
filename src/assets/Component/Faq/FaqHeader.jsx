import React from 'react'

const FaqHeader = () => {
    return (
        <section
            className="relative h-[90vh] bg-[url(/images/Home/hero4.png)] bg-cover bg-center bg-no-repeat"
        >

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="md:-mt-32 md:-ml-28 flex flex-col justify-center items-center space-y-4 text-white  text-center ">
                    <div className=''>
                        <h1 className="text-3xl text-left font-extrabold sm:text-5xl">
                        Frequently Asked Questions
                            <strong className="block font-extrabold text-white ">

                            </strong>
                        </h1>
                    </div>

                    <div>
                        <p className="mt-4 ml-2 max-w-lg sm:text-xl/relaxed text-left capitalize">
                        Find answers to common queries in our FAQ section!
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FaqHeader
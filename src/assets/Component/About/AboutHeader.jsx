import React from 'react'

const AboutHeader = () => {
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
                            About Our Agency
                            <strong className="block font-extrabold text-white ">

                            </strong>
                        </h1>
                    </div>

                    <div>
                        <p className="mt-4 ml-2 max-w-lg sm:text-xl/relaxed text-left capitalize">
                            we understand that hiring household staff can be challenging. It's not easy to find reliable and highly recommended maids, especially ones who are dedicated and skilled.

                            But with Maids Central, you can hire household staff who are dependable and have excellent references.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutHeader
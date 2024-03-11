import React from 'react';

const OurMission = () => {
    return (
        <section className="bg-white container mx-auto">
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:flex lg:items-center">
                    <div className="w-full space-y-12 lg:w-1/2">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">MAIDS CENTRAL... <br /> HELP YOU CAN TRUST!</h1>
                            <div className="mt-2">
                                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                            </div>
                        </div>
                        <div className="md:flex md:items-start md:-mx-4">
                            <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>
                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize">Our Mission</h1>
                                <p className="mt-3 text-gray-500">To help employers engage a helper that best matches their needs and achieve a positive experience for everyone through excellent service, skillful knowledge, and a people-focused approach.</p>
                            </div>
                        </div>
                        <div className="md:flex md:items-start md:-mx-4">
                            <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </span>
                            <div className="mt-4 md:mx-4 md:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize">Vision</h1>
                                <p className="mt-3 text-gray-500">To become a one-stop service provider that is able to help employers engage suitable helpers to ease their domestic burdens and at the same time help place maids into fair employment to improve their living standards, with good faith that they will achieve long, healthy, and happy working relationships.</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                        <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem]" src="https://i.ibb.co/vXDkmpm/12.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurMission;

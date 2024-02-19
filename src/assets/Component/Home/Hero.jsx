import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <section
                className="relative h-[90vh] bg-[url(./../../../public/images/Home/hero3.png)] bg-cover bg-center bg-no-repeat"
            >

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="md:-mt-32 md:-ml-28 flex flex-col justify-center items-center space-y-4 text-white  text-center ">
                        <div className=''>
                            <h1 className="text-3xl font-extrabold sm:text-5xl">
                                We Assist, Guide &
                                <strong className="block font-extrabold text-white ">
                                    Make It Easier
                                </strong>
                            </h1>
                        </div>

                        <div>
                            <p className="mt-4 ml-2 max-w-lg sm:text-xl/relaxed text-center">
                                We are dedicated to providing the Best service for our Employer's and Helpers' needs!
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 justify-center text-center">
                            <NavLink
                                to="/findmaids"
                                className="block  rounded bg-[#00AEEF] hover:bg-white px-12 py-3 text-sm font-medium text-white hover:text-[#065FB1] shadow  focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Find Maid
                            </NavLink>


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;

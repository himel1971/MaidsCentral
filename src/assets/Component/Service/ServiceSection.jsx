import React from 'react'

const ServiceSection = () => {
    return (
        <div class="bg-white  my-20">
            <div class="container px-6 py-8 mx-auto">
                <h1 class=" text-2xl font-bold text-center text-[#00AEEF] capitalize lg:text-4xl ">MAIDS SERVICE</h1>

                <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 ">
                    Your Trusted Household Staffing Solution. Reliable, ethical, and supportive, we connect employers with quality household staff. Simplify your search or find a rewarding job opportunity today. Contact us now!


                </p>

                <div class="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">

                    <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg ">
                        <p class="font-medium text-gray-500 uppercase "> New Maid Arrival Transport & Administration </p>
                        <a href="./Forms/POEA.pdf" download_>
                            <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#065FB1] rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">


                                Download

                            </button></a>
                    </div>

                    <div class="w-full p-8 space-y-8 text-center bg-[#065FB1] rounded-lg">
                        <p class="font-medium text-gray-200 uppercase">Maid Home Leave Application</p> <br />
                        <a href="./Forms/OWWA.pdf" download_>
                            <button class="w-full px-4 py-2 mt-10 tracking-wide text-[#065FB1] capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">


                                Download

                            </button></a>
                    </div>

                    <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg ">
                        <p class="font-medium text-gray-500 uppercase ">maid passport and work <br /> permit Renewal</p>

                        <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#065FB1] rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSection
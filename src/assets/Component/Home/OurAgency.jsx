import React from 'react'

const OurAgency = () => {
    return (
        <>


            <section className="bg-gray-100 text-gray-800 my-11">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">




                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 bg-[#0856a9] text-gray-50">




                        <h1 class="text-white font-medium text-4xl leading-10 capitalize">
                            Our Approach Stands Out
                            <br />
                            <span class="text-5xl uppercase font-semibold my-4 tracking-wider" >Ethical Agency</span>
                            <br />
                            We Will Listen to Your Needs!!
                        </h1>




                        <div className='flex flex-wrap gap-2 mt-8 '>



                            <a className=' flex-1' href="https://wa.me/message/OTPYQ2VQURDEC1" target="_blank">
                                <button
                                    type="button"
                                    className="px-5 py-3  border rounded bg-white border-gray-800 text-black text-lg font-medium uppercase">
                                    Live Chat
                                </button>
                            </a>

                         

                        </div>
                    </div>



                    <div className="lg:w-1/2 xl:w-3/5 bg-gray-100">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src="https://i.ibb.co/7VHv7Yh/josue-michel-Mwxs-RSG1-A2s-unsplash.jpg" alt="" className="rounded-lg shadow-lg bg-gray-500 aspect-video sm:min-h-96" />
                        </div>
                    </div>






                </div>
            </section>



        </>
    )
}

export default OurAgency
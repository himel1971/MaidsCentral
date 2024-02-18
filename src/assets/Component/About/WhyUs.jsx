import React from 'react'

const WhyUs = () => {
    return (
        <section className=" text-gray-800 my-6">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-[#00AEEF]">
                        Finding Home Happiness With Maids Central
                    </h2>
                    <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600">
                        Give us a message for more info.
                    </p>
                </div>


                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-bold tracki sm:text-3xl text-[#065FB1]">
                            Why Choose Maids Central?
                        </h3>
                        <p className="mt-3 text-lg text-gray-600">

                            Maids Central is your reliable source for finding skilled, trustworthy, and experienced domestic helpers. We provide personalized attention, fast response times, and exceptional service. With Maids Central, you can have peace of mind knowing that you're in good hands.</p>
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#065FB1] text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leadi text-gray-900">
                                        Fast Response Time:
                                    </h4>
                                    <p className="mt-2 text-gray-600">We understand the urgency of your needs. When you submit a maid recruitment request, you'll receive a timely response from one of our housemaid recruitment team members.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#065FB1] text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leadi text-gray-900">Quality Service:</h4>
                                    <p className="mt-2 text-gray-600"> Our experienced team is committed to providing excellent service and skillful knowledge to match you with a helper who best fits your needs.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#065FB1] text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leadi text-gray-900">Trusted Assistance: </h4>
                                    <p className="mt-2 text-gray-600">We focus on building long-term and healthy working relationships between employers and helpers, ensuring a positive experience for everyone.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <img src="/images/Aboutus/wave.jpg" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs
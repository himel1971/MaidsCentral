import React from 'react'

const Faq = () => {
    return (
        <div>
            <section className=" text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl text-[#065FB1] font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-gray-600"> Find answers to common queries in our FAQ section!</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6  focus:outline-none focus-visible:ri">How do I know which maid is right for me?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                At Maids Central, we have a thorough vetting process that includes personal interviews, reference checks, and background checks. Based on your specific requirements and preferences, we match you with a maid who is best suited to meet your needs. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                                Can I request a specific nationality for my maid?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">

                                Yes, we offer maids from various nationalities including Indonesia, Myanmar, Philippines, and Mizoram. Please let us know your preferences during the hiring process.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What if I have other questions that are not listed here?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">

                                If you have any other questions or concerns, please feel free to contact us. We are always here to help and provide you with the information you need.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq
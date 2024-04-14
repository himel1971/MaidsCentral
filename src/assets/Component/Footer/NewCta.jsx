import React from 'react';

const NewCta = () => {
    return (
        <>
            <hr />
            <section className="pt-8 px-4 md:px-12 bg-[#dbf5ff] min-h-[10vh] bg-cover md:bg-contain md:bg-no-repeat md:bg-bottom md:min-h-max text-gray-900 sm:bg-center">

                <div className="container mx-auto flex flex-col justify-center items-center lg:space-x-12 lg:justify-between lg:flex-row">

                    <div className="flex flex-col pb-8 space-y-4 w-full md:w-[65%] text-center lg:text-left">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">The best way to Hire a domestic helper.</h1>
                        <p className="text-base md:text-lg w-full pb-4 md:w-[90%]">
                            Get highly suitable and trained helpers who are
                            physically, mentally, and emotionally prepared
                            to work with your family - all without the
                            hidden agency fees that will burden them
                            before starting work.
                        </p>
                        <a href="https://wa.me/message/OTPYQ2VQURDEC1" target="_blank" className="flex-1">
                            <button
                                type="button"
                                className="px-4 md:px-5 py-2 md:py-3 border rounded hover:bg-white border-gray-800 text-black text-base md:text-lg font-medium uppercase">
                                Chat with us and find the best solution
                            </button>
                        </a>
                    </div>

                    <div className="flex flex-row items-center self-center justify-center w-full md:w-[35%] ">
                        <img src="https://i.ibb.co/smMpcL0/Untitled-1373-x-1113-px.png" alt="Hire domestic helper illustration" className="w-full xl:max-w-[80%] " />
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewCta;

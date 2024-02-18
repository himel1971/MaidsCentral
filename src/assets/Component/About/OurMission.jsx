import React from 'react'

const OurMission = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20  text-gray-800">

            <h2 className="mb-8 text-5xl font-bold  text-left text-[#00AEEF] uppercase"> 💫Our Mission & Vision</h2> <br />
            {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, ea.</p> */}
            <div className='grid gap-2'>
                <div>
                    <h1 className='text-[#065FB1] text-xl font-bold uppercase'>🔹Mission: </h1><br />
                    <p className='-mt-5 text-black font-light text-lg'>
                        We are a team of passionate developers and designers who are dedicated to creating innovative
                        and user-friendly web applications. Our mission is to provide a seamless and
                        intuitive experience for our users, while also ensuring that our applications are
                        secure and compliant with industry standards.
                    </p>
                    </div>
                    <div>
                    <h1 className='text-[#065FB1] text-xl font-bold uppercase'>🔹Vision: </h1><br />
                    <p className='-mt-5 text-black font-light text-lg'>
                        We are a team of passionate developers and designers who are dedicated to creating innovative
                        and user-friendly web applications. Our mission is to provide a seamless and
                        intuitive experience for our users, while also ensuring that our applications are
                        secure and compliant with industry standards.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurMission
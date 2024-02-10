import React from 'react'

const MaidProfileBox = ({ maid }) => {
    // console.log(maid);

    const { picture_url, name, nationality, education } = maid;



    return (
        <>
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800">
                <img src={picture_url} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y divide-gray-300">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
                        <p className="px-5 text-xs sm:text-base text-gray-600">{nationality}</p>

                    </div>
                    <div className="flex justify-center pt-2 space-x-4 align-center">


                        <a rel="noopener noreferrer" href="#" aria-label="Twitter" className="p-2 rounded-md text-gray-800 hover:text-violet-600">
                            <img src="./Images/icons/whatsapp-color-svgrepo-com.svg" alt="logo" />
                        </a>
                        <a rel="noopener noreferrer" href="#" aria-label="Email" className="p-2 rounded-md text-gray-800 hover:text-violet-600">
                            <img src="./Images/icons/phone-call-telephone-svgrepo-com.svg" alt="logo" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MaidProfileBox
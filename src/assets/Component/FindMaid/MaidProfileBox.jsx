import React from 'react'
import { Link } from 'react-router-dom';
import BoxTableData from './BoxTableData';

const MaidProfileBox = ({ maid }) => {


    const { id, picture_url, name, nationality } = maid;



    return (
        <>
            <Link to={`/maid/${id}`}>
                <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800">

                    <img src={picture_url} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y divide-gray-300">

                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
                            <p className="px-5 text-xs sm:text-base text-gray-600">{nationality}</p>

                        </div>

                        <BoxTableData maid={maid} />
                        {/* Social Links */}
                        <div className="flex justify-evenly pt-2 space-x-4 align-center">

                            <Link className='h-8 w-8'>
                                <img src="./images/icons/phone-call-telephone-svgrepo-com.svg" alt="logo" />
                            </Link>

                            <Link className='h-8 w-8'>
                                <img src="./images/icons/whatsapp-color-svgrepo-com.svg" alt="whatsAppLogo" />
                            </Link>


                        </div>

                    </div>
                </div>
            </Link>
            
        </>
    )
}

export default MaidProfileBox
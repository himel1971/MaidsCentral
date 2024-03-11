import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BoxTableData from './BoxTableData';
import { AuthContext } from '../../Config/AuthProvider';

const MaidProfileBox = ({ maid }) => {
    const { user } = useContext(AuthContext);

    const { _id, picture_url, name, nationality } = maid;

    return (
        <>
            <Link to={`/maid/${_id}`}>
                <div className="flex flex-col justify-center max-w-xs m-auto p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800">
                    {user ? (
                        <img src={picture_url} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
                    ) : (
                        <img src='https://i.ibb.co/9tT7j2S/login-Blur.png' alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square " />
                            
                    )}
                    <div className="space-y-4 text-center divide-y divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl capitalize font-semibold sm:text-2xl">
                                {name.split(" ").slice(0, 2).join(" ")}
                            </h2>
                            <p className="px-5 text-xs sm:text-base capitalize text-gray-600">{nationality}</p>
                        </div>
                        <BoxTableData maid={maid} />
                        {/* Social Links */}
                        <div className="flex justify-evenly pt-2 space-x-4 align-center">
                            {/* <a className='h-8 w-8' href={`tel:+91116145`} >
                                <img src="./images/icons/phone-call-telephone-svgrepo-com.svg" alt="phoneLogo" />
                            </a>
                            <a className='h-8 w-8' href="https://wa.me/message/OTPYQ2VQURDEC1" target="blank">
                                <img src="./images/icons/whatsapp-color-svgrepo-com.svg" alt="whatsAppLogo" />
                            </a> */}



                            <button className="btn btn-wide bg-[#00aeee17]">See Details</button>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default MaidProfileBox;

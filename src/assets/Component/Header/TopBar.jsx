import React from 'react';
import PhoneTopBarName from './SharedTopbar/PhoneTopBarName'; // Assuming this is a valid import path

const TopBar = () => {
    return (
        <div className='bg-[#00ADEE] h-[4vh] hidden lg:block'>
            <div className='container mx-auto flex text-white justify-between items-center h-full'>
                <div className='flex justify-between items-center h-full w-1/2 '>
                    <PhoneTopBarName name="HENNI " number=" 9274 1810 " />|
                    <PhoneTopBarName name="LAWRENCE  " number="8911 4308" />|
                    <PhoneTopBarName name="JULIET   " number="9720 7184" />|
                    <PhoneTopBarName name="MAX   " number="9111 6145" />
                </div>

                {/* Rendering email link with an icon */}
                <div className='flex justify-around items-center justify-evenly'>
                    <img src="images/icons/mail.png" className='h-8' alt="mail" />
                    <a href="mailto:info.maidsc@gmail.com">info.maidsc@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default TopBar;

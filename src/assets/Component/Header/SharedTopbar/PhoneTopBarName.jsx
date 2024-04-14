import React from 'react';

const PhoneTopBarName = ({ name, number }) => {
    return (
        <div className=''>
            <p className='text-white font-rubik font-medium flex'>
                <b className='uppercase font-rubik font-semibold'>
                    {name}:
                </b> &nbsp;
                <a href={`tel:${number}`}>{number}</a> &nbsp;
            </p>
        </div>
    );
};

export default PhoneTopBarName;

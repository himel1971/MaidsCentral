import React from 'react';

const PhoneTopBarName = ({ name, number }) => {
    return (
        <div className=''>
            <p className='text-white font-medium flex'>
                <b className='uppercase'>
                    {name}:
                </b> &nbsp;
                <a href={`tel:${number}`}>{number}</a> &nbsp;|
            </p>
        </div>
    );
};

export default PhoneTopBarName;

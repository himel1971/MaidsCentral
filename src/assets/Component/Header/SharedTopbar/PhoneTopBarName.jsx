import React from 'react';

const PhoneTopBarName = ({ name, number }) => {
    return (
        <div>
            <p className='text-white font-medium'>
                <b>
                    {name}
                </b> &nbsp;
                <a href={`tel:${number}`}>{number}</a>
            </p>
        </div>
    );
};

export default PhoneTopBarName;

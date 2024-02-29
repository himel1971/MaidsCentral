import React from 'react';

const AnimatedCard = () => {
  return (

<>
{[...Array(4)].map((_, index) => (
        <div className="flex w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg animate-pulse">
      <div className="w-1/3 bg-gray-300"></div>

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="w-40 h-2 bg-gray-200 rounded-lg"></h1>

        <p className="w-48 h-2 mt-4 bg-gray-200 rounded-lg"></p>

        <div className="flex mt-4 item-center gap-x-2">

      
        </div>
      </div>
    </div>
      ))}
</>

  
   
  );
};

export default AnimatedCard;
import React from 'react'

const Grid = () => {
    return (
        <div className="p-10 h-[50vh] container mx-auto grid md:grid-cols-12 grid-rows-6 gap-4 text-center ">
            <div className="md:col-span-3 md:row-span-2 border-red-500 border-2">
                1
            </div>
            <div className="md:col-span-3 md:row-span-3 md:col-start-4 border-red-500 border-2">
                2
            </div>
            <div className="md:col-span-3 md:row-span-3 md:col-start-7 border-red-500 border-2">
                3
            </div>
            <div className="md:col-span-3 md:row-span-2 md:col-start-10 border-red-500 border-2">
                4
            </div>
            <div className="md:col-span-3 md:row-span-4 md:col-start-10 md:row-start-3 border-red-500 border-2">
                5
            </div>
            <div className="md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-4 border-red-500 border-2">
                6
            </div>
            <div className="md:col-span-3 md:row-span-3 md:col-start-7 md:row-start-4 border-red-500 border-2">
                7
            </div>
            <div className="md:col-span-3 md:row-span-4 md:col-start-1 md:row-start-3 border-red-500 border-2">
                8
            </div>
        </div>
    )
}

export default Grid
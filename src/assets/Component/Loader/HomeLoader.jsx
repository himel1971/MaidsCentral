import React from 'react'
import { RiseLoader } from 'react-spinners'

const HomeLoader = () => {
    return (
        <div className=' container h-[80vh] mx-auto flex items-center justify-center'>

            <RiseLoader
                color="#79bcfa"
                size={20}
            />

        </div>
    )
}

export default HomeLoader
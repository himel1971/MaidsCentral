import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/WD4S5mX/heroMaid.png)' }}>
                <div className="hero-overlay bg-white bg-opacity-30"></div>
                <div className="hero-content w-3/5 font-rubik text-center text-neutral-content">
                    <div className="max-w-xl flex flex-col justify-center items-center text-center">
                        <h1 className="mb-5 text-5xl text-[#6D3419] font-bold">Need a Maid at Home?</h1>
                        <p className="mb-5 max-w-sm text-[#616160]">Introducing Maids Central, Singapore's premier online platform connecting employers with trusted helper agencies. Elevate your maid hiring experience with us.</p>
                        <button className="btn bg-[#88BC3D] text-white font-rubik text-base font-medium uppercase w-2/3 rounded-md ">Schedule an appointment</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
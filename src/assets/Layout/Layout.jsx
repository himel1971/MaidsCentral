import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Component/Home/Footer'
import Nav from '../Component/Header/Nav'
import Cta from '../Component/Footer/Cta'
import TopBar from '../Component/Header/TopBar'
import { RiseLoader } from 'react-spinners'
import HomeLoader from '../Component/Loader/HomeLoader'

const Layout = () => {
    const [isLoading, setIsLoading] = useState(true); // Initially, set isLoading to true

    const location = useLocation();

    useEffect(() => {
        // Simulate an asynchronous operation (e.g., fetching data)
        // Replace this with your actual async operation (e.g., fetching data from an API)
        const asyncOperation = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

            // After the async operation is completed, set isLoading to false
            setIsLoading(false);
        };

        asyncOperation();
    }, []); // Run this effect only once when the component mounts

    return (
        <>
            <TopBar></TopBar>
            <Nav></Nav>
            <div style={{ visibility: isLoading ? 'hidden' : 'visible', opacity: isLoading ? 0 : 1, transition: 'visibility 0.3s linear, opacity 0.3s linear' }}>
                <Outlet />
            </div>
            {isLoading && <HomeLoader />} 
            <Cta></Cta>
            <Footer></Footer>
        </>
    )
}

export default Layout

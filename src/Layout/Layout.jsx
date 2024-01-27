import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Home/Footer'
import Navbar from '../Component/Home/Navbar'
import Nav from '../Component/Home/Nav'

const Layout = () => {
    return (
        <>
            {/* <Navbar></Navbar> */}
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Layout
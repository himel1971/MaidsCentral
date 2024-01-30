import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Home/Footer'
import Nav from '../Component/Header/Nav'




const Layout = () => {
    return (
        <>

        <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default Layout
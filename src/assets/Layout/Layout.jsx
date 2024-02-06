import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Home/Footer'
import Nav from '../Component/Header/Nav'
import Cta from '../Component/Footer/Cta'




const Layout = () => {
    return (
        <>

        <Nav></Nav>
            <Outlet></Outlet>
            <Cta></Cta>
            <Footer></Footer>
        </>
    )
}

export default Layout
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Home/Footer'
import Nav from '../Component/Header/Nav'
import Cta from '../Component/Footer/Cta'
import TopBar from '../Component/Header/TopBar'




const Layout = () => {
    return (
        <>
            <TopBar></TopBar>
            <Nav></Nav>
            <Outlet></Outlet>
            <Cta></Cta>
            <Footer></Footer>
        </>
    )
}

export default Layout
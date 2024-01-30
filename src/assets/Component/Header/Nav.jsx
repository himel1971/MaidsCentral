import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

import NavLinks from './NavLinks';
import { AuthContext } from '../../Config/AuthProvider';









const Nav = () => {
    const { user, singOut } = useContext(AuthContext);
    const { displayName, email, photoURL } = user || {};
    const logOut = () => {
        singOut()
    }


    return (
        <>
            <div className="navbar pt-6 container mx-auto bg-base-100 h-[10vh] justify-between flex">
                <div className="flex justify-between">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                /></svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content  absolute mt-3 z-50 p-1 shadow bg-base-100 rounded-box "
                        >
                            <NavLinks></NavLinks>

                        </ul>
                    </div>
                    <img src="https://i.ibb.co/P5vDFxM/restura-Logo.png" alt="Logo" className='w-72' border="0"></img>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="text-black text-lg not-italic font-normal z-10">
                        <ul className="flex text-lg font-medium pb-3 justify-between items-center space-x-11">
                            <NavLinks></NavLinks>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center">



                    {/* after  login photo text badge  */}


                    {!user ?
                        <>
                            <NavLink to="/login" className="btn rounded-md hover:bg-[#E67700] hidden md:flex bg-[#E67700] px-5 py-2.5 text-sm font-medium text-white shadow">Log In</NavLink>

                        </>
                        :
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-lg btn-ghost btn-circle avatar">
                                <div className="w-10 md:w-12 rounded-full">
                                    <img src={photoURL || 'https://i.ibb.co/v3hYr5s/Education.png'} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-auto text-base font-medium">
                                <li className='select-none uppercase'>{displayName || "Unknown"} </li>
                                <li className='select-none italic '>{email}</li>
                                <hr />
                                <li> <Link className='capitalize' to={`/add`}>Add a food</Link></li>
                                <li> <Link className='capitalize' to={`/yourfoods`}>Your foods</Link></li>
                                <li> <Link className='capitalize' to={`/myorder`}>My Orders</Link></li>
                                <li><Link className='hover:bg-red-400 text-base font-medium' onClick={logOut}>Logout</Link></li>
                            </ul>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default Nav
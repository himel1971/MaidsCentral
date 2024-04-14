import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';
import { AuthContext } from '../../Config/AuthProvider';

const Nav = () => {
    const { user, singOut } = useContext(AuthContext);
    const { displayName, email, photoURL } = user || {};
    
    const logOut = () => {
        singOut();
    };

    return (
        <>
            <div className="navbar z-10 font-rubik text-sm pt-6 container mx-auto bg-base-100 h-[10vh] justify-between flex">
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
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content absolute mt-3 z-50 p-1 shadow bg-base-100 rounded-box"
                        >
                            <NavLinks />
                        </ul>
                    </div>
                    <img src="https://i.ibb.co/y8tmLDK/reallogo.jpg" alt="MaidsCentral" className="md:w-52 w-64 pb-1 xl:w-72  md:mb-2" border="0" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="text-black text-lg not-italic font-normal z-10">
                        <ul className="flex text-lg uppercase font-rubik font-medium justify-between items-center md:space-x-4 xl:space-x-8 space-x-11">
                            <NavLinks />
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    {!user ? (
                        <div className="flex gap-2 items-center">
                            <NavLink
                                to="/login"
                                className="hover:text-[#7CC23E] hidden md:inline-block md:flex px-4 py-2.5 font-medium text-black uppercase"
                            >
                                Log In
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="btn rounded-md hover:bg-[#E67700] hidden md:flex px-8 bg-[#7CC23E] py-2.5 text-sm font-medium text-white shadow"
                            >
                                Register
                            </NavLink>
                        </div>
                    ) : (
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-lg btn-ghost btn-circle avatar">
                                    <div className="w-10 md:w-12 rounded-full">
                                        <img src={photoURL || 'https://i.ibb.co/KLR28G2/user-avatar.png'} alt="User Avatar" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-40 p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-auto text-base font-medium">
                                    <li className='select-none uppercase'>{displayName || "Unknown"} </li>
                                    <li className='select-none italic '>{email}</li>
                                    <hr />
                                    <li> <Link className='capitalize' to={`/findmaids`}>Find a Maid</Link></li>
                                    <li> <Link className='capitalize' to={`/contact`}>Contact Us</Link></li>
                                    <li> <a className='capitalize' target='_blank' rel="noopener noreferrer" href='https://wa.me/message/OTPYQ2VQURDEC1'>Chat With Us</a></li>
                                    <li><Link className='hover:bg-red-400 text-base font-medium' onClick={logOut}>Logout</Link></li>
                                </ul>
                            </div>
                            <a className='hidden lg:block' href="https://wa.me/message/OTPYQ2VQURDEC1" target="_blank" rel="noopener noreferrer">
                                <button
                                    type="button"
                                    className="px-5 py-3 font-semibold border rounded border-gray-800 text-[#065FB1] text-lg lg:hidden"
                                >
                                    Contact us
                                </button>
                            </a>
                        </>
                    )}
                </div>
            </div>
            <hr />
        </>
    );
};

export default Nav;

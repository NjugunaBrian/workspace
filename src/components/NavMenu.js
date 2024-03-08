import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";


const NavMenu = ({ clicked, isClicked }) => {

    const handleClick = () => {
        isClicked(!clicked);
    }




    return (
        <div className='fixed top-0 right-0 h-[100vh] w-[300px] z-50 bg-[#212121] text-white transition ease-in-out duration-1000'>
            <div className='flex items-center justify-between p-4 align-baseline'>
                <p className='pt-12 text-sm'>NAVIGATION</p>
                <button className='mr-3 p-5 mt-2 rounded-full bg-green-600' onClick={handleClick}><FaTimes /> </button>
            </div>
            <hr className='mx-4' />
            <ul className='pt-3 pl-12 text-2xl'>
                <li className='my-8 hover:list-disc'>
                    <NavLink to="/spaces" >
                        Spaces
                    </NavLink>
                </li>
                <li className='mb-8 hover:list-disc'>
                    <NavLink to="/about us" >
                        About Us
                    </NavLink>
                </li>
                <li className='mb-8 hover:list-disc'>
                    <NavLink to="/contact" >
                        Contact
                    </NavLink>
                </li>
                <li className='mb-8 hover:list-disc'>
                    <NavLink to="/blog" >
                        Blog
                    </NavLink>
                </li>
                <li className='mb-8 hover:list-disc'>
                    <NavLink to="/signin" >
                        <button className='px-3 rounded-xl border-solid border-[#ccd7e6] text-white border-[1px] hover:bg-bottom navMenu'>
                            Sign Up
                        </button>

                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavMenu
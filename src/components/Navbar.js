import React from 'react'
import { Link } from 'react-router-dom';
import { TbBrandOffice } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";




function Navbar({ clicked, isClicked }) {

  const handleClick = () => {
    isClicked(!clicked);
  }

  return (
    <>
      <div className='flex justify-between p-3 md:p-5 sticky top-0 bg-white'>
        <div className='flex items-center gap-2'>
          <TbBrandOffice fill='#008000' />
          <h2>WorkSpace</h2>
        </div>


        <ul className='hidden md:flex'>
          <li className='hover:text-green-900 mx-5'>
            <Link to='/spaces'>
              Spaces
            </Link>
          </li>
          <li className='hover:text-green-900 mx-5'>
            <Link to='/about us'>
              About us
            </Link>
          </li>
          <li className='hover:text-green-900 mx-5'>
            <Link to='/contact'>
              Contact
            </Link>

          </li>
        </ul>
        <ul className='hidden md:flex items-center'>
          <li className='mx-5 px-3 rounded-xl border-solid border-[#ccd7e6] border-[1px]'>
            <Link to='blog'>
              Blog
            </Link>
          </li>
          <li>
            <Link to='/signin'>
              <button className='float-right px-3 rounded-xl border-solid border-[#ccd7e6] border-[1px] hover:bg-bottom button'>
                Sign Up
              </button>
            </Link>
          </li>

        </ul>
        {!clicked ? <FaBars onClick={handleClick} className='md:hidden' /> : <FaTimes onClick={handleClick} />}




      </div>
    </>
  )
}

export default Navbar
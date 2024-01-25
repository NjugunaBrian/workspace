import React from 'react'
import { Link } from 'react-router-dom';
import { TbBrandOffice } from "react-icons/tb";


function Navbar() {
  return (
    <>
      <div className='flex justify-between p-5'>
        <div className='flex items-center gap-2'>
          <TbBrandOffice fill='#008000' />
          <h2>WorkSpace</h2>
        </div>
        <ul className='flex gap-10'>
          <li>
            <Link to='/spaces'>
              Spaces
            </Link>
          </li>
          <li>
            <Link to='/about us'>
              About us
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
        <ul className='flex gap-10'>
          <li className='px-3 rounded-xl border-solid border-[#ccd7e6] border-[1px]'>
            <Link to='blog'>
              Blog
            </Link>
          </li>
          <li>
            <Link to='/signin'>
              <button className='px-3 rounded-xl border-solid border-[#ccd7e6] border-[1px] hover:bg-bottom button'>
                Sign Up
              </button>
            </Link>
          </li>          
        </ul>
      </div>
    </>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className='flex justify-between p-5'>
        <h2>WorkSpace</h2>
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
          <li>
            <Link to='blog'>
              Blog
            </Link>
          </li>
          <li>
            <Link to='signin'>
              <button className='px-3 rounded-xl hover:bg-green-600'>
                Sign in
              </button>
            </Link>
          </li>
          <li>
            <Link to='login'>
              <button className='px-3 rounded-xl hover:bg-green-600'>
                Log in
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
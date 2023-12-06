import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Auth from '../context/Auth';




function Signin() {
    return (
        <>
            <div>
                <div className='flex flex-col justify-center items-center w-[100%] mt-10 gap-2'>
                    <div className='text-green-600 text-5xl font-bold'>Sign Up</div>
                    <div className='w-[61px] h-[6px] bg-green-600 rounded-lg'></div>
                </div>
                <div className='flex flex-col justify-center items-center mt-8 gap-4'>
                    <div className='flex items-center h-10 w-80 bg-gray-200'>
                        <FaRegUser />
                        <input id='name' type='text' placeholder='Name' className='bg-transparent outline-none placeholder: mx-2' required />
                    </div>
                    <div className='flex items-center h-10 w-80 bg-gray-200'>
                        <MdOutlineMailOutline />
                        <input id='email' type='email' placeholder='Email' className='bg-transparent outline-none placeholder: mx-2' required />
                    </div>
                    <div className='flex items-center h-10 w-80 bg-gray-200'>
                        <RiLockPasswordLine />
                        <input id='password' type='password' placeholder='Password' className='bg-transparent outline-none placeholder: mx-2' required />

                    </div>
                    <div>
                        <button className='rounded h-10 w-80 bg-green-600 px-4 py-2'>Sign Up</button>
                    </div>

                </div>
                <Auth />

            </div>
        </>
    )
}

export default Signin
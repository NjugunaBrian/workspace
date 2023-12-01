import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";




function Signin() {
    return (
        <>
            <div className='m-auto mt-28 bg-[#fff] pb-7'>
                <div className='flex flex-col justify-center items-center w-[100%] mt-7 gap-2'>
                    <div className='text-green-600 text-5xl font-bold'>Sign Up</div>
                        <div className='w-[61px] h-[6px] bg-green-600 rounded-lg'></div>
                </div>
                <div className='flex flex-col justify-center items-center mt-12 gap-6'>
                    <div className='flex items-center m-auto w-80 bg-gray-200'>
                    <FaRegUser />
                        <input type='text' placeholder='Name' className='bg-transparent outline-none placeholder: mx-2' />
                    </div>
                    <div className='flex items-center m-auto w-80 bg-gray-200'>
                        <MdOutlineMailOutline />
                        <input type='email' placeholder='Email' className='bg-transparent outline-none placeholder: mx-2' />
                    </div>
                    <div className='flex items-center m-auto w-80 bg-gray-200'>
                        <RiLockPasswordLine />
                        <input type='password' placeholder='Password' className='bg-transparent outline-none placeholder: mx-2' />

                    </div>
                    <div>
                        <button className='rounded-2xl bg-green-600 px-4 py-2'>Sign Up</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Signin
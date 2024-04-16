import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Auth } from '../context/Auth';
import { doCreateUserWithEmailAndPassword } from '../context/Auth';



function Signin() {
    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    


    const onSubmit = async(e) => {
        e.preventDefault();
        await doCreateUserWithEmailAndPassword(email, password)

    } 

    return (
        <>
            


            <form onSubmit={onSubmit}>
                <div className='flex flex-col justify-center items-center w-[100%] mt-10 gap-2'>
                    <div className='text-green-600 text-5xl font-bold'>Sign Up</div>
                    <div className='w-[61px] h-[6px] bg-green-600 rounded-lg'></div>
                </div>
                <div className='flex flex-col justify-center items-center mt-8 gap-4'>
                    <div className='flex items-center h-10 w-80 bg-gray-200'>
                        <FaRegUser />
                        <input id='name' type='text' autoComplete='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='bg-transparent outline-none placeholder: mx-2' required />
                    </div>
                    <div className='flex items-center h-10 w-80 bg-gray-200'>
                        <MdOutlineMailOutline />
                        <input id='email' type='email' autoComplete='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='bg-transparent outline-none placeholder: mx-2' required />
                    </div>
                    <div className='flex items-center h-10 w-80 bg-gray-200'>
                        <RiLockPasswordLine />
                        <input id='password' type='password' autoComplete='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='bg-transparent outline-none placeholder: mx-2' required />

                    </div>
                    <div>
                        <button className='rounded h-10 w-80 bg-green-600 px-4 py-2'>Sign Up</button>
                    </div>
                    <div>
                        <NavLink to='/login'>
                            <button className='rounded h-10 w-80 bg-sky-600 px-4 py-2' title='Log In For a Returning User' type='button'>Log In</button>
                        </NavLink>
                    </div>

                </div>
                <Auth />

            </form>
        </>
    )
}

export default Signin
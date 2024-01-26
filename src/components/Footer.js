import React from 'react';
import { Link } from 'react-router-dom';
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandOffice } from "react-icons/tb";





function Footer() {
    return (
        <>
            <section className='bg-zinc-900 p-5 text-white'>
                <div className='max-w-4 mx-2 my-20 max-w-2'>
                    <h1 className='capital text-5xl font-bold'>LET'S WORK TOGETHER </h1>
                    <Link to='/signin'>
                        <FaSquareArrowUpRight className='ml-44 -mt-5' />
                    </Link>

                </div>
                <div>
                    <div className='flex justify-between items-center font-light m-9 opacity-75'>
                        <ul>
                            <li className='text-stone-300 mb-2'>Write to us</li>
                            <li>brian@designs.com</li>
                            <li>+254710268389</li>
                        </ul>
                        <ul>
                            <li className='text-stone-300 mb-2'>Meet Us</li>
                            <li>Via de Kenyatta 43844-00100</li>
                            <li>Nairobi</li>
                        </ul>
                        <ul className='flex gap-2'>
                            <li><a><FaXTwitter /></a></li>
                            <li><FaInstagram /></li>
                            <li><a href='https://linkedin.com/in/brian-njuguna-3a08aa272'><CiLinkedin /></a></li>
                        </ul>

                    </div>

                    <hr className='bg-gray-400 opacity-25' />

                </div>
                <div className='m-2 items-center'>
                <TbBrandOffice  />
                </div>



            </section>
        </>
    )
}

export default Footer
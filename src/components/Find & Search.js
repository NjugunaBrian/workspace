import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";



function FindSearch() {
  return (
    <>
      <section className='px-32 py-12'>
        <div className='text-center my-0 mx-auto max-w-3xl leading-6'>
          <h2 className='text-6xl font-semi-bold'>Find a WorkSpace in <span className='text-green-600'>Nairobi </span></h2>
        </div>
        <div className='flex justify-center items-center gap-2 m-20'>
          <IoLocationOutline />
          <form >
            <input className='outline-none p-2' placeholder='Search for a location' />
          </form>
          <button className='rounded-full bg-green-600 p-2'>
          <IoSearch />
          </button>
        </div>
      </section>
    </>
  )
}

export default FindSearch
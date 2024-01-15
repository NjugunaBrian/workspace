import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";




function FindSearch() {

  const [bookTime, setBookTime] = useState('');

  const handleBookTime = (e) => {
    setBookTime(e.target.value);
  }

  return (
    <>
      <section className='px-32 py-12'>
        <div className='text-center my-0 mx-auto max-w-3xl leading-6'>
          <h2 className='text-6xl font-semi-bold'>Find a WorkSpace in <span className='text-green-600'>Nairobi </span></h2>
        </div>
        <div className='flex justify-center items-center gap-2 mt-20'>
          <IoLocationOutline />
          <input className='outline-none p-2' placeholder='Search for a location' />          
          <button className='rounded-full bg-green-600 p-2'>
            <IoSearch />
          </button>
        </div>
        <div className='flex flex-col justify-center items-center mt-5'>
          <label className="text-base flex" htmlFor='picktime'>
            <IoCalendarOutline /> &nbsp; Book a Date{" "}
            <b>*</b>
          </label>
          <input
            className='flex justify-between outline-none px-12 mt-3 font-light border-solid border-[#ccd7e6] border-[1px]'
            id="booktime"
            value={bookTime}
            onChange={handleBookTime}
            type="date"
          ></input>


        </div>
      </section>
    </>
  )
}

export default FindSearch
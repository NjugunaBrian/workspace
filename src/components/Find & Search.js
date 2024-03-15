import React, { useState } from 'react'
import { IoLocationOutline } from "react-icons/io5";




function FindSearch() {

  const [bookTime, setBookTime] = useState('');

  const handleBookTime = (e) => {
    setBookTime(e.target.value);
  }

  return (
    <>
      <section className='px-16 md:px-32 py-12'>
        <div className='text-center my-0 mx-3 md:max-w-48 leading-6'>
          <h2 className='text-6xl font-semi-bold'>Find a WorkSpace in <span className='text-green-600 font-black'>Nairobi </span></h2>
        </div>
        <div className='flex justify-center items-center mt-20 gap-1 md:gap-6'>
          <div className='bg-green-600 flex justify-center items-center rounded outline-none p-1 md:p-2 border-solid border-[#ccd7e6] border-[1px]'>
            <IoLocationOutline />
            <input className='placeholder:text-black bg-transparent outline-none mx-1 md:mx-2' type="text" placeholder='Search for a location' />
          </div>
          <div className='rounded outline-none px-4 py-2 font-light border-solid border-[#ccd7e6] border-[1px]'>
            <input
              className='flex justify-between text-sm text-gray-500 bg-transparent outline-none'
              id="booktime"
              value={bookTime}
              onChange={handleBookTime}
              type="date"
            ></input>
          </div>
        </div>



      </section>
    </>
  )
}

export default FindSearch
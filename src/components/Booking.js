import React from 'react'
import modelOffice from "../images/office.png";

const Booking = () => {
    return (
        <>
            <section>
                <div className='flex flex-col'>
                    <div className='text-center mx-0 my-auto mt-5'>
                        <h2 className='text-4xl font-black tracking-wider mx-0 mt-5 mb-10'>Affordable and Spacious Work Spaces</h2>
                    </div>
                    <div className='flex flex-col mx-0 my-auto text-center max-w-6xl mb-16 leading-6 text-zinc-900'>
                        <img className='h-auto w-12 m-auto mb-3' src={modelOffice} alt="office_png"/>
                        <p className='px-40 whitespace-break-spaces'>We work together with the best providers of work offices.
                           With our intuitive interface  and powerful search tools, you simply look for the place that is convenient either by location or amenities.
                           In this view, we contribute to a sustainable environment because we have to travel less.
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Booking
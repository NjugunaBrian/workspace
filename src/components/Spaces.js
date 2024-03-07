import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { spaces } from './officeData';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper";




const Spaces = () => {
    return (
        <section className='px-4 py-4'>
            <Swiper
                effect={'coverflow'}
                grabCursor={ true }
                centeredSlides={ true }
                loop={ true }
                slidesPerView={3}
                coverflowEffect={{

                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,

                }}
               
                className='py-8 px-0 relative'
            >
                {spaces.map((space) => (
                    <SwiperSlide className='w-[37rem] h-[42rem] relative' key={space.name}>
                    <img src={space.img} alt={space.name} className='h-64 w-64 rounded-lg object-cover' />
                </SwiperSlide>
                
                ))}
                

                

            </Swiper>

        </section>


    )
}

export default Spaces
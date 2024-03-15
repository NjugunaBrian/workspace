import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { spaces } from './officeData';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";




const Spaces = () => {
    return (
        <section className='px-2 md:px-4 py-4'>
            <Swiper
                effect={'coverflow'}
                grabCursor={ true }
                centeredSlides={ true }
                loop={ true }
                slidesPerView={2}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                breakpoints={{
                    640:{
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
               
                className='py-8 px-0 relative'
            >
                {spaces.map((space) => (
                    <SwiperSlide className='w-[34rem] h-[42rem] relative' key={space.name}>
                    <img src={space.img} alt={space.name} className='h-64 w-64 rounded-lg object-cover' />
                </SwiperSlide>
                
                ))}
                

                

            </Swiper>

        </section>


    )
}

export default Spaces
import React from 'react';
import MonaLisa from "../images/Mona Lisa Gangsta.png";
import Morales from "../images/Miles_morales.jpg";
import Daenerys from "../images/Daenerys Targaryen.jpg";
import Kanye from "../images/Kanye_West.jpg";
import SpongeBob from "../images/SpongeBob_SquarePants_character.png";
import Naruto from "../images/Naruto Character.jpg";

const Testimonials = () => {
    return (
        <>
            <section className='py-12 bg-gray-200'>
                <div>
                    <div className='text-center mb-2 md:mb-0'>
                        <h2 className='text-4xl font-black'>Client Testimonials</h2>
                    </div>
                    <div className='grid grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-3 gap-1 md:gap-2'>
                        <div className='bg-white w-40 md:w-80 shadow-lg rounded-md m-3 md:m-5'>
                            <div className='flex flex-col p-2'>
                                <div className='flex gap-4 m-2'>
                                    <img className='h-auto w-12 rounded-full' src={MonaLisa} alt="Gangsta Monalisa" />
                                    <span>
                                        <h4>Mona Lisa</h4>
                                        <p className='text-slate-700'>Freelancer</p>
                                    </span>
                                </div>
                                <div className='m-2'>
                                    <p>
                                        I have been doing my work in WorkSpace and one thing I can tell you, I am a sight to see in those offices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white w-40 md:w-80 shadow-lg rounded-md m-3 md:m-5'>
                            <div className='flex flex-col p-2'>
                                <div className='flex gap-4 m-2'>
                                    <img className='h-12 md:h-auto w-12 rounded-full' src={Morales} alt="Gangsta Monalisa" />
                                    <span>
                                        <h4>Miles Morales</h4>
                                        <p className='text-slate-700'>Crime-fighting Teenager</p>
                                    </span>
                                </div>
                                <div className='m-2'>
                                    <p>
                                        Ahh, juggling between school, work and being a vigilante is not easy, you know. Thanks for coming to Queens.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white w-40 md:w-80 shadow-lg rounded-md m-3 md:m-5'>
                            <div className='flex flex-col p-2'>
                                <div className='flex gap-4 m-2'>
                                    <img className='h-16 w-12 rounded-full' src={Daenerys} alt="Gangsta Monalisa" />
                                    <span>
                                        <h4>Daenerys <span className='truncate md:text-clip'>Targaryen</span></h4>
                                        <p className='text-slate-700'>Mother of Dragons</p>
                                    </span>
                                </div>
                                <div className='m-2'>
                                    <p>
                                        Drogon can get a bit of rest now.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white w-40 md:w-80 shadow-lg rounded-md m-3 md:m-5'>
                            <div className='flex flex-col p-2'>
                                <div className='flex gap-4 m-2'>
                                    <img className='h-11 md:h-auto w-12 rounded-full' src={SpongeBob} alt="Gangsta Monalisa" />
                                    <span>
                                        <h4>SpongeBob</h4>
                                        <p className='text-slate-700'>Blue-collar Cartoon</p>
                                    </span>
                                </div>
                                <div className='m-2'>
                                    <p>
                                        Sometimes I just want to escape the monotony that is my pineapple.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='row-start-3/4 row-span-1/4 bg-white w-40 md:w-80 shadow-lg rounded-md m-3 md:m-5'>
                            <div className='flex flex-col p-2'>
                                <div className='flex gap-4 m-2'>
                                    <img className='h-16 w-12 rounded-full' src={Kanye} alt="Gangsta Monalisa" />
                                    <span>
                                        <h4>Kanye West</h4>
                                        <p className='text-slate-700'>Musician</p>
                                    </span>
                                </div>
                                <div className='m-2'>
                                    <p>
                                        When I want to quiet my demons and listen to the beats I laboured to make, WorkSpace is my go-to.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white w-40 md:w-80 shadow-lg rounded-md m-3 md:m-5'>
                            <div className='flex flex-col p-2'>
                                <div className='flex gap-4 m-2'>
                                    <img className='h-auto w-12 rounded-full' src={Naruto} alt="Gangsta Monalisa" />
                                    <span>
                                        <h4>Naruto</h4>
                                        <p className='text-slate-700'>Anime</p>
                                    </span>
                                </div>
                                <div className='m-2'>
                                    <p>
                                        As an orphan, WorkSpace is a place I can call home.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

        </>

    )
}

export default Testimonials
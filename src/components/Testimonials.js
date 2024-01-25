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
                    <div className='text-center'>
                        <h2 className='text-4xl font-black'>Client Testimonials</h2>
                    </div>
                    <div className='grid grid-rows-2 grid-cols-3 gap-2'>
                        <div className='bg-white w-80 shadow-lg rounded-md m-5'>
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
                                        I have been working through the offices in WorkSpace and one thing I can tell you, I am a sight to see in those offices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white w-80 shadow-lg rounded-md m-5'>
                            <div className='flex flex-col p-2'>
                                <div className='flex gap-4 m-2'>
                                    <img className='h-auto w-12 rounded-full' src={Morales} alt="Gangsta Monalisa" />
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
                        <div className='bg-white w-80 shadow-lg rounded-md m-5'>
                            <div className='flex flex-col p-2'>
                                <div className='flex gap-4 m-2'>
                                    <img className='h-auto w-12 rounded-full' src={Daenerys} alt="Gangsta Monalisa" />
                                    <span>
                                        <h4>Daenerys Targaryen</h4>
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
                        <div className='bg-white w-80 shadow-lg rounded-md m-5'>
                            <div className='flex flex-col p-2'>
                                <div className='flex gap-4 m-2'>
                                    <img className='h-auto w-12 rounded-full' src={SpongeBob} alt="Gangsta Monalisa" />
                                    <span>
                                        <h4>SpongeBob Squarepants</h4>
                                        <p className='text-slate-700'>Blue-collar Cartoon</p>
                                    </span>
                                </div>
                                <div className='m-2'>
                                    <p>
                                        Drogon can get a bit of rest now.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='cols-span-1/4 bg-white w-80 shadow-lg rounded-md m-5'>
                            <div className='flex flex-col p-2'>
                                <div className='flex gap-4 m-2'>
                                    <img className='h-auto w-12 rounded-full' src={Kanye} alt="Gangsta Monalisa" />
                                    <span>
                                        <h4>Kanye West</h4>
                                        <p className='text-slate-700'>Musician</p>
                                    </span>
                                </div>
                                <div className='m-2'>
                                    <p>
                                        Drogon can get a bit of rest now.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white w-80 shadow-lg rounded-md m-5'>
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
                                        Drogon can get a bit of rest now.
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
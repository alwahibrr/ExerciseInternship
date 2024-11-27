import React from "react";
import exp from "./logo-horizontal.svg"

export default function Experience() {
    return (
        <section id='experience' className='relative overflow-hidden text-white body-font flex flex-col'>
            <div className='container mx-auto flex px-12 py-24 flex-wrap items-center'>
                <div data-aos="fade-up" data-aos-delay="500" className='flex flex-col md:w-1/2 pl-24'>
                    <nav className='flex flex-wrap list-none -mb-1'>
                        <li className='lg:w-1/2 mb-4 w-1/2'>
                            <img src={exp} className='rounded-3xl w-[800px] h-[300px]' />
                        </li>
                    </nav>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className='md:w-1/2 md:pr-12 md:py-8 mb-10 md:mb-0 pd-10'>
                    <h1 data-aos="fade-up" data-aos-delay="400" className='text-3xl font-bold mb-8'>
                        Experience
                    </h1>
                    <h2 data-aos="fade-up" data-aos-delay="400" className='text-2xl font-bold mb-2'>
                        Jan 2024 - Mar 2024
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="500" className='leading-relaxed text-base'>
                        My first experience is not on programming project. I'm working as a daily worker at Macanudo Club Jakarta. I'm working as a waiter and housekeeper.
                        It's worth the essence by seeing peoples emotions while working at Macanudo Club.
                    </p>
                </div>
                
            </div>
        </section>
    );
}
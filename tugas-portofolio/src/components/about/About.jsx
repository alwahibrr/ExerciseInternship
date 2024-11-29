import React from 'react';
import me from './me1.jpg';

export default function About() {
    return (
        <section id='about' className='relative overflow-hidden text-white body-font flex flex-col'>
            <div className='container mx-auto flex px-12 py-24 flex-wrap items-center'>
                <div data-aos="fade-up" data-aos-delay="100" className='md:w-2/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-white'>
                    <h1 data-aos="fade-up" data-aos-delay="400" className='text-3xl font-bold mb-8'>
                        About Me
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="500" className='leading-relaxed text-base'>
                        My full name is Alwahib Raffi Raihan, you can call me Wahib. I'm from Kota Bandar Lampung city that located at Lampung Province, Sumatera, Indonesia.
                        I'm interested in programming languages, though i'm not good enough at programming but i'd like to learn it. I'm a hustle person and i'd like to try
                        new things without any hesitation. I'm a person who always looking for my priority scale so i can make my own time management efficient.
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="500" className='flex flex-col md:w-1/3 pl-24'>
                    <nav className='flex flex-wrap list-none -mb-1'>
                        <li className='lg:w-1/2 mb-4 w-1/3'>
                            <img src={me} className='rounded-3xl w-auto h-60' />
                        </li>
                    </nav>
                </div>
            </div>
        </section>
    )
}
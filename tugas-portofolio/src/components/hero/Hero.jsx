import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import me from './me.jpg';

export default function Hero() {
    return (
        <div className="py-24 -mt-20">
            <div className="overflow-hidden md: h-96 md: w-96 absolute rounded-full top-20 right-36">
                <img data-aos="fade" data-aos-delay="250" src={me} className='' />
            </div>
            <NavigationBar />
            <section id='home' data-aos="fade-up" data-aos-delay="100" className='text-white body-font z-10'>
                <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                    <div className=' md:w-1/2 lg:pr-12 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                        <h1 className='text-3xl mb-4 font-bold'>Hello!</h1>
                            <p className='text-2xl'>My name is Wahib. I'm from Indonesia and I'm an Undergraduate Computer Engineering student at University of Indonesia.</p>
                        <div className='flex justify-center'>    
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
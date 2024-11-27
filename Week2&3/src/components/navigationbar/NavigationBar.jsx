import React from "react";
import navlogo from "./navigationbar-min.png"

export default function NavigationBar() {
    const listNavigationBar = [
        {
            name: "Home",
            link: "#home"
        },
        {
            name: "About",
            link: "#about"
        },
        {
            name: "Experience",
            link: "#experience"
        },
        {
            name: "Projects",
            link: "#projects"
        },
        {
            name: "CV",
            link: "#cv"
        },
    ]
    return (
       <header data-aos="fade-up" data-aos-delay="100" className="test-gray-600 body-font z-10">
            <div className="container flex justify-between items-center p-4 text-white">
                <div className="flex items-center">
                    <img src={navlogo} className="mr-3 w-[40px] h-[40px]" />
                    <a className="text-3xl font-bold">Wahib</a>
                </div>
                <nav className="md:ml-auto test-white text-base md:mr-auto flex flex-wrap items-center justify-center">
                    {
                    listNavigationBar.map((item, index) => (
                        <a key={index} href={item.link} className="mr-8 hover:text-gray-300">
                            {item.name}
                        </a>
                        ))
                    }
                    <button className="inline-flex items-center border-0 py-2 px-2 focus:outline-none hover:bg-gray-900 rounded text-base">
                        <a href="#contact" className="text-white">Contact Me</a>
                    </button>
                </nav>
                
            </div>    
        </header>
    )
}
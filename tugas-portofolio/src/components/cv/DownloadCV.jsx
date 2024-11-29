import React from "react";
import CV from "./Alwahib-CV.pdf";

export default function downloadCV() {
    return (
        <section id="cv">
            <div data-aos="fade-up" data-aos-delay="400" className="text-white mx-auto p-4 text-3xl font-bold flex justify-center">
                For more information. My CV can be downloaded&nbsp;
                <button className="underline text-white hover:text-gray-400">
                    <a href={CV} download className="flex items-center font-bold">
                        here
                    </a>
                </button>
            </div>
            <p data-aos="fade-up" data-aos-delay="400" className="text-white mx-auto p-4 text-base flex justify-center -mt-5 -mb-2">or down below</p>
            <button data-aos="fade-up" data-aos-delay="400" className="items-center flex justify-center mx-auto mt-2 mb-32 border-0 py-2 px-8 hover:bg-sky-700 text-white hover:text-black rounded-3xl text-[20px]">
                <a href={CV} download className="flex items-center font-bold text-2xl">
                    Download CV
                </a>
            </button>
        </section>
    );
}
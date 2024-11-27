import React from "react";

export default function Contact() {
    const getElement = (identifier = "") => document.querySelector(identifier);

    function verifySubmission(event) {
        event.preventDefault(); // Prevent the default form submission

        let subjectElement = getElement("input[type='subject']").value;
        let messageElement = getElement("textarea").value;
        let nameElement = getElement("input[type='name']").value;
        let emailElement = getElement("input[type='email']").value;

        if (subjectElement && messageElement && nameElement && emailElement) {
            let body = encodeURIComponent("From: " + nameElement + "\nEmail: " + emailElement + "\n\n" + messageElement);
            window.location.href = "mailto:alwahib.work@gmail.com?subject=" + subjectElement + "&body=" + body;
        } else {
            alert("Please fill in all required fields.");
        }
    }
    
    return (
        <section id="contact">
            <div>
                <h1 data-aos="fade-up" data-aos-delay="350" className='text-white mx-auto p-4 text-3xl font-bold flex justify-center mb-4'>
                    Contact
                </h1>
                <div data-aos="fade-up" data-aos-delay="350" className="mx-auto bg-blue-950 flex justify-center md:w-[830px] md:py-8 md:mb-36 rounded-3xl">
                    <form className="mx-auto flex flex-col justify-center space-y-8">
                        <input data-aos="fade-up" data-aos-delay="400" className="rounded-xl py-2 px-4 bg-[#031224] text-white" type="name" placeholder="Your Name" required/>
                        <input data-aos="fade-up" data-aos-delay="400" className="rounded-xl py-2 px-4 bg-[#031224] text-white" type="email" placeholder="Your Email" required/>
                        <input data-aos="fade-up" data-aos-delay="400" className="rounded-xl py-2 px-4 bg-[#031224] text-white" type="subject" placeholder="Subject" required/>
                        <textarea data-aos="fade-up" data-aos-delay="400" 
                        className="rounded-xl px-4 py-2 w-[780px] h-[200px] bg-[#031224] text-white" placeholder="Message" required>
                        </textarea> 
                        <button 
                        onClick={verifySubmission}
                        className="items-center flex justify-center mx-auto mt-2 mb-32 border-0 py-2 px-8 hover:bg-sky-700 text-white hover:text-black rounded-3xl text-[20px] font-bold">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
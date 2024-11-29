import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import { useEffect } from 'react'
import Project from './components/projects/Projects'
import Contact from './components/contact/Contact'
import DownloadCV from './components/cv/DownloadCV';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main>
      <div className='bg-[#0a2647]'>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <h1 data-aos="fade-up" data-aos-delay="400" className='text-white mx-auto p-4 text-3xl font-bold mb-32 flex justify-center'>
          My Projects
        </h1>
        <Project />
      </div>
      <div>
        <DownloadCV />
      </div>
      <div>
        <Contact />
      </div>
    </main>
    
  )
}

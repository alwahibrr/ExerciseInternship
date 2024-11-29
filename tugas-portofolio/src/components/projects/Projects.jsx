// ProjectExperience.js
import React from 'react';

const alerts = () => {
  alert("This Website is My Portofolio.");
}
const Project = ({ projectName, description, programminglanguage, link }) => {
  return (
    <div className="bg-blue-950 rounded-2xl shadow-md p-4 mb-4 -mt-24 text-white">
      <h3 className="text-lg font-bold">{projectName}</h3>
      <p className="text-white">{description}</p>
      <p className="text-white">Programming Language: {programminglanguage.join(', ')}</p>
      <p className="text-white">
        Link to project:
        <a onClick={alerts} href={link} className="text-blue-300 hover:text-blue-100">
          {projectName}
        </a>
      </p>
    </div>
  );
};

const ProjectExperience = () => {
  const projects = [
    {
      projectName: 'Project Portofolio',
      description: 'This is my first project, it is a portofolio website.',
      programminglanguage: ['HTML', 'CSS', 'JavaScript'],
      link: '',
    },
  ];

  return (
    <section data-aos="fade-up" data-aos-delay="400" id='projects' className='mb-10 mt-24'>
      <div id="project-experience" className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectExperience;
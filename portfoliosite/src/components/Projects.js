import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Sign Language Detector', 
      description: 'First year team project using opencv, mediapipe and scikit',
      link: 'https://github.com/Vvorx/SignLanguageDetector' 
    },
    { id: 2, 
      title: 'Y86 Disassembler', 
      description: 'C Project for disassembling Y86 machine code',
      link: 'https://github.com/Vvorx/Y86-Disassembler'
    },
    { id: 3, 
      title: 'Portfolio Website', 
      description: 'This website! (Learning React on the go :D)',
      link: 'https://github.com/Vvorx/Portfolio'}, 
  ];


  
    return (
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              className="project-card"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    );
  };
  
export default Projects;

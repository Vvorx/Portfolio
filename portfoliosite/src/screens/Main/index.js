import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './index.css';

export default function Home() {

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
          link: 'https://github.com/Vvorx/Portfolio'
        }, 
    ];


    return (
        <div>
            <section id="hero" className="hero">
            <div className="hero-content">
                <h1>Hi, I'm Igor</h1>
                <p>I am a Second year computer science student, <br/> Currently studying at the University of Huddersfield.</p>
                <button>View My Work</button>
            </div>
            </section>

            <section id="about" className="about">
                <h2>About Me</h2>
                <p>
                Hey there! I’m a second-year student at the University of Huddersfield, where I’m constantly exploring how technology can solve problems and make life a little easier. Whether it’s coding, tinkering with new tools, or just figuring out how to automate the small stuff, I love finding creative ways to use tech to simplify everyday tasks. <br />
                <br /> When I’m not buried in code or coursework, you’ll probably find me at the gym, reading a book or trying out some new tea.
                </p>
            </section>

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

            <section id="contact" className="contact">
                <h2>Contact Me</h2>
                <div className="contact-links">
                <a href="https://github.com/vvorx" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                </a>
                <a href="https://linkedin.com/in/igorkopka" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="mailto:igorkopka2@gmail.com">
                    <FaEnvelope /> Email
                </a>
                </div>
            </section>
        </div>
    );
};
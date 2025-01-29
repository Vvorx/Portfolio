import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
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
  );
};

export default Contact;
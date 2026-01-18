import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="hero-name"
        >
          MEET<br />THAKUR
        </motion.h1>

        <motion.div 
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="hero-subtitle">FULL STACK DEVELOPER</span>
        </motion.div>

        <motion.p 
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Building streamlined, scalable, and secure digital experiences.<br/>
          Passionate about algorithms and creating sleek web applications.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a href="#projects" className="btn primary-btn">View Work</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </motion.div>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <a href="https://github.com/MeetThakur" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/meetthakur/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
        </motion.div>
      </div>

      <motion.div 
        className="hero-bg-elements"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="watermark">DEVELOPER</div>
        <div className="geometric-shape"></div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span>SCROLL</span>
        <div className="line"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

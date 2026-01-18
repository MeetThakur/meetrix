import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hero-greeting"
        >
          Hi there, I'm
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="hero-name"
        >
          Meet Thakur
        </motion.h1>

        <motion.div 
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span>I am a </span>
          <span className="typewriter">
            <Typewriter
              words={['Web Developer', 'Competitive Programmer', 'Tech Enthusiast']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.div>

        <motion.p 
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Building streamlined, scalable, and secure digital experiences. 
          Passionate about algorithms and creating sleek web applications.
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a href="#contact" className="btn primary-btn">Contact Me</a>
          <a href="#projects" className="btn secondary-btn">View Work</a>
        </motion.div>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {/* Replace # with actual links later */}
          <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
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

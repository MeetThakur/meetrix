import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        
        {/* Left Side: Content */}
        <div className="hero-text-side">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-badge"
          >
            <span className="availability-dot"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1 
            className="hero-heading"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Building the <br />
            Digital Future
          </motion.h1>
          
          <motion.p 
            className="hero-subtext"
            initial={{ y: 20, opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Hi, I'm <strong>Meet</strong>. Transforming ideas into reality through technology.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a href="https://github.com/MeetThakur" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/meetthakur/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </motion.div>
        </div>

        {/* Right Side: Visual */}
        <div className="hero-visual-side">
          <motion.div 
            className="glass-stack-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="glass-card card-1"></div>
            <div className="glass-card card-2"></div>
            <div className="glass-card card-3">
              <div className="code-snippet">
                <span className="code-line"><span className="keyword">const</span> future = <span className="keyword">new</span> <span className="entity">Builder</span>();</span>
                <span className="code-line">future.<span className="function">create</span>(<span className="string">"Impact"</span>);</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
      
      {/* Background Ambience */}
      <div className="hero-glow"></div>
    </section>
  );
};

export default Hero;

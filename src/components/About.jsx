import React from 'react';
import { motion } from 'framer-motion';
import SectionPartials from './SectionPartials';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <SectionPartials index="01" title="ABOUT" align="left" />
      
      <div className="about-container-centered">
        
        <motion.div 
          className="about-content-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-header-center">
             <h2 className="section-title">About Me</h2>
          </div>

          <p className="lead-text">
             I am <strong>Meet</strong>, a passionate Computer Science undergraduate solving complex problems with code. My journey is driven by curiosity and a relentless desire to build.
          </p>

          <div className="about-bio">
            <p>
              I specialize in full-stack web development with a strong foundation in data structures. Whether it's crafting pixel-perfect interfaces or optimizing backend logic, I love the entire lifecycle of software creation.
            </p>
            <p>
              Beyond the screen, I explore the intersections of technology, design, and user psychology to create digital products that feel inevitable.
            </p>
          </div>

          <div className="signature">
             Meet
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;

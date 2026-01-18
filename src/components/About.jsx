import React from 'react';
import { motion } from 'framer-motion';
import SectionPartials from './SectionPartials';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <SectionPartials index="01" title="STORY" align="left" />
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
      </motion.div>

      <div className="about-content">
        <motion.div 
          className="about-image glass"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Placeholder for user image */}
          <div className="img-placeholder">
            <span>Meet Image</span>
          </div>
        </motion.div>

        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Hello! I'm <strong>Meet Thakur</strong>, a passionate Computer Science undergraduate with a knack for solving complex problems and building intuitive digital solutions. My journey in tech is driven by curiosity and a relentless desire to learn.
          </p>
          <p>
            I specialize in full-stack web development and have a strong foundation in data structures and algorithms. Whether it's crafting beautiful user interfaces or optimizing backend logic, I love every aspect of the development lifecycle.
          </p>
          <p>
            When I'm not coding, you can find me competing on coding platforms, exploring the latest tech trends, or gaming.
          </p>
          
          <div className="about-stats">
            <div className="stat-item glass">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item glass">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item glass">
              <h3>500+</h3>
              <p>Problems Solved</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

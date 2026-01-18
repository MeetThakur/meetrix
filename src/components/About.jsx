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
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="lead-paragraph">
            <span className="drop-cap">H</span>ello! I'm <strong>Meet Thakur</strong>, a passionate Computer Science undergraduate with a knack for solving complex problems and building intuitive digital solutions. My journey in tech is driven by curiosity and a relentless desire to learn.
          </p>
          <p>
            I specialize in full-stack web development and have a strong foundation in data structures and algorithms. Whether it's crafting beautiful user interfaces or optimizing backend logic, I love every aspect of the development lifecycle.
          </p>
          <p>
            When I'm not coding, you can find me competing on coding platforms, exploring the latest tech trends, or gaming.
          </p>
          
          <div className="signature">
            Meet Thakur
          </div>
        </motion.div>

        <motion.div 
          className="about-stats-minimal"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="stat-row">
            <span className="stat-num">2+</span>
            <span className="stat-label">Years of<br/>Experience</span>
          </div>
          <div className="stat-row">
            <span className="stat-num">10+</span>
            <span className="stat-label">Projects<br/>Shipped</span>
          </div>
          <div className="stat-row">
            <span className="stat-num">500+</span>
            <span className="stat-label">Problems<br/>Solved</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

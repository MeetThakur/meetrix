import React from 'react';
import { motion } from 'framer-motion';
import SectionPartials from './SectionPartials';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <SectionPartials index="01" title="STORY" align="left" />
      <div className="about-container">
        {/* Left Side: Narrative */}
        <div className="about-text-side">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About Me</h2>
          </motion.div>

          <motion.div 
            className="about-bio"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="lead-text">
              Hello! I'm <strong>Meet</strong>, a passionate Computer Science undergraduate solving complex problems with code. My journey is driven by curiosity and a relentless desire to build.
            </p>
            <p>
              I specialize in full-stack web development with a strong foundation in data structures. Whether it's crafting pixel-perfect interfaces or optimizing backend logic, I love the entire lifecycle of software creation.
            </p>
            
            <div className="signature">Meet</div>
          </motion.div>
        </div>

        {/* Right Side: Visual Stats Card */}
        <div className="about-visual-side">
          <motion.div 
            className="about-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card-glass-layer"></div>
            <div className="card-content">
              <h3 className="card-heading">Beyond Code</h3>
              <ul className="hobbies-grid">
                <li>
                  <span className="icon">♟️</span>
                  <span>Chess Strategy</span>
                </li>
                <li>
                  <span className="icon">📚</span>
                  <span>Tech Reading</span>
                </li>
                <li>
                  <span className="icon">🏀</span>
                  <span>Basketball</span>
                </li>
              </ul>
              <div className="card-footer">
                <span>Based in New Delhi</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

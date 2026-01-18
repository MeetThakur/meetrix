import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from 'react-icons/fa';
import { SiFramer, SiTailwindcss, SiCplusplus, SiTypescript } from 'react-icons/si';
import SectionPartials from './SectionPartials';
import './Skills.css';

const Skills = () => {
  const skillsRow1 = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Java', icon: <FaJava /> },
  ];

  const skillsRow2 = [
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Framer', icon: <SiFramer /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Git', icon: null },
    { name: 'VS Code', icon: null },
  ];

  // Duplicate arrays for seamless loop
  const MarqueeRow = ({ items, direction = "left" }) => (
    <div className={`marquee-row ${direction}`}>
      <div className="marquee-content">
        {items.map((skill, index) => (
          <div key={index} className="skill-pill">
            {skill.icon && <span className="skill-icon">{skill.icon}</span>}
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
        {/* Duplicate for infinite effect */}
        {items.map((skill, index) => (
          <div key={`dup-${index}`} className="skill-pill">
            {skill.icon && <span className="skill-icon">{skill.icon}</span>}
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="skills-section" id="skills">
      <SectionPartials index="02" title="STACK" align="right" />
      
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Technical Arsenal</h2>
      </motion.div>

      <div className="marquee-container">
        <MarqueeRow items={skillsRow1} direction="left" />
        <MarqueeRow items={skillsRow2} direction="right" />
      </div>
    </section>
  );
};

export default Skills;

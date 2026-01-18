import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from 'react-icons/fa';
import { SiFramer, SiTailwindcss, SiCplusplus, SiTypescript } from 'react-icons/si';
import SectionPartials from './SectionPartials';
import './Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="skills" id="skills">
      <SectionPartials index="02" title="STACK" align="right" />
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Technical Arsenal</h2>
      </motion.div>

      <motion.div 
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Frontend Box */}
        <motion.div className="bento-box frontend-box" variants={itemVariants}>
          <h3>Frontend</h3>
          <div className="box-content">
            <div className="pill"><FaReact /> React</div>
            <div className="pill"><FaJs /> JavaScript</div>
            <div className="pill"><SiTypescript /> TypeScript</div>
            <div className="pill"><FaHtml5 /> HTML5</div>
            <div className="pill"><FaCss3Alt /> CSS3</div>
            <div className="pill"><SiTailwindcss /> Tailwind</div>
            <div className="pill"><SiFramer /> Framer</div>
          </div>
        </motion.div>

        {/* Backend Box */}
        <motion.div className="bento-box backend-box" variants={itemVariants}>
          <h3>Backend</h3>
          <div className="box-content">
             <div className="pill"><FaNodeJs /> Node.js</div>
             <div className="pill"><FaPython /> Python</div>
             <div className="pill"><FaJava /> Java</div>
             <div className="pill"><FaDatabase /> SQL</div>
          </div>
        </motion.div>

        {/* Tools/Languages Box */}
        <motion.div className="bento-box tools-box" variants={itemVariants}>
          <h3>Core & Tools</h3>
          <div className="box-content">
            <div className="pill"><SiCplusplus /> C++</div>
            <div className="pill">Git & GitHub</div>
            <div className="pill">VS Code</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;

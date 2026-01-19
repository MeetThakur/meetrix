import React from 'react';
import { motion } from 'framer-motion';
import SectionPartials from './SectionPartials';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      id: '01',
      title: 'FRONTEND',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'HTML5/CSS3']
    },
    {
      id: '02',
      title: 'BACKEND',
      skills: ['Node.js', 'Python', 'Java', 'SQL', 'C++', 'MongoDB']
    },
    {
      id: '03',
      title: 'TOOLS',
      skills: ['Git', 'VS Code', 'Postman', 'Docker', 'System Design']
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <SectionPartials index="02" title="STACK" align="right" />
      
      <div className="skills-content">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Technical Arsenal</h2>
        </motion.div>

        <div className="skills-grid">
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="column-header">
                <span className="column-id">{category.id}</span>
                <h3 className="column-title">{category.title}</h3>
              </div>
              <div className="skill-badges">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

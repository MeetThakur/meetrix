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
      
      <div className="skills-container-static">
        <div className="static-header">
           <h2 className="section-title">Technical Arsenal</h2>
        </div>

        <div className="static-grid">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              className="static-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="column-title">{category.title}</h3>
              <div className="column-content">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </div>
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

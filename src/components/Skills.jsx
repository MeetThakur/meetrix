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
      
      <div className="skills-container-strips">
        <div className="strips-header">
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle"> The tools and technologies I use to build the future.</p>
        </div>

        <div className="skills-strips">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-strip"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="strip-info">
                <span className="strip-id">{category.id}</span>
                <h3 className="strip-title">{category.title}</h3>
              </div>
              <div className="strip-skills">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="strip-pill">{skill}</span>
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

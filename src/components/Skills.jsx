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
      
      <div className="skills-container-bento">
        {/* Header - now centered or aligned to grid start */}
        <motion.div 
          className="bento-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">The tools and technologies I use to build the future.</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              className="bento-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bento-card-header">
                <span className="cat-id">{category.id}</span>
                <h3 className="cat-title">{category.title}</h3>
              </div>
              <div className="bento-content">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="bento-pill">
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

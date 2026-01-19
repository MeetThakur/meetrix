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
      
      <div className="skills-marquee-container">
        <div className="marquee-header">
           <h2 className="section-title">Technical Arsenal</h2>
        </div>

        {/* Marquee Row 1 (Left) */}
        <div className="marquee-wrapper">
          <div className="marquee-content scroll-left">
            {categories[0].skills.concat(categories[1].skills).map((skill, index) => (
               <span key={index} className="marquee-tag">{skill}</span>
            ))}
            {/* Duplicated for smooth loop */}
             {categories[0].skills.concat(categories[1].skills).map((skill, index) => (
               <span key={`dup-${index}`} className="marquee-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        {/* Marquee Row 2 (Right) */}
        <div className="marquee-wrapper">
          <div className="marquee-content scroll-right">
            {categories[2].skills.concat(['Figma', 'Linux', 'Vite', 'Redux', 'AWS']).map((skill, index) => (
               <span key={index} className="marquee-tag hollow">{skill}</span>
            ))}
             {categories[2].skills.concat(['Figma', 'Linux', 'Vite', 'Redux', 'AWS']).map((skill, index) => (
               <span key={`dup-${index}`} className="marquee-tag hollow">{skill}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

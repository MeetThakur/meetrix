import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionPartials from './SectionPartials';
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'Project Alpha',
      category: 'E-commerce',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop', // Placeholder high-res
      description: 'Full-scale e-commerce platform with Node.js',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Master',
      category: 'Productivity',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop',
      description: 'AI-powered task management app',
      link: '#'
    },
    {
      id: 3,
      title: 'AlgoVisualizer',
      category: 'Education',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
      description: 'Interactive algorithm visualization tool',
      link: '#'
    },
    {
      id: 4,
      title: 'Portfolio V1',
      category: 'Design',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop',
      description: 'Previous portfolio iteration',
      link: '#'
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <SectionPartials index="03" title="WORK" align="left" />
      
      <div className="projects-container-simple">
        <motion.div 
          className="simple-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Selected Work</h2>
        </motion.div>

        <div className="simple-project-grid">
          {projects.map((project, index) => (
            <motion.a 
              href={project.link}
              key={project.id}
              className="simple-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="simple-image-box">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="simple-content">
                <div className="simple-top">
                  <h3 className="simple-title">{project.title}</h3>
                  <span className="simple-year">{project.year}</span>
                </div>
                <p className="simple-desc">{project.category}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

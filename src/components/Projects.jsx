import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionPartials from './SectionPartials';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project Alpha',
      description: 'A full-scale e-commerce platform built with React and Node.js. Features include user auth, cart management, and payment gateway integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Master',
      description: 'An AI-powered productivity app that helps users organize tasks smartly. Built using Python and Flask with a React frontend.',
      tags: ['Python', 'Flask', 'React', 'OpenAI API'],
      github: '#',
      demo: '#'
    },
    {
      title: 'AlgoVisualizer',
      description: 'Interactive visualization tool for sorting and pathfinding algorithms. Great for learning data structures.',
      tags: ['JavaScript', 'HTML5', 'CSS3'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section className="projects" id="projects">
      <SectionPartials index="03" title="WORK" align="left" />
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Featured Projects</h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className={`project-card glass ${index === 0 ? 'featured-project' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="project-image">
              <div className="overlay"></div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /> Source</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Demo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

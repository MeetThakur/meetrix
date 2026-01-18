import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionPartials from './SectionPartials';
import './Projects.css';

const Projects = () => {
  const [activeProject, setActiveProject] = React.useState(null);

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
      
      <div className="projects-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Selected Work</h2>
        </motion.div>

        <div className="project-list">
          {projects.map((project) => (
            <motion.a 
              href={project.link}
              key={project.id}
              className="project-item"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="project-info">
                <span className="project-year">{project.year}</span>
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              
              {/* Hover Image Reveal */}
              <motion.div 
                className="project-image-reveal"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: activeProject === project.id ? 1 : 0,
                  scale: activeProject === project.id ? 1 : 0.8,
                  x: activeProject === project.id ? 20 : 0,
                  rotate: activeProject === project.id ? -2 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.image} alt={project.title} />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

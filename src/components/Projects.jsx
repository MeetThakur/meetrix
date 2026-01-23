import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionPartials from './SectionPartials';
import './Projects.css';

const Projects = () => {
  const [activeId, setActiveId] = React.useState(1);

  const projects = [
    {
      id: 1,
      title: 'Project Alpha',
      category: 'E-commerce',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop', 
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
      
      <div className="projects-container-sticky">
        
        {/* Left: Sticky Visual Preview */}
        <div className="project-preview-side">
          <div className="preview-frame">
             {projects.map((project) => (
                <motion.img 
                  key={project.id}
                  src={project.image} 
                  alt={project.title}
                  className="preview-image"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ 
                    opacity: activeId === project.id ? 1 : 0,
                    scale: activeId === project.id ? 1 : 1.1
                  }}
                  transition={{ duration: 0.5 }}
                />
             ))}
             <div className="preview-overlay"></div>
          </div>
        </div>

        {/* Right: Project List */}
        <div className="project-list-side">
           <div className="list-header">
             <h2 className="section-title">Selected<br/>Works</h2>
           </div>

           <div className="project-list">
             {projects.map((project) => (
               <motion.a
                 href={project.link}
                 key={project.id}
                 className={`project-list-item ${activeId === project.id ? 'active' : ''}`}
                 onMouseEnter={() => setActiveId(project.id)}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                  <div className="item-header">
                    <span className="item-year">{project.year}</span>
                    <h3 className="item-title">{project.title}</h3>
                  </div>
                  <div className="item-meta">
                    <span className="item-category">{project.category}</span>
                    <p className="item-desc">{project.description}</p>
                  </div>
                  <div className="item-arrow">
                    <FaExternalLinkAlt />
                  </div>
               </motion.a>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;

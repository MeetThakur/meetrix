import React from 'react';
import { motion } from 'framer-motion';
import './SectionPartials.css';

const SectionPartials = ({ index, title, align = 'left' }) => {
  return (
    <div className={`section-partials ${align}`}>
      <motion.div 
        className="section-index"
        initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {index}
      </motion.div>
      <motion.div 
        className="section-watermark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {title}
      </motion.div>
    </div>
  );
};

export default SectionPartials;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "transparent",
      border: "2px solid #06b6d4",
    },
    hover: {
      height: 50,
      width: 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      backgroundColor: "rgba(6, 182, 212, 0.3)",
      border: "none",
      mixBlendMode: "difference"
    }
  };

  // Add event listeners for hover effects on mount
  useEffect(() => {
    const handleMouseOver = () => setCursorVariant('hover');
    const handleMouseOut = () => setCursorVariant('default');

    const links = document.querySelectorAll('a, button, .project-card, .skill-card, .cp-card');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseOver);
      link.addEventListener('mouseleave', handleMouseOut);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseOver);
        link.removeEventListener('mouseleave', handleMouseOut);
      });
    };
  }, []); // Note: This might need to re-run on route changes or content updates

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    />
  );
};

export default CustomCursor;

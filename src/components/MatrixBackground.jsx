import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&";
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    
    // An array of drops - one per column
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100; // Start at random random heights above screen
    }

    const draw = () => {
      // Translucent background to show trail
      // Check current theme
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      
      if (isDark) {
          ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'; // Very subtle fade for trail
      } else {
          ctx.fillStyle = 'rgba(240, 240, 240, 0.1)'; // Light mode fade
      }
      
      ctx.fillRect(0, 0, width, height);
      
      if (isDark) {
          ctx.fillStyle = 'rgba(0, 255, 70, 0.08)'; // Sleek Matrix Green, very low opacity
      } else {
          ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Black ink for light mode
      }
      
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Sending the drop back to the top randomly after it has crossed the screen
        // Adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Incrementing Y coordinate
        drops[i]++;
      }
    };

    let animationId;
    const interval = setInterval(() => {
        animationId = requestAnimationFrame(draw);
    }, 50); // Slow down the loop (standard is usually 33ms or less)

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        // Re-init drops if needed, or just let them fall
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.6 // Global opacity control for the whole effect
      }}
    />
  );
};

export default MatrixBackground;

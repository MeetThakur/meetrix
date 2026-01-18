import React from 'react';
import { motion } from 'framer-motion';
import { SiCodeforces, SiLeetcode, SiCodechef } from 'react-icons/si';
import SectionPartials from './SectionPartials';
import './CompetitiveProgramming.css';

const CompetitiveProgramming = () => {
  const profiles = [
    // ... profiles
  ]; // Using existing implementation logic implied

  // ... (re-declaring profiles array fully for replace tool context if not partially supported, assuming full file context or start/end line usage. using specific lines for partial injection.)

  return (
    <section className="cp-section" id="cp">
      <SectionPartials index="04" title="RANK" align="right" />
      <motion.div 
    {
      platform: 'LeetCode',
      icon: <SiLeetcode />,
      color: '#FFA116',
      handle: 'meet_thakur', // Replace with actual handle
      rating: '1850', // Replace
      solved: '450+',
      link: '#'
    },
    {
      platform: 'Codeforces',
      icon: <SiCodeforces />,
      color: '#1F8ACB',
      handle: 'meet_thakur', // Replace
      rating: '1400 (Specialist)', // Replace
      solved: '300+',
      link: '#'
    },
    {
      platform: 'CodeChef',
      icon: <SiCodechef />,
      color: '#5B4638',
      handle: 'meet_thakur', // Replace
      rating: '3 Star', // Replace
      solved: '200+',
      link: '#'
    }
  ];

  return (
    <section className="cp-section" id="cp">
      <SectionPartials index="04" title="RANK" align="right" />
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Competitive Programming</h2>
      </motion.div>

      <div className="cp-grid">
        {profiles.map((profile, index) => (
          <motion.a 
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="cp-card glass"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, borderColor: profile.color }}
          >
            <div className="cp-icon" style={{ color: profile.color }}>
              {profile.icon}
            </div>
            <h3>{profile.platform}</h3>
            <div className="cp-stats">
              <div className="stat-row">
                <span>Rating:</span>
                <strong>{profile.rating}</strong>
              </div>
              <div className="stat-row">
                <span>Solved:</span>
                <strong>{profile.solved}</strong>
              </div>
            </div>
            <div className="handle">@{profile.handle}</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default CompetitiveProgramming;

import React from 'react';
import { motion } from 'framer-motion';
import { SiCodeforces, SiLeetcode, SiCodechef } from 'react-icons/si';
import SectionPartials from './SectionPartials';
import './CompetitiveProgramming.css';

const CompetitiveProgramming = () => {
  const profiles = [
    {
      platform: 'LeetCode',
      icon: <SiLeetcode />,
      color: '#FFA116',
      handle: 'Meet11_',
      rating: '1581',
      rank: 'Top 26%',
      platform: "LeetCode",
      rating: "1581",
      rank: "Top 15%",
      link: "https://leetcode.com/u/meet_thakur/",
      color: "#ffa116" // LeetCode Orange
    },
    {
      platform: "Codeforces",
      rating: "1439",
      rank: "Specialist",
      link: "https://codeforces.com/profile/meet_thakur",
      color: "#318CE7" // Codeforces Blue (using Blue/Red theme usually, but blue is nice here)
    },
    {
      platform: "CodeChef",
      rating: "1697",
      rank: "3 Star",
      link: "https://www.codechef.com/users/meet_thakur",
      color: "#5f4b32" // CodeChef Brown
    }
  ];

  return (
    <section className="cp-section" id="cp">
      <SectionPartials index="04" title="STATS" align="right" />
      
      <div className="cp-container">
        <motion.div 
          className="cp-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Competitive<br/>Arena</h2>
        </motion.div>

        <div className="trophy-grid">
          {profiles.map((profile, index) => (
            <motion.a 
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="trophy-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              style={{ '--accent': profile.color }}
            >
              <div className="trophy-icon">🏆</div>
              <h3 className="platform-name">{profile.platform}</h3>
              
              <div className="stat-row">
                <span className="stat-label">Rating</span>
                <span className="stat-value">{profile.rating}</span>
              </div>
              
              <div className="stat-row">
                <span className="stat-label">Rank</span>
                <span className="stat-value highlight">{profile.rank}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;

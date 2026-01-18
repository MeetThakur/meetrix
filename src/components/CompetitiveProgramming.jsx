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
      solved: '607',
      link: 'https://leetcode.com/Meet11_/'
    },
    {
      platform: 'Codeforces',
      icon: <SiCodeforces />,
      color: '#1F8ACB',
      handle: 'meet_11',
      rating: '1439',
      rank: 'Specialist',
      solved: 'Max 1439',
      link: 'https://codeforces.com/profile/meet_11'
    },
    {
      platform: 'CodeChef',
      icon: <SiCodechef />,
      color: '#5B4638',
      handle: 'meetrix',
      rating: '1697',
      rank: '3 Star',
      solved: '100+',
      link: 'https://www.codechef.com/users/meetrix'
    }
  ];

  return (
    <section className="cp-section" id="cp">
      <SectionPartials index="04" title="STATS" align="right" />
      
      <div className="cp-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Statistics</h2>
        </motion.div>

        <div className="leaderboard">
          <div className="leaderboard-header">
            <span>Platform</span>
            <span>Handle</span>
            <span>Rating</span>
            <span>Global Rank</span>
          </div>
          
          {profiles.map((profile, index) => (
            <motion.a 
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="leaderboard-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
            >
              <div className="lb-platform">
                <span className="lb-icon" style={{ color: profile.color }}>{profile.icon}</span>
                {profile.platform}
              </div>
              <div className="lb-handle">@{profile.handle}</div>
              <div className="lb-rating">{profile.rating}</div>
              <div className="lb-rank">{profile.rank}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;

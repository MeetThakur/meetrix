import { motion } from 'framer-motion';
import { SiCodeforces, SiLeetcode, SiCodechef } from 'react-icons/si';
import SectionPartials from './SectionPartials';
import './CompetitiveProgramming.css';

const CompetitiveProgramming = () => {
  const profiles = [
    {
      platform: "LeetCode",
      rating: "1581", // Rating isn't usually main stat for LC, stick to Solved? Or keep rating if known. Scrape just said 607 solved. Let's use Solved.
      rank: "Top 15%",
      solved: "607",
      link: "https://leetcode.com/u/Meet11_/",
      color: "#ffa116"
    },
    {
      platform: "Codeforces",
      rating: "1439",
      rank: "Specialist",
      solved: "171",
      link: "https://codeforces.com/profile/meet_11",
      color: "#318CE7"
    },
    {
      platform: "CodeChef",
      rating: "1697",
      rank: "3 Star",
      solved: "100",
      link: "https://www.codechef.com/users/meetrix",
      color: "#5f4b32"
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
          <h2 className="section-title">Competitive<br/>Stats</h2>
        </motion.div>

        <div className="stats-simple-grid">
          {profiles.map((profile, index) => (
            <motion.a 
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="stat-card-simple"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ '--accent': profile.color }}
            >
              <h3 className="stat-platform">{profile.platform}</h3>
              <div className="stat-big-number">{profile.rating}</div>
              <p className="stat-label">Current Rating</p>
              
              <div className="stat-meta">
                <span className="meta-item">SOLVED: {profile.solved}</span>
                <span className="meta-item">{profile.rank}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;

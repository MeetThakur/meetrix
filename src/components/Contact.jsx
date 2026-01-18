import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import SectionPartials from './SectionPartials';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Simulation)");
  };

  return (
    <section className="contact" id="contact">
      <SectionPartials index="05" title="HELLO" align="left" />
      
      <div className="contact-content">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Let's Talk</h2>
          <p>Have a project in mind? Let's build something remarkable.</p>
        </motion.div>

        <div className="contact-split">
          <motion.div 
            className="contact-details"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <a href="mailto:meet.thakur@example.com" className="detail-value">meet.thakur@example.com</a>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">New Delhi, India</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Socials</span>
              <div className="social-row">
                <a href="https://www.linkedin.com/in/meetthakur/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/MeetThakur" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="minimal-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <input type="text" placeholder="What's your name?" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your email address" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tell me about your project..." rows="1" required></textarea>
            </div>
            <button type="submit" className="submit-btn" data-text="Send Message">
              <span>Send Message</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

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
      
      <div className="contact-container">
        {/* Left Side: Invitation */}
        <div className="contact-text-side">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="contact-title">Let's start a<br />Project together</h2>
            <p className="contact-subtext">
              Have an idea? I'm always open to discussing new opportunities, creative concepts, or just having a chat.
            </p>
          </motion.div>

          <motion.div 
            className="contact-info-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="info-block">
              <span className="label">WRITE</span>
              <a href="mailto:meet.thakur@example.com" className="value">meet.thakur@example.com</a>
            </div>
            <div className="info-block">
              <span className="label">CONNECT</span>
              <div className="social-links-row">
                 <a href="https://www.linkedin.com/in/meetthakur/" target="_blank" rel="noopener noreferrer">LI</a>
                 <a href="https://github.com/MeetThakur" target="_blank" rel="noopener noreferrer">GH</a>
                 <a href="#">X</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Glass Form */}
        <div className="contact-form-side">
          <motion.form 
            className="glass-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="input-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-btn btn-primary">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

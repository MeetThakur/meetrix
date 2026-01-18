import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import SectionPartials from './SectionPartials';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Message sent! (Simulation)");
  };

  return (
    <section className="contact" id="contact">
      <SectionPartials index="05" title="HELLO" align="left" />
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Get In Touch</h2>
      </motion.div>

      <div className="contact-container">
        <motion.div 
          className="contact-info glass"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Contact Information</h3>
          <p>Feel free to reach out for collaborations or just a friendly hello!</p>
          
          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>meet.thakur@example.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <span>+91 98765 43210</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>New Delhi, India</span>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form glass"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

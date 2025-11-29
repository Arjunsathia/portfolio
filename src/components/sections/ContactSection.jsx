import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="container mb-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-muted" style={{ fontFamily: 'Plus Jakarta Sans' }}>Let's discuss your next project</p>
      </motion.div>

      <div className="row g-5">
        <div className="col-lg-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h5>Email Me</h5>
                <p>hello@arjunsathia.com</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <div className="contact-details">
                <h5>Call Me</h5>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h5>Location</h5>
                <p>San Francisco, CA</p>
              </div>
            </div>

            <div className="glass-card p-4 mt-5 text-center">
              <h4 style={{ fontFamily: 'Playfair Display', marginBottom: '10px' }}>Available for Freelance</h4>
              <p className="text-muted mb-0" style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '0.9rem' }}>
                I'm currently accepting new projects. Let's collaborate to build something amazing!
              </p>
            </div>
          </motion.div>
        </div>

        <div className="col-lg-7">
          <motion.div
            className="glass-card contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form>
              <div className="row">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
              </div>
              <input type="text" className="form-control" placeholder="Subject" />
              <textarea className="form-control" rows="5" placeholder="Message"></textarea>
              <button type="submit" className="hero-btn hero-btn-primary border-0 w-100 justify-content-center">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

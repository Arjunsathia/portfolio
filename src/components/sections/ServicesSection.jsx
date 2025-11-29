import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaPalette, FaServer } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Building fast, responsive, and accessible websites using modern technologies like React, Next.js, and Node.js."
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    desc: "Creating cross-platform mobile applications that provide seamless user experiences on both iOS and Android."
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    desc: "Designing intuitive and visually appealing interfaces that prioritize user engagement and accessibility."
  },
  {
    icon: <FaServer />,
    title: "Backend Systems",
    desc: "Architecting robust and scalable server-side solutions, APIs, and database structures for complex applications."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <h2 className="section-title">My Services</h2>
        <p className="text-muted" style={{ fontFamily: 'Plus Jakarta Sans' }}>What I can do for you</p>
      </motion.div>

      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <motion.div
              className="glass-card service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

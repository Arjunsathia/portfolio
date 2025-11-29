import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="container py-5">
      <motion.div 
        className="about-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="section-title">About Me</h2>
            <p className="about-text mt-4">
              I'm <span className="name-highlight">Arjun Sathia</span>, a software engineer with a knack for solving complex problems. 
              My journey in tech is driven by a curiosity to understand how things work and a desire to build 
              solutions that make a difference.
            </p>
            <p className="about-text">
              I specialize in full-stack development, with deep expertise in modern JavaScript frameworks 
              and scalable backend architectures. When I'm not coding, you can find me exploring new technologies 
              or contributing to open-source projects.
            </p>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="row g-4">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "20+", label: "Projects Completed" },
                { number: "10+", label: "Happy Clients" },
                { number: "100%", label: "Commitment" }
              ].map((stat, index) => (
                <div className="col-6" key={index}>
                  <motion.div 
                    className="stat-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

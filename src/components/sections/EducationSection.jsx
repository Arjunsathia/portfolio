import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2019 - 2023",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    desc: "Graduated with honors. Specialized in Software Engineering and Artificial Intelligence. Led the university coding club."
  },
  {
    year: "2017 - 2019",
    degree: "Higher Secondary Education",
    institution: "City High School",
    desc: "Focused on Mathematics and Computer Science. Won regional programming competitions."
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="section-title">Education</h2>
            <p className="text-muted" style={{ fontFamily: 'Plus Jakarta Sans' }}>My academic journey</p>
          </motion.div>

          <div className="glass-card p-5">
            {educationData.map((item, index) => (
              <motion.div
                className="timeline-item"
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.degree}</h3>
                <h4 className="timeline-subtitle">{item.institution}</h4>
                <p className="about-text" style={{ fontSize: '0.95rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

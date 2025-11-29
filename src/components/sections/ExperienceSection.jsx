import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2023 - Present",
    desc: "Leading a team of 5 developers to build scalable web applications. Implemented microservices architecture reducing server costs by 30%."
  },
  {
    role: "Frontend Developer",
    company: "Creative Solutions",
    period: "2021 - 2023",
    desc: "Developed responsive UI components using React and Tailwind CSS. Collaborated with UX designers to improve user engagement metrics by 25%."
  },
  {
    role: "Junior Web Developer",
    company: "Digital Startups",
    period: "2019 - 2021",
    desc: "Assisted in developing and maintaining client websites. Optimized page load speeds and fixed cross-browser compatibility issues."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <h2 className="section-title">Work Experience</h2>
        <p className="text-muted" style={{ fontFamily: 'Plus Jakarta Sans' }}>My professional journey</p>
      </motion.div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="experience-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="exp-card glass-card">
                  <div className="exp-header">
                    <div className="exp-icon">
                      <FaBriefcase />
                    </div>
                    <div className="exp-meta">
                      <span className="exp-period"><FaCalendarAlt className="me-2" />{exp.period}</span>
                      <h3 className="exp-role">{exp.role}</h3>
                      <h4 className="exp-company">{exp.company}</h4>
                    </div>
                  </div>
                  <p className="exp-desc">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

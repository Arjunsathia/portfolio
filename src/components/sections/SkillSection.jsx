import React from "react";
import { motion } from "framer-motion";

const skills = {
  "Frontend Development": [
    { name: "React / Next.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "HTML5 / CSS3", level: 95 },
    { name: "Tailwind CSS", level: 85 }
  ],
  "Backend Development": [
    { name: "Node.js / Express", level: 85 },
    { name: "Python / Django", level: 80 },
    { name: "PostgreSQL / MongoDB", level: 75 },
    { name: "GraphQL", level: 70 }
  ],
  "Tools & DevOps": [
    { name: "Git / GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 65 },
    { name: "Figma", level: 80 }
  ]
};

const SkillBar = ({ name, level, delay }) => (
  <div className="skill-item">
    <div className="skill-info">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="progress-bar-bg">
      <motion.div
        className="progress-bar-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay, ease: "easeOut" }}
      />
    </div>
  </div>
);

const SkillSection = () => {
  return (
    <section id="skill" className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <h2 className="section-title">Professional Skills</h2>
        <p className="text-muted" style={{ fontFamily: 'Plus Jakarta Sans' }}>My technical expertise</p>
      </motion.div>

      <div className="row">
        {Object.entries(skills).map(([category, categorySkills], catIndex) => (
          <div className="col-md-4" key={category}>
            <motion.div
              className="glass-card p-4 h-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2, duration: 0.5 }}
            >
              <div className="skill-category">
                <h4>{category}</h4>
                {categorySkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    delay={0.5 + (index * 0.1)} 
                  />
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;

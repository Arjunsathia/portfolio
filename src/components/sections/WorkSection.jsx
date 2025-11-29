import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Task Management App",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Portfolio Website",
    category: "Personal Brand",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["React", "Framer Motion", "Bootstrap"],
    links: { demo: "#", github: "#" }
  },
  {
    title: "Weather Dashboard",
    category: "API Integration",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    tags: ["JavaScript", "OpenWeather API", "Chart.js"],
    links: { demo: "#", github: "#" }
  }
];

const WorkSection = () => {
  return (
    <section id="work" className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <h2 className="section-title">Selected Work</h2>
        <p className="text-muted" style={{ fontFamily: 'Plus Jakarta Sans' }}>Recent projects and case studies</p>
      </motion.div>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-6" key={index}>
            <motion.div
              className="glass-card work-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="work-img-wrapper">
                <img src={project.image} alt={project.title} className="work-img" />
                <div className="work-overlay">
                  <div className="d-flex gap-3">
                    <a href={project.links.demo} className="btn btn-light rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: 50, height: 50 }}>
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.links.github} className="btn btn-dark rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: 50, height: 50 }}>
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="work-content">
                <span className="text-uppercase text-muted fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>{project.category}</span>
                <h3 className="work-title mt-2">{project.title}</h3>
                <div className="work-tags mt-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="work-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;

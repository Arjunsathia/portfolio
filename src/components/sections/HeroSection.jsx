// src/components/sections/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="home" className="hero-container">
      {/* Background Blobs */}
      <div className="hero-bg-blob blob-1"></div>
      <div className="hero-bg-blob blob-2"></div>
      <div className="hero-bg-blob blob-3"></div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h4 className="hero-subtitle">Hello, I'm Arjun</h4>
              <h1 className="hero-title display-1">
                Crafting Digital <br />
                <span style={{ color: "#555", fontStyle: "italic" }}>Experiences</span>
              </h1>
              <p className="lead my-4 px-5" style={{ fontFamily: 'Plus Jakarta Sans', color: '#666' }}>
                A passionate Full-stack Developer dedicated to building accessible, 
                pixel-perfect, and performant web applications.
              </p>
              
              <motion.div 
                className="d-flex justify-content-center gap-3 mt-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <a href="#work" className="hero-btn hero-btn-primary">
                  View My Work <FaArrowRight />
                </a>
                <a href="/resume.pdf" className="hero-btn" style={{ background: 'white', color: '#1a1a1a' }}>
                  Download CV
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

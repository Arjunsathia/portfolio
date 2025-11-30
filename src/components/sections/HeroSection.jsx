// src/components/sections/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ffffff] via-[#fffdf9] to-[#fff9eb] overflow-hidden py-10 md:py-[30px] md:rounded-[24px] md:shadow-sm md:mb-5">
      {/* Background Blobs */}
      <div className="absolute rounded-full blur-[100px] -z-10 opacity-60 animate-float w-[600px] h-[600px] bg-gradient-to-br from-[#fff8e8] to-[#fff4db] -top-[200px] -right-[150px]"></div>
      <div className="absolute rounded-full blur-[100px] -z-10 opacity-60 animate-float w-[500px] h-[500px] bg-gradient-to-br from-[#fffaf0] to-[#fff6e3] -bottom-[100px] -left-[200px] animation-delay-2000"></div>
      <div className="absolute rounded-full blur-[100px] -z-10 opacity-50 animate-float w-[400px] h-[400px] bg-gradient-to-br from-[#fffcf5] to-[#fff9eb] top-[40%] left-[30%] animation-delay-4000"></div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="w-full md:w-[80%] text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-playfair font-bold text-[2.2rem] md:text-[5rem] leading-[1.1] mb-4 md:mb-6 text-primary tracking-tight">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4BE85] to-[#F0E0B6] animate-gradient-x">Digital</span> Experiences
                <br />
                With <span className="italic font-light text-text-muted">Precision</span> & <span className="italic font-light text-text-muted">Soul</span>
              </h1>
              <p className="font-outfit text-text-muted text-[0.95rem] md:text-[1.25rem] font-light max-w-[600px] mx-auto mb-6 md:mb-10 leading-relaxed">
                I build accessible, pixel-perfect, and performant web applications that blend aesthetic beauty with robust engineering.
              </p>
              
              <motion.div 
                className="flex flex-col md:flex-row gap-3 md:gap-5 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <a href="#work" className="py-3 px-5 md:py-4 md:px-10 rounded-full font-outfit font-semibold transition-all duration-300 inline-flex items-center justify-center gap-3 text-[0.9rem] md:text-[0.95rem] tracking-wide bg-gradient-to-r from-[#D4BE85] via-[#F0E0B6] to-[#D4BE85] bg-[length:200%_auto] text-white shadow-[0_10px_20px_-10px_rgba(212,190,133,0.5)] hover:bg-right hover:-translate-y-1 hover:shadow-[0_20px_30px_-15px_rgba(212,190,133,0.6)]">
                  View My Work <FaArrowRight />
                </a>
                <a href="/resume.pdf" className="py-3 px-5 md:py-4 md:px-10 rounded-full font-outfit font-semibold transition-all duration-300 inline-flex items-center justify-center gap-3 text-[0.9rem] md:text-[0.95rem] tracking-wide bg-white text-primary shadow-sm hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md">
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

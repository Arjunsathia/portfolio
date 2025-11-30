import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-20 relative">
      {/* Subtle Gold Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#D4BE85]/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <motion.div 
        className="bg-white/80 backdrop-blur-2xl rounded-[24px] border border-white shadow-sm p-5 md:p-[60px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,190,133,0.15)] hover:border-[#D4BE85]/30 relative overflow-hidden group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Gradient Border Effect on Hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4BE85]/20 rounded-[24px] transition-colors duration-500 pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center relative z-10">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="font-playfair font-bold text-primary mb-5 relative inline-block tracking-tight text-[1.8rem] text-left md:text-[3.5rem] after:content-[''] after:absolute after:bottom-2 after:left-0 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-[#D4BE85] after:via-[#F0E0B6] after:to-[#D4BE85] after:rounded-sm after:z-10">
              About Me
            </h2>
            <p className="font-outfit text-text-main font-light text-[0.95rem] leading-[1.6] text-justify md:text-[1.15rem] md:leading-[1.9] md:text-left mt-4">
              I'm <span className="font-semibold text-[#D4BE85]">Arjun Sathia</span>, a software engineer passionate about building scalable web applications. I specialize in full-stack development, blending modern JavaScript frameworks with robust backend architectures to create impactful digital solutions.
            </p>
          </div>
          <div className="w-full lg:w-5/12 lg:ml-[8.33%]">
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "20+", label: "Projects Completed" },
                { number: "10+", label: "Happy Clients" },
                { number: "100%", label: "Commitment" }
              ].map((stat, index) => (
                <div key={index}>
                  <motion.div 
                    className="text-center p-[15px] bg-white/50 rounded-2xl md:p-6 border border-transparent hover:border-[#D4BE85]/20 hover:bg-white/80 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4BE85] to-[#F0E0B6] block leading-none mb-2 text-[1.5rem] md:text-[3rem] drop-shadow-sm">{stat.number}</span>
                    <span className="font-outfit text-text-muted uppercase tracking-widest font-semibold text-[0.7rem] md:text-[0.85rem]">{stat.label}</span>
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

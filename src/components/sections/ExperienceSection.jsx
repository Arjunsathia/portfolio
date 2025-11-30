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
    <section id="experience" className="container mx-auto px-4 py-20 relative">
      {/* Subtle Gold Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#D4BE85]/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:text-left"
      >
        <h2 className="font-playfair font-bold text-primary mb-5 relative inline-block tracking-tight text-[1.8rem] text-left md:text-[3.5rem] after:content-[''] after:absolute after:bottom-2 after:left-0 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-[#D4BE85] after:via-[#F0E0B6] after:to-[#D4BE85] after:rounded-sm after:z-10">
          Work Experience
        </h2>
        <p className="font-outfit text-text-muted">My professional journey</p>
      </motion.div>

      <div className="flex justify-center">
        <div className="w-full lg:w-10/12">
          <div className="relative py-10 before:content-[''] before:absolute before:left-[15px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-[#D4BE85]/30 before:-translate-x-1/2">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="mb-20 relative w-full md:w-1/2 pl-[45px] md:pl-0 md:odd:pr-[60px] md:odd:left-0 md:even:pl-[60px] md:even:left-1/2 after:content-[''] after:absolute after:top-[28px] md:after:top-6 after:w-3 after:h-3 md:after:w-4 md:after:h-4 after:bg-white after:border-4 after:border-[#D4BE85] after:rounded-full after:z-10 after:shadow-[0_0_0_4px_rgba(212,190,133,0.2)] after:left-[7px] md:after:left-auto md:odd:after:-right-2 md:even:after:-left-2"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="bg-white/80 backdrop-blur-2xl rounded-[16px] border border-white shadow-sm p-5 md:p-[60px] relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,190,133,0.15)] hover:border-[#D4BE85]/30 group">
                  <div className="flex flex-row gap-[15px] md:gap-5 mb-5 items-start">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#D4BE85] to-[#F0E0B6] text-white rounded-[10px] md:rounded-2xl flex items-center justify-center text-[16px] md:text-2xl shrink-0 shadow-[0_8px_16px_-6px_rgba(212,190,133,0.4)]">
                      <FaBriefcase />
                    </div>
                    <div className="flex-grow">
                      <span className="font-outfit text-[0.75rem] md:text-[0.8rem] font-semibold text-[#D4BE85] bg-[#D4BE85]/10 px-3.5 py-1.5 rounded-full inline-flex items-center mb-3 tracking-wide border border-[#D4BE85]/20">
                        <FaCalendarAlt className="mr-2" />{exp.period}
                      </span>
                      <h3 className="font-playfair text-[1.1rem] md:text-[1.4rem] m-0 text-primary font-bold leading-tight group-hover:text-[#D4BE85] transition-colors duration-300">{exp.role}</h3>
                      <h4 className="font-outfit text-[0.9rem] md:text-[1rem] text-text-main mt-1 font-medium">{exp.company}</h4>
                    </div>
                  </div>
                  <p className="font-outfit text-[0.9rem] md:text-[1rem] text-text-muted leading-[1.7] m-0 font-light mt-2.5 group-hover:text-text-main transition-colors duration-300">{exp.desc}</p>
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

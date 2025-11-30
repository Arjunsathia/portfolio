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
    <section id="services" className="container mx-auto px-4 py-20 relative">
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
          My Services
        </h2>
        <p className="font-outfit text-text-muted">What I can do for you</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div className="w-full" key={index}>
            <motion.div
              className="bg-white/80 backdrop-blur-2xl rounded-[16px] md:rounded-[24px] border border-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,190,133,0.15)] hover:border-[#D4BE85]/30 p-[15px_10px] md:p-[100px_40px] h-full text-center group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Gradient Border Effect on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4BE85]/20 rounded-[16px] md:rounded-[24px] transition-colors duration-500 pointer-events-none"></div>

              <div className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] bg-white rounded-[12px] md:rounded-[24px] flex items-center justify-center mx-auto mb-[15px] md:mb-[30px] text-[20px] md:text-[32px] text-[#D4BE85] shadow-[0_8px_16px_-6px_rgba(212,190,133,0.2)] transition-all duration-500 group-hover:rotate-y-180 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#D4BE85] group-hover:to-[#F0E0B6] group-hover:text-white group-hover:shadow-[0_10px_20px_-5px_rgba(212,190,133,0.4)]">
                {service.icon}
              </div>
              <h3 className="font-playfair font-bold text-primary mb-[8px] md:mb-[16px] text-[1rem] md:text-[1.75rem] group-hover:text-[#D4BE85] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-outfit text-text-muted text-[0.75rem] md:text-[1rem] leading-[1.4] md:leading-[1.7] font-light group-hover:text-text-main transition-colors duration-300">
                {service.desc}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

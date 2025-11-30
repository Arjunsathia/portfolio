import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-8 md:py-20 mb-0 md:mb-20 relative">
      {/* Subtle Gold Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#D4BE85]/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 md:mb-12 md:text-left"
      >
        <h2 className="font-playfair font-bold text-primary mb-5 relative inline-block tracking-tight text-[1.8rem] text-left md:text-[3.5rem] after:content-[''] after:absolute after:bottom-2 after:left-0 after:w-[60px] after:h-1 after:bg-gradient-to-r after:from-[#D4BE85] after:via-[#F0E0B6] after:to-[#D4BE85] after:rounded-sm after:z-10">
          Get In Touch
        </h2>
        <p className="font-outfit text-text-muted">Let's discuss your next project</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="w-full lg:w-5/12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4 mb-5 md:mb-8 group">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#D4BE85] text-base md:text-xl shadow-sm shrink-0 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#D4BE85] group-hover:to-[#F0E0B6] group-hover:text-white group-hover:shadow-[0_5px_15px_-5px_rgba(212,190,133,0.4)]">
                <FaEnvelope />
              </div>
              <div>
                <h5 className="font-playfair font-bold text-primary text-base md:text-lg mb-1 group-hover:text-[#D4BE85] transition-colors duration-300">Email Me</h5>
                <p className="font-outfit text-text-muted text-sm md:text-base">hello@arjunsathia.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 mb-5 md:mb-8 group">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#D4BE85] text-base md:text-xl shadow-sm shrink-0 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#D4BE85] group-hover:to-[#F0E0B6] group-hover:text-white group-hover:shadow-[0_5px_15px_-5px_rgba(212,190,133,0.4)]">
                <FaPhoneAlt />
              </div>
              <div>
                <h5 className="font-playfair font-bold text-primary text-base md:text-lg mb-1 group-hover:text-[#D4BE85] transition-colors duration-300">Call Me</h5>
                <p className="font-outfit text-text-muted text-sm md:text-base">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-5 md:mb-8 group">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-[#D4BE85] text-base md:text-xl shadow-sm shrink-0 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#D4BE85] group-hover:to-[#F0E0B6] group-hover:text-white group-hover:shadow-[0_5px_15px_-5px_rgba(212,190,133,0.4)]">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h5 className="font-playfair font-bold text-primary text-base md:text-lg mb-1 group-hover:text-[#D4BE85] transition-colors duration-300">Location</h5>
                <p className="font-outfit text-text-muted text-sm md:text-base">San Francisco, CA</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-2xl rounded-[20px] md:rounded-[24px] border border-white shadow-sm p-5 md:p-8 mt-6 md:mt-10 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,190,133,0.15)] hover:border-[#D4BE85]/30 group relative overflow-hidden">
              {/* Gradient Border Effect on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4BE85]/20 rounded-[20px] md:rounded-[24px] transition-colors duration-500 pointer-events-none"></div>
              
              <h4 className="font-playfair font-bold text-base md:text-lg mb-2 text-primary group-hover:text-[#D4BE85] transition-colors duration-300">Available for Freelance</h4>
              <p className="font-outfit text-text-muted text-xs md:text-sm mb-0">
                I'm currently accepting new projects. Let's collaborate to build something amazing!
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-7/12 hidden md:block">
          <motion.div
            className="bg-white/80 backdrop-blur-2xl rounded-[20px] md:rounded-[24px] border border-white shadow-sm p-5 md:p-8 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(212,190,133,0.15)] hover:border-[#D4BE85]/30 group relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Gradient Border Effect on Hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4BE85]/20 rounded-[20px] md:rounded-[24px] transition-colors duration-500 pointer-events-none pointer-events-none"></div>

            <form className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-full">
                  <input type="text" className="w-full px-4 py-2 md:py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4BE85] focus:ring-2 focus:ring-[#D4BE85]/20 outline-none transition-all font-outfit text-text-main placeholder:text-gray-400 text-sm md:text-base" placeholder="Your Name" />
                </div>
                <div className="w-full">
                  <input type="email" className="w-full px-4 py-2 md:py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4BE85] focus:ring-2 focus:ring-[#D4BE85]/20 outline-none transition-all font-outfit text-text-main placeholder:text-gray-400 text-sm md:text-base" placeholder="Your Email" />
                </div>
              </div>
              <input type="text" className="w-full px-4 py-2 md:py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4BE85] focus:ring-2 focus:ring-[#D4BE85]/20 outline-none transition-all font-outfit text-text-main placeholder:text-gray-400 mb-3 md:mb-4 text-sm md:text-base" placeholder="Subject" />
              <textarea className="w-full px-4 py-2 md:py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4BE85] focus:ring-2 focus:ring-[#D4BE85]/20 outline-none transition-all font-outfit text-text-main placeholder:text-gray-400 mb-3 md:mb-4 text-sm md:text-base" rows="4" placeholder="Message"></textarea>
              <button type="submit" className="w-full py-3 md:py-4 bg-gradient-to-r from-[#D4BE85] via-[#F0E0B6] to-[#D4BE85] bg-[length:200%_auto] text-white rounded-lg font-outfit font-semibold hover:bg-right hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(212,190,133,0.5)] transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

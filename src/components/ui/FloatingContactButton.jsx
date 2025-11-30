import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaTimes, FaCommentDots } from "react-icons/fa";

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const constraintsRef = useRef(null);

  return (
    <>
      {/* Drag Constraints Wrapper (Full Screen) */}
      <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-[9999]" />

      {/* Floating Button */}
      <motion.button
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragMomentum={false}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 pointer-events-auto bg-gradient-to-r from-[#D4BE85] via-[#F0E0B6] to-[#D4BE85] bg-[length:200%_auto] text-white font-outfit font-bold py-3 px-6 rounded-full shadow-[0_10px_20px_-5px_rgba(212,190,133,0.5)] flex items-center gap-2 hover:bg-right transition-all duration-300 z-[9999] cursor-grab active:cursor-grabbing md:hidden"
      >
        <FaCommentDots size={20} />
        <span>Let's Talk</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-[24px] shadow-2xl w-full max-w-lg relative overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#D4BE85] to-[#F0E0B6] p-6 flex justify-between items-center">
                <h3 className="font-playfair font-bold text-white text-2xl">Get in Touch</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Form */}
              <div className="p-6 md:p-8">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-outfit text-sm text-text-muted mb-1 ml-1">Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#D4BE85] focus:ring-2 focus:ring-[#D4BE85]/20 outline-none transition-all font-outfit text-text-main placeholder:text-gray-400" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block font-outfit text-sm text-text-muted mb-1 ml-1">Email</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#D4BE85] focus:ring-2 focus:ring-[#D4BE85]/20 outline-none transition-all font-outfit text-text-main placeholder:text-gray-400" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block font-outfit text-sm text-text-muted mb-1 ml-1">Subject</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#D4BE85] focus:ring-2 focus:ring-[#D4BE85]/20 outline-none transition-all font-outfit text-text-main placeholder:text-gray-400" placeholder="Project Inquiry" />
                  </div>

                  <div className="mb-6">
                    <label className="block font-outfit text-sm text-text-muted mb-1 ml-1">Message</label>
                    <textarea className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-[#D4BE85] focus:ring-2 focus:ring-[#D4BE85]/20 outline-none transition-all font-outfit text-text-main placeholder:text-gray-400 resize-none" rows="4" placeholder="Tell me about your project..."></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#D4BE85] via-[#F0E0B6] to-[#D4BE85] bg-[length:200%_auto] text-white rounded-xl font-outfit font-bold text-lg hover:bg-right hover:shadow-[0_10px_20px_-10px_rgba(212,190,133,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group">
                    Send Message 
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingContactButton;

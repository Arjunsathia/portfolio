import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profileImg from "../../assets/me.webp";
import { navLinks, socialLinks, personalInfo } from "../../data/constants";

const SidebarContent = ({ onClose = () => {} }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.toLowerCase());
      const triggerPoint = window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section overlaps with the trigger point (top third of screen)
          if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-full w-full p-4">
      {/* Profile Image + Name */}
      <div className="text-center mb-6">
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-md">
          <img
            src={profileImg}
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-playfair font-bold text-xl text-primary mb-1">{personalInfo.name}</h3>
          <p className="font-outfit text-sm text-text-muted uppercase tracking-wider">{personalInfo.role}</p>
        </div>
      </div>

      {/* Links */}
      <div className="flex-grow flex items-center justify-center w-full my-4">
        <ul className="flex flex-col items-center gap-2 w-full">
          {navLinks.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <li key={item} className="w-full text-center">
                <a 
                  href={`#${item.toLowerCase()}`} 
                  onClick={onClose}
                  className={`block py-2 px-4 rounded-lg font-outfit font-medium transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-to-r from-[#D4BE85] to-[#F0E0B6] text-white shadow-[0_4px_15px_-5px_rgba(212,190,133,0.5)]" 
                      : "text-text-muted hover:bg-gray-50 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#D4BE85] hover:to-[#F0E0B6] hover:translate-x-1"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Social Icons & CTA */}
      <div className="mt-6">
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((link) => {
            let IconComponent;
            switch (link.platform) {
              case "facebook": IconComponent = FaFacebookF; break;
              case "twitter": IconComponent = FaXTwitter; break;
              case "instagram": IconComponent = FaInstagram; break;
              case "linkedin": IconComponent = FaLinkedinIn; break;
              case "github": IconComponent = FaGithub; break;
              default: IconComponent = null;
            }
            
            if (!IconComponent) return null;

            return (
              <a 
                key={link.platform} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-text-muted hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <IconComponent size={14} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div 
        className="hidden md:flex fixed top-[10px] left-[10px] w-[260px] h-[calc(100vh-20px)] rounded-[30px] bg-white/85 backdrop-blur-md shadow-lg z-[9999] border border-white/20 overflow-y-auto overscroll-contain"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <SidebarContent />
      </div>
    </>
  );
};

export default Sidebar;

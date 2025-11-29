import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../../styles/sidebar.css";
import profileImg from "../../assets/me.webp";
import { navLinks, socialLinks, personalInfo } from "../../data/constants";

const SidebarContent = ({ onClose }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.toLowerCase());
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
    <div className="d-flex flex-column justify-content-between h-100 w-100">
      {/* Profile Image + Name */}
      <div className="text-center profile-section">
        <div className="image-wrapper">
          <img
            src={profileImg}
            alt={personalInfo.name}
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="name">
          <h3>{personalInfo.name}</h3>
          <p className="text-muted">{personalInfo.role}</p>
        </div>
      </div>

      {/* Links */}
      <div className="info flex-grow-1 d-flex align-items-center justify-content-center w-100">
        <ul className="sidebar-links list-unstyled d-flex flex-column align-items-center gap-2 m-0 p-0 w-100">
          {navLinks.map((item, index) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <li key={item} className="mb-1" style={{ animationDelay: `${index * 0.1}s` }}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  onClick={onClose}
                  className={isActive ? "active" : ""}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Social Icons */}
      <div className="bottom-section">
        <div className="icon d-flex justify-content-center gap-3 mb-3">
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
                className={`text-dark ${link.platform}`}
              >
                <IconComponent size={16} />
              </a>
            );
          })}
        </div>
        <a href="#contact" className="cta-button" onClick={onClose}>
          Let's Talk <span className="ms-2">👋</span>
        </a>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="d-none d-md-flex header">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar Toggle */}
      <div className="d-md-none p-3 position-fixed top-0 end-0" style={{ zIndex: 1050 }}>
        <button
          className="btn btn-light shadow-sm rounded-circle p-2"
          type="button"
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Offcanvas */}
      <div 
        className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`} 
        tabIndex="-1" 
        id="mobileSidebar" 
        style={{ visibility: isOpen ? "visible" : "hidden" }}
        aria-modal={isOpen}
        role="dialog"
      >
        <div className="offcanvas-header justify-content-end">
          <button
            type="button"
            className="btn-close"
            onClick={handleClose}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          <SidebarContent onClose={handleClose} />
        </div>
      </div>
      
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="offcanvas-backdrop fade show d-md-none" 
          onClick={handleClose}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

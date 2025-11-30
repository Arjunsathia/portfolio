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
  const scrollRef = React.useRef(null);

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[index];
      if (card) {
        const scrollLeft = card.offsetLeft - (scrollRef.current.clientWidth - card.clientWidth) / 2;
        scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="work" className="container mx-auto px-4 py-20 relative">
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
          Selected Work
        </h2>
        <p className="font-outfit text-text-muted">Recent projects and case studies</p>
      </motion.div>

      <div 
        ref={scrollRef}
        className="flex flex-nowrap overflow-x-auto gap-5 pb-5 snap-x snap-proximity md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <div 
            className="flex-none w-[280px] max-w-[280px] snap-center md:flex-auto md:w-auto md:max-w-none cursor-pointer" 
            key={index}
            onClick={() => scrollToCard(index)}
          >
            <motion.div
              className="bg-white rounded-[25px] md:rounded-[24px] overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,190,133,0.2)] h-full flex flex-col group border border-transparent hover:border-[#D4BE85]/30"
              initial={{ opacity: 0.6, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden h-[160px] rounded-t-[25px] md:h-[300px] md:rounded-none">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex gap-3">
                    <a href={project.links.demo} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#D4BE85] text-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#D4BE85] hover:to-[#F0E0B6] hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(212,190,133,0.5)]">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.links.github} className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:bg-white hover:text-black hover:scale-110">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-[15px] md:p-[30px] flex-grow flex flex-col">
                <span className="font-outfit text-[#D4BE85] text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="font-playfair font-bold text-primary mb-3 text-[1.1rem] md:text-[1.75rem] group-hover:text-[#D4BE85] transition-colors duration-300">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-outfit text-[0.7rem] md:text-[0.85rem] text-text-muted bg-gray-50 border border-gray-100 px-2 py-1 md:px-3 md:py-1 rounded-full transition-colors duration-300 group-hover:border-[#D4BE85]/30 group-hover:bg-[#D4BE85]/5">{tag}</span>
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

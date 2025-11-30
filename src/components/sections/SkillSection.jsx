import React from "react";
import { motion } from "framer-motion";

const skills = {
  "Frontend Development": [
    { name: "React / Next.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "HTML5 / CSS3", level: 95 },
    { name: "Tailwind CSS", level: 85 }
  ],
  "Backend Development": [
    { name: "Node.js / Express", level: 85 },
    { name: "Python / Django", level: 80 },
    { name: "PostgreSQL / MongoDB", level: 75 },
    { name: "GraphQL", level: 70 }
  ],
  "Tools & DevOps": [
    { name: "Git / GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 65 },
    { name: "Figma", level: 80 }
  ]
};

const SkillBar = ({ name, level, delay }) => (
  <div className="mb-4 md:mb-6">
    <div className="flex justify-between mb-2.5 font-outfit text-[0.85rem] md:text-[0.95rem] font-medium text-text-main">
      <span>{name}</span>
      <span className="text-black transition-colors duration-300">{level}%</span>
    </div>
    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-black rounded-full origin-left transition-all duration-500 group-hover:bg-[#D4BE85] group-hover:shadow-[0_0_10px_rgba(212,190,133,0.5)]"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay, ease: "easeOut" }}
      />
    </div>
  </div>
);

const SkillSection = () => {
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
    <section id="skills" className="container mx-auto px-4 py-20 relative">
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
          Professional Skills
        </h2>
        <p className="font-outfit text-text-muted">My technical expertise</p>
      </motion.div>

      <div 
        ref={scrollRef}
        className="flex flex-nowrap overflow-x-auto gap-5 pb-5 snap-x snap-proximity md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {Object.entries(skills).map(([category, categorySkills], catIndex) => (
          <div 
            className="flex-none w-[280px] max-w-[280px] snap-center md:flex-auto md:w-auto md:max-w-none cursor-pointer" 
            key={category}
            onClick={() => scrollToCard(catIndex)}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-2xl rounded-[24px] border border-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,190,133,0.15)] hover:border-[#D4BE85]/30 p-4 md:p-6 h-full group relative overflow-hidden"
              initial={{ opacity: 0.6, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Gradient Border Effect on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4BE85]/20 rounded-[24px] transition-colors duration-500 pointer-events-none"></div>

              <div className="mb-6 md:mb-10 relative z-10">
                <h4 className="font-playfair font-semibold text-primary mb-4 md:mb-6 text-[1.2rem] md:text-[1.4rem] group-hover:text-[#D4BE85] transition-colors duration-300">{category}</h4>
                {categorySkills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    delay={0.5 + (index * 0.1)} 
                  />
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;

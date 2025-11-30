import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    title: "Mastering React Hooks: A Comprehensive Guide",
    date: "February 28, 2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  },
  {
    title: "Optimizing Website Performance for Better SEO",
    date: "January 10, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    link: "#"
  }
];

const BlogSection = () => {
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
    <section id="blog" className="container mx-auto px-4 py-20 relative">
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
          Latest Articles
        </h2>
        <p className="font-outfit text-text-muted">Thoughts on technology and design</p>
      </motion.div>

      <div 
        ref={scrollRef}
        className="flex flex-nowrap overflow-x-auto gap-5 pb-5 snap-x snap-proximity md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {blogs.map((blog, index) => (
          <div 
            className="flex-none w-[280px] max-w-[280px] snap-center md:flex-auto md:w-auto md:max-w-none cursor-pointer" 
            key={index}
            onClick={() => scrollToCard(index)}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-2xl rounded-[16px] border border-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,190,133,0.15)] hover:border-[#D4BE85]/30 overflow-hidden h-full flex flex-col group relative"
              initial={{ opacity: 0.6, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Gradient Border Effect on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4BE85]/20 rounded-[16px] transition-colors duration-500 pointer-events-none z-20"></div>

              <div className="relative overflow-hidden h-[200px]">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#D4BE85]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col relative z-10">
                <span className="font-outfit text-xs font-bold text-[#D4BE85] uppercase tracking-widest mb-3">{blog.date}</span>
                <h3 className="font-playfair font-bold text-primary text-xl mb-3 leading-tight group-hover:text-[#D4BE85] transition-colors duration-300">{blog.title}</h3>
                <a href={blog.link} className="font-outfit text-[#D4BE85] font-semibold text-sm uppercase tracking-wider mt-auto inline-flex items-center gap-2 hover:gap-3 transition-all group/link">
                  Read More <FaArrowRight size={12} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

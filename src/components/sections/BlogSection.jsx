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
  return (
    <section id="blog" className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-5"
      >
        <h2 className="section-title">Latest Articles</h2>
        <p className="text-muted" style={{ fontFamily: 'Plus Jakarta Sans' }}>Thoughts on technology and design</p>
      </motion.div>

      <div className="row g-4">
        {blogs.map((blog, index) => (
          <div className="col-md-4" key={index}>
            <motion.div
              className="glass-card blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img src={blog.image} alt={blog.title} className="blog-img" />
              <div className="blog-content">
                <span className="blog-date">{blog.date}</span>
                <h3 className="blog-title">{blog.title}</h3>
                <a href={blog.link} className="blog-link">
                  Read More <FaArrowRight size={12} />
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

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const PremiumRevealWrapper = ({ children, className = "" }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Add physics-based smoothing to the scroll progress
  // This creates a "weighted" feel where the animation has momentum
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.2,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Advanced Cinematic 3D Effect
  // Uses smoothProgress for fluid, organic motion
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.85]);
  const rotateX = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [20, 0, 0, -20]);
  const y = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const blur = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [10, 0, 0, 10]);
  
  // Dynamic shadow for depth
  const shadowOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 0.2, 0.2, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        opacity, 
        scale, 
        rotateX,
        y,
        filter: useTransform(blur, (value) => `blur(${value}px)`),
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full ${className}`}
    >
      {/* Dynamic Shadow Element */}
      <motion.div 
        style={{ opacity: shadowOpacity }}
        className="absolute inset-0 bg-black/5 rounded-[30px] -z-10 blur-2xl transform translate-y-10 scale-95"
      />
      {children}
    </motion.div>
  );
};

export default PremiumRevealWrapper;

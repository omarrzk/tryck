import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RotatingText = () => {
  const words = ['intryck', 'design', 'kvalitet', 'resultat', 'profilering'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(true);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block min-w-[200px]">
      <span className="text-primary relative z-10">
        <motion.span
          key={words[currentIndex]}
          initial={{ y: 40, opacity: 0 }}
          animate={isAnimating ? { y: 0, opacity: 1 } : { y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-block"
        >
          {words[currentIndex]}
        </motion.span>
      </span>
      <motion.span 
        className="absolute inset-0 bg-primary/20 blur-2xl -z-10"
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
    </span>
  );
};

export default RotatingText; 
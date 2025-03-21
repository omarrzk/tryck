'use client';

import { motion } from 'framer-motion';
import Button from '../shared/Button';
import Container from '../shared/Container';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <Container className="px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          {/* Main Heading */}
          <motion.h1 
            variants={fadeIn}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          >
            Professionellt Tryck & Design för{' '}
            <span className="text-yellow-400">Ditt Varumärke</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={fadeIn}
            className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 sm:mb-8 px-4 sm:px-0"
          >
            Vi hjälper företag att sticka ut med högkvalitativt tryck, 
            profilering och design sedan 2010
          </motion.p>

          {/* USP Points */}
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 sm:mb-10 px-4 sm:px-0"
          >
            {[
              'Snabb leverans 3-5 dagar',
              'Kostnadsfri konsultation',
              '100% nöjd-kund-garanti',
              'Miljöcertifierade produkter'
            ].map((point, index) => (
              <div 
                key={index}
                className="flex items-center justify-center text-sm sm:text-base text-white bg-black/20 backdrop-blur-sm rounded-lg py-2 px-4"
              >
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2 flex-shrink-0" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <span className="text-left">{point}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <Button 
              href="/offert"
              size="large"
              className="w-full sm:w-auto sm:min-w-[200px] text-sm sm:text-base"
            >
              Begär Offert
            </Button>
            <Button 
              href="#tjanster"
              variant="outline"
              size="large"
              className="w-full sm:w-auto sm:min-w-[200px] border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base"
            >
              Se Våra Tjänster
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white/10 to-transparent" />
    </div>
  );
} 
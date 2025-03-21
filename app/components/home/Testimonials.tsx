'use client';

import { motion } from 'framer-motion';
import { TestimonialItem } from '@/app/types';
import Container from '../shared/Container';

const testimonials: TestimonialItem[] = [
  {
    text: 'Tryck Design levererade över förväntan! Deras professionella approach och snabba leveranser har gjort dem till vår go-to partner för alla trycksaker.',
    author: 'Anna Andersson',
    role: 'Marknadschef',
    company: 'Tech Solutions AB',
    rating: 5,
    image: '/testimonials/anna.jpg'
  },
  {
    text: 'Fantastisk service och högsta kvalitet på allt från visitkort till mässkoncept. De förstår verkligen våra behov och levererar alltid i tid.',
    author: 'Erik Eriksson',
    role: 'VD',
    company: 'Byggbolaget AB',
    rating: 5,
    image: '/testimonials/erik.jpg'
  },
  {
    text: 'Vi har samarbetat med Tryck Design i över 3 år nu och är mycket nöjda. Deras kreativa lösningar och flexibilitet är ovärderlig för vårt företag.',
    author: 'Maria Svensson',
    role: 'Art Director',
    company: 'Design Studio Stockholm',
    rating: 5,
    image: '/testimonials/maria.jpg'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={`flex gap-1 ${className || ''}`}>
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="recensioner" className="py-12 sm:py-20 bg-gray-50">
      <Container className="px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Vad Våra Kunder Säger
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0"
          >
            Se vad andra företag tycker om våra tjänster och hur vi har 
            hjälpt dem att utveckla sina varumärken.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={fadeInUp}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <StarRating rating={testimonial.rating} className="text-yellow-400" />
              <blockquote className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <div className="mt-4 sm:mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-3 sm:ml-4">
                  <div className="text-sm sm:text-base font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
} 
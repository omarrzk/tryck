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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
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
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Vad våra kunder säger
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Vi är stolta över att ha hjälpt hundratals företag att växa genom 
            kreativa tryck- och designlösningar.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-6 text-gray-600">
                "{testimonial.text}"
              </blockquote>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center">
              <span className="text-4xl font-bold text-primary">4.9</span>
              <div className="ml-2">
                <StarRating rating={5} />
                <p className="text-sm text-gray-500">Genomsnittligt betyg</p>
              </div>
            </div>
            <p className="text-gray-600">Baserat på över 100 kundrecensioner</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
} 
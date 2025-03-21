'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem } from '@/app/types';
import Container from '../shared/Container';
import Button from '../shared/Button';

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Företagsprofilering ABC Bygg',
    description: 'Komplett grafisk profil med logotyp, trycksaker och profilkläder.',
    category: 'Grafisk Design',
    image: '/portfolio/company-branding.jpg',
    client: 'ABC Bygg AB',
    results: 'Ökad igenkänning och professionellt intryck',
    link: '/case/abc-bygg'
  },
  {
    title: 'Produktkatalog XYZ Mode',
    description: 'Modern produktkatalog med över 100 sidor av högkvalitativt tryck.',
    category: 'Trycksaker',
    image: '/portfolio/product-catalog.jpg',
    client: 'XYZ Mode AB',
    results: '25% ökning i försäljning efter lansering',
    link: '/case/xyz-mode'
  },
  {
    title: 'Mässkoncept Tech Expo',
    description: 'Komplett mässpaket med montermaterial och give-aways.',
    category: 'Event',
    image: '/portfolio/expo-concept.jpg',
    client: 'Tech Solutions AB',
    results: '500+ nya leads från mässan',
    link: '/case/tech-expo'
  },
  {
    title: 'Restaurangmeny Pasta Palace',
    description: 'Exklusiv menydesign med specialtryck och unik finish.',
    category: 'Trycksaker',
    image: '/portfolio/restaurant-menu.jpg',
    client: 'Pasta Palace',
    results: 'Förbättrad kundupplevelse och merförsäljning',
    link: '/case/pasta-palace'
  },
  {
    title: 'Profilkläder Städ & Service',
    description: 'Profilerade arbetskläder för hela personalstyrkan.',
    category: 'Profilprodukter',
    image: '/portfolio/workwear.jpg',
    client: 'Städ & Service AB',
    results: 'Stärkt teamkänsla och professionellt intryck',
    link: '/case/stad-service'
  },
  {
    title: 'Kampanjmaterial Sport Store',
    description: 'Säsongsbaserat kampanjmaterial för butik och online.',
    category: 'Marknadsföring',
    image: '/portfolio/campaign-material.jpg',
    client: 'Sport Store AB',
    results: '40% ökad försäljning under kampanjperioden',
    link: '/case/sport-store'
  }
];

const categories = ['Alla', 'Grafisk Design', 'Trycksaker', 'Profilprodukter', 'Event', 'Marknadsföring'];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Alla');

  const filteredItems = activeCategory === 'Alla'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Våra Senaste Projekt
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Se hur vi har hjälpt andra företag att växa och utvecklas genom 
            kreativa lösningar och högkvalitativa produkter.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.5
                    }
                  }
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-lg font-semibold mb-2">{item.client}</p>
                      <p className="text-white/80 mb-4">{item.results}</p>
                      <Button href={item.link} size="small" variant="outline" className="!text-white border-white hover:bg-white hover:!text-gray-900">
                        Se Case
                      </Button>
                    </div>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm font-medium text-primary">{item.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <Button href="/portfolio" variant="outline" size="large">
            Se fler projekt
          </Button>
        </motion.div>
      </Container>
    </section>
  );
} 
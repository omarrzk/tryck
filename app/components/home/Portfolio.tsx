'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem } from '@/app/types';
import Container from '../shared/Container';
import Button from '../shared/Button';

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Företagsprofilering',
    description: 'Komplett visuell identitet och profilmaterial för byggföretag',
    category: 'Profilering',
    image: '/portfolio/company-branding.jpg',
    client: 'ABC Bygg AB',
    results: [
      'Ökad igenkänning och professionellt intryck',
      'Enhetlig visuell identitet',
      'Stärkt varumärkesposition'
    ],
    link: '/case/abc-bygg'
  },
  {
    title: 'Produktkatalog',
    description: 'Design och tryck av omfattande produktkatalog',
    category: 'Tryck',
    image: '/portfolio/product-catalog.jpg',
    client: 'XYZ Möbler',
    results: [
      'Ökad försäljning genom tydlig produktpresentation',
      'Förbättrad kundupplevelse',
      'Effektiv produktkommunikation'
    ],
    link: '/case/xyz-mobler'
  },
  {
    title: 'Mässmaterial',
    description: 'Storformatsprint för mässmonter och event',
    category: 'Storformat',
    image: '/portfolio/exhibition-materials.jpg',
    client: 'Tech Expo',
    results: [
      'Uppmärksammat mässdeltagande',
      'Professionell exponering',
      'Ökad leads-generering'
    ],
    link: '/case/tech-expo'
  },
  {
    title: 'Digital Design',
    description: 'Modern webbdesign och digital närvaro',
    category: 'Design',
    image: '/portfolio/digital-design.jpg',
    client: 'Digital Solutions',
    results: [
      'Förbättrad användarupplevelse',
      'Ökad digital konvertering',
      'Modern digital profil'
    ],
    link: '/case/digital-solutions'
  },
  {
    title: 'Förpackningsdesign',
    description: 'Innovativ förpackningsdesign för produktserie',
    category: 'Design',
    image: '/portfolio/packaging.jpg',
    client: 'Eco Products',
    results: [
      'Ökad hyllsynlighet',
      'Förbättrad produktidentitet',
      'Miljövänlig förpackningslösning'
    ],
    link: '/case/eco-products'
  },
  {
    title: 'Eventmaterial',
    description: 'Komplett eventpaket med trycksaker och dekormaterial',
    category: 'Tryck',
    image: '/portfolio/event-materials.jpg',
    client: 'Event Pro',
    results: [
      'Professionell eventexponering',
      'Enhetlig visuell kommunikation',
      'Ökat deltagarengagemang'
    ],
    link: '/case/event-pro'
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
                      <p className="text-white/80 mb-4">{item.results.join(', ')}</p>
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
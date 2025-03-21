'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem } from '@/app/types';
import Container from '../shared/Container';
import Button from '../shared/Button';
import Image from 'next/image';

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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const filteredItems = activeCategory === 'Alla'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const minSwipeDistance = 50;
    if (touchStart - touchEnd > minSwipeDistance) {
      const currentIndex = categories.indexOf(activeCategory);
      const nextIndex = (currentIndex + 1) % categories.length;
      setActiveCategory(categories[nextIndex]);
    }
    if (touchEnd - touchStart > minSwipeDistance) {
      const currentIndex = categories.indexOf(activeCategory);
      const nextIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
      setActiveCategory(categories[nextIndex]);
    }
  };

  return (
    <section id="portfolio" className="py-12 sm:py-20">
      <Container className="px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Våra Senaste Projekt
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4"
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
          className="overflow-x-auto -mx-4 px-4 mb-8 sm:mb-12"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex flex-nowrap sm:flex-wrap sm:justify-center gap-3 min-w-max sm:min-w-0 pb-4 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm whitespace-nowrap font-medium transition-all
                  ${activeCategory === category
                    ? 'bg-primary text-white scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
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
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center touch-none">
                    <div className="text-center p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-base sm:text-lg font-semibold mb-2">{item.client}</p>
                      <p className="text-white/80 text-sm sm:text-base mb-4">{item.results.join(', ')}</p>
                      <Button 
                        href={item.link} 
                        size="small" 
                        variant="outline" 
                        className="!text-white border-white hover:bg-white hover:!text-gray-900 text-sm sm:text-base"
                      >
                        Se Case
                      </Button>
                    </div>
                  </div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <span className="text-xs sm:text-sm font-medium text-primary">{item.category}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-1 sm:mt-2 mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
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
          className="text-center mt-10 sm:mt-16"
        >
          <Button href="/portfolio" variant="outline" size="large" className="w-full sm:w-auto">
            Se fler projekt
          </Button>
        </motion.div>
      </Container>
    </section>
  );
} 
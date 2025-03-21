'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/shared/Container';

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

const categories = [
  'Alla',
  'Trycksaker',
  'Profilprodukter',
  'Design',
  'Storformat'
];

const portfolioItems = [
  {
    id: 1,
    title: 'Företagsprofilering ABC Corp',
    category: 'Design',
    description: 'Komplett visuell identitet inklusive logotyp, grafisk profil och trycksaker.',
    image: '/portfolio/design-1.jpg',
    tags: ['Logotyp', 'Grafisk Profil', 'Trycksaker']
  },
  {
    id: 2,
    title: 'Mässkampanj XYZ Event',
    category: 'Storformat',
    description: 'Omfattande mässprofil med monterväggar, roll-ups och trycksaker.',
    image: '/portfolio/large-format-1.jpg',
    tags: ['Mässmaterial', 'Storformat', 'Design']
  },
  {
    id: 3,
    title: 'Produktkatalog Fashion Brand',
    category: 'Trycksaker',
    description: '80-sidig produktkatalog med exklusivt papper och speciallack.',
    image: '/portfolio/print-1.jpg',
    tags: ['Katalog', 'Tryck', 'Design']
  },
  {
    id: 4,
    title: 'Profilkollektion Tech Corp',
    category: 'Profilprodukter',
    description: 'Företagskläder och give-aways för tech-företag.',
    image: '/portfolio/promo-1.jpg',
    tags: ['Kläder', 'Give-aways', 'Profilering']
  },
  {
    id: 5,
    title: 'Butiksdekor Retail Chain',
    category: 'Storformat',
    description: 'Omfattande butiksskyltning och fönsterdekor för butikskedja.',
    image: '/portfolio/large-format-2.jpg',
    tags: ['Skyltning', 'Dekor', 'Design']
  },
  {
    id: 6,
    title: 'Årsredovisning Finance AB',
    category: 'Trycksaker',
    description: 'Kreativ årsredovisning med specialpapper och prägling.',
    image: '/portfolio/print-2.jpg',
    tags: ['Rapport', 'Tryck', 'Design']
  }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('Alla');

  const filteredItems = selectedCategory === 'Alla'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Portfolio
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-xl text-gray-100"
            >
              Se ett urval av våra senaste projekt inom tryck, design och profilering.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <Container>
          {/* Category Filter */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="group bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Redo att starta ert projekt?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Vi hjälper er att förverkliga era idéer med högsta kvalitet och service.
            </p>
            <a
              href="/offert"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
            >
              Begär offert nu
            </a>
          </motion.div>
        </Container>
      </section>
    </div>
  );
} 
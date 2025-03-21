'use client';

import { motion } from 'framer-motion';
import { ServiceItem } from '@/app/types';
import Container from '../components/shared/Container';
import Button from '../components/shared/Button';

const services: ServiceItem[] = [
  {
    title: 'Trycksaker & Produktion',
    description: 'Professionellt tryck för alla företagsbehov',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    price: 'Från 499 kr',
    features: [
      'Visitkort & Brevpapper',
      'Broschyrer & Kataloger',
      'Affischer & Posters',
      'Kuvert & Mappar',
      'Roll-ups & Banderoller'
    ],
    link: '/tjanster/tryck'
  },
  {
    title: 'Profilprodukter & Kläder',
    description: 'Stärk ert varumärke med profilerade produkter',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    price: 'Från 299 kr',
    features: [
      'Företagskläder',
      'Give-aways',
      'Mässprodukter',
      'Kontorsmaterial',
      'Presentartiklar'
    ],
    link: '/tjanster/profil'
  },
  {
    title: 'Design & Profilering',
    description: 'Kreativ design som sticker ut',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    price: 'Från 3 999 kr',
    features: [
      'Logotyp & Grafisk Profil',
      'Förpackningsdesign',
      'Annonser & Reklam',
      'Webb & Digital Design',
      'Sociala Medier-material'
    ],
    link: '/tjanster/design'
  },
  {
    title: 'Storformat & Skyltar',
    description: 'Synlighet i stort format',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    price: 'Från 1 499 kr',
    features: [
      'Fasadskyltar',
      'Vepor & Banderoller',
      'Mässväggar',
      'Fordonsdekor',
      'Fönsterdekor'
    ],
    link: '/tjanster/storformat'
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

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Våra Tjänster
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-xl text-gray-100"
            >
              Vi erbjuder ett komplett utbud av tryck- och designtjänster för att 
              hjälpa ditt företag att växa och synas.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="mb-6">
                  <p className="text-2xl font-bold text-primary mb-4">
                    {service.price}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  href={service.link}
                  variant="outline"
                  className="w-full"
                >
                  Läs mer
                </Button>
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
              Redo att starta ditt projekt?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Kontakta oss idag för en kostnadsfri konsultation och få ett 
              skräddarsytt förslag för just dina behov.
            </p>
            <Button href="/offert" size="large">
              Begär offert nu
            </Button>
          </motion.div>
        </Container>
      </section>
    </main>
  );
} 
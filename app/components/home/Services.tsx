'use client';

import { motion } from 'framer-motion';
import { ServiceItem } from '@/app/types';
import Container from '../shared/Container';
import Button from '../shared/Button';

const services: ServiceItem[] = [
  {
    title: 'Trycksaker & Produktion',
    description: 'Kvalitetstryck för alla behov med snabb leverans och konkurrenskraftiga priser.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    price: 'Från 499 kr',
    features: [
      'Digitaltryck & Offsettryck',
      'Storformat & Skyltar',
      'Förpackningar & Etiketter',
      'Broschyrer & Kataloger',
      'Visitkort & Brevpapper'
    ],
    link: '/tjanster/tryck'
  },
  {
    title: 'Profilprodukter & Kläder',
    description: 'Stärk ert varumärke med profilerade produkter och företagskläder.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    price: 'Från 299 kr',
    features: [
      'Företagskläder & Workwear',
      'Profilprodukter & Give-aways',
      'Mäss- & Eventmaterial',
      'Presentartiklar',
      'Pennor & Kontorsmaterial'
    ],
    link: '/tjanster/profil'
  },
  {
    title: 'Design & Profilering',
    description: 'Kreativ design som syns och sticker ut i mängden.',
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
      'Annonser & Marknadsföring',
      'Webb & Digital Design',
      'Sociala Medier-paket'
    ],
    link: '/tjanster/design'
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

export default function Services() {
  return (
    <section id="tjanster" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Våra Tjänster
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Vi erbjuder ett komplett utbud av tryck- och designtjänster för att 
            hjälpa ditt företag att växa och synas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.2,
                    duration: 0.5,
                    ease: 'easeOut'
                  }
                }
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="mb-6">
                  <p className="text-2xl font-bold text-primary mb-2">
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
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <Button href="/offert" size="large">
            Begär offert nu
          </Button>
        </motion.div>
      </Container>
    </section>
  );
} 
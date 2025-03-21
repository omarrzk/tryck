'use client';

import { motion } from 'framer-motion';
import Container from '../../components/shared/Container';
import Button from '../../components/shared/Button';

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

const promoProducts = [
  {
    title: 'Företagskläder',
    description: 'Professionella och bekväma arbetskläder med er företagsidentitet.',
    features: [
      'T-shirts och pikétröjor',
      'Jackor och västar',
      'Arbetskläder och skyddsutrustning',
      'Brodyr och tryck',
      'Alla storlekar'
    ],
    image: '/services/workwear.jpg'
  },
  {
    title: 'Give-aways & Profilprodukter',
    description: 'Minnesvärda profilprodukter som stärker ert varumärke.',
    features: [
      'Pennor och kontorsmaterial',
      'Muggar och vattenflaskor',
      'USB-minnen och teknik',
      'Miljövänliga alternativ',
      'Anpassad design'
    ],
    image: '/services/giveaways.jpg'
  },
  {
    title: 'Mäss- & Eventmaterial',
    description: 'Komplett utbud av produkter för mässor och events.',
    features: [
      'Roll-ups och banderoller',
      'Mässväggar och montrar',
      'Beach flags',
      'Broschyrställ',
      'Portabla diskar'
    ],
    image: '/services/event-material.jpg'
  }
];

const categories = [
  {
    title: 'Kontor & Skrivmaterial',
    items: ['Pennor', 'Anteckningsblock', 'Kalendrar', 'Mappar', 'USB-minnen']
  },
  {
    title: 'Kläder & Accessoarer',
    items: ['T-shirts', 'Pikétröjor', 'Jackor', 'Kepsar', 'Väskor']
  },
  {
    title: 'Dryck & Kök',
    items: ['Muggar', 'Vattenflaskor', 'Termosar', 'Lunchboxar', 'Förkläden']
  },
  {
    title: 'Event & Mässa',
    items: ['Roll-ups', 'Beachflaggor', 'Tält', 'Broschyrställ', 'Monterväggar']
  }
];

export default function PromoProductsPage() {
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
              Profilprodukter & Kläder
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-xl text-gray-100"
            >
              Stärk ert varumärke med profilerade produkter som gör intryck. 
              Vi hjälper er att välja rätt produkter för era behov.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-20"
          >
            {promoProducts.map((product, index) => (
              <motion.div
                key={product.title}
                variants={fadeInUp}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button href="/offert" variant="outline">
                    Begär offert
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              Vårt Sortiment
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Vi erbjuder ett brett sortiment av profilprodukter för alla tillfällen
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {categories.map((category) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-gray-600">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* USP Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {[
              {
                title: 'Kvalitetsgaranti',
                description: 'Vi väljer endast produkter från certifierade leverantörer',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: 'Snabb Leverans',
                description: 'Leverans inom 5-10 arbetsdagar på de flesta produkter',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Miljömedvetna Val',
                description: 'Stort utbud av miljövänliga och hållbara alternativ',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((usp) => (
              <motion.div
                key={usp.title}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  {usp.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {usp.title}
                </h3>
                <p className="text-gray-600">
                  {usp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-6">
              Låt oss hjälpa er att sticka ut
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Kontakta oss idag för en kostnadsfri konsultation och få förslag på 
              profilprodukter som passar just er verksamhet.
            </p>
            <Button
              href="/offert"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Begär offert nu
            </Button>
          </motion.div>
        </Container>
      </section>
    </main>
  );
} 
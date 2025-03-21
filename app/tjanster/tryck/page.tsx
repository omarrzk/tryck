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

const printServices = [
  {
    title: 'Visitkort & Brevpapper',
    description: 'Professionella visitkort och brevpapper som ger ett starkt första intryck.',
    features: [
      'Premium papperskvaliteter',
      'Specialeffekter som folietryck',
      'Miljövänliga alternativ',
      'Snabb leverans',
      'Från 100 st'
    ],
    image: '/services/business-cards.jpg'
  },
  {
    title: 'Broschyrer & Kataloger',
    description: 'Högkvalitativa broschyrer och produktkataloger som presenterar ert erbjudande.',
    features: [
      'Flera bindningsalternativ',
      'Matt eller glansigt papper',
      'Anpassade format',
      'Från 50 st',
      'Leverans inom 5-7 dagar'
    ],
    image: '/services/brochures.jpg'
  },
  {
    title: 'Affischer & Posters',
    description: 'Öka synligheten med effektfulla affischer i olika format.',
    features: [
      'Storlekar från A4 till A0',
      'Inomhus- och utomhuskvalitet',
      'Högupplöst fotokvalitet',
      'Från 1 st',
      'Express leverans möjlig'
    ],
    image: '/services/posters.jpg'
  }
];

export default function PrintServicesPage() {
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
              Trycksaker & Produktion
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-xl text-gray-100"
            >
              Professionellt tryck för alla företagsbehov. Vi hjälper er att sticka 
              ut med högkvalitativa trycksaker som gör intryck.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-20"
          >
            {printServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature) => (
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

      {/* Process Section */}
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
              Vår Process
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Vi gör det enkelt att beställa trycksaker av högsta kvalitet
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                title: 'Konsultation',
                description: 'Vi diskuterar era behov och ger expertråd',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )
              },
              {
                title: 'Design',
                description: 'Vi skapar eller anpassar designen',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                )
              },
              {
                title: 'Produktion',
                description: 'Vi trycker med högsta kvalitet',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Leverans',
                description: 'Vi levererar i tid, varje gång',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                )
              }
            ].map((step) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-primary rounded-xl text-white p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Redo att starta ditt tryckprojekt?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Kontakta oss idag för en kostnadsfri konsultation och få ett 
              skräddarsytt förslag för just dina behov.
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
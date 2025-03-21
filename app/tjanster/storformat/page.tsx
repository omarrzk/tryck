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

const largeFormatServices = [
  {
    title: 'Fasadskyltar',
    description: 'Professionella skyltar som gör ert företag synligt dygnet runt.',
    features: [
      'LED-belysning',
      'Väderbeständiga material',
      'Olika storlekar och former',
      'Installation ingår',
      'Bygglovssupport'
    ],
    image: '/services/signs.jpg'
  },
  {
    title: 'Vepor & Banderoller',
    description: 'Högkvalitativa storformatstryck för inom- och utomhusbruk.',
    features: [
      'PVC eller mesh-material',
      'UV-beständigt tryck',
      'Förstärkta kanter',
      'Öljetter eller fickor',
      'Snabb leverans'
    ],
    image: '/services/banners.jpg'
  },
  {
    title: 'Fordonsdekor',
    description: 'Förvandla era fordon till rullande reklampelare.',
    features: [
      'Heltäckande foliering',
      'Delvis foliering',
      'Högkvalitativ vinyl',
      'Professionell montering',
      '3M-certifierade material'
    ],
    image: '/services/vehicle-wraps.jpg'
  },
  {
    title: 'Fönsterdekor',
    description: 'Maximera synligheten och skapa rätt atmosfär med fönsterdekor.',
    features: [
      'Frostad folie',
      'Helfoliering',
      'One-way vision',
      'Dekorativa mönster',
      'UV-skydd'
    ],
    image: '/services/window-graphics.jpg'
  }
];

const benefits = [
  {
    title: 'Professionell Design',
    description: 'Vi hjälper er med design som maximerar synlighet och effekt',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    title: 'Högsta Kvalitet',
    description: 'Vi använder endast material och tekniker av högsta kvalitet',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Installation',
    description: 'Komplett service med professionell installation',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

export default function LargeFormatPage() {
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
              Storformat & Skyltar
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-xl text-gray-100"
            >
              Maximera er synlighet med professionella storformatslösningar. 
              Vi hjälper er att synas stort och tydligt.
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
            {largeFormatServices.map((service, index) => (
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

      {/* Benefits Section */}
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
              Därför Väljer Ni Oss
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Vi erbjuder en komplett lösning från design till installation
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Portfolio Preview */}
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
              Tidigare Projekt
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Se några exempel på våra senaste storformatsprojekt
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={`/portfolio/large-format-${item}.jpg`}
                  alt={`Storformat projekt ${item}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    href={`/portfolio/large-format-${item}`}
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    Se projekt
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button href="/portfolio" variant="outline">
              Se hela portfolion
            </Button>
          </div>
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
              Redo att öka er synlighet?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Kontakta oss idag för en kostnadsfri konsultation och få förslag på 
              hur vi kan hjälpa er att synas mer effektivt.
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
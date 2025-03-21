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

const designServices = [
  {
    title: 'Logotyp & Grafisk Profil',
    description: 'Skapa en stark och minnesvärd visuell identitet för ert företag.',
    features: [
      'Logotypdesign',
      'Färgpalett & Typografi',
      'Grafiska element',
      'Designmanual',
      'Olika filformat'
    ],
    image: '/services/branding.jpg'
  },
  {
    title: 'Förpackningsdesign',
    description: 'Sticka ut i hyllan med unik och säljande förpackningsdesign.',
    features: [
      'Produktförpackningar',
      'Etiketter & Labels',
      'Strukturell design',
      'Materialval',
      'Produktfotografering'
    ],
    image: '/services/packaging.jpg'
  },
  {
    title: 'Digital Design',
    description: 'Modern digital design för alla plattformar och kanaler.',
    features: [
      'Webbdesign',
      'Sociala medier',
      'Banners & Annonser',
      'Nyhetsbrev',
      'Presentationer'
    ],
    image: '/services/digital.jpg'
  }
];

const designProcess = [
  {
    title: 'Research & Analys',
    description: 'Vi analyserar er marknad, målgrupp och konkurrenter',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    title: 'Koncept & Skisser',
    description: 'Vi tar fram kreativa koncept och skisser',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    )
  },
  {
    title: 'Design & Iteration',
    description: 'Vi förfinar designen baserat på er feedback',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: 'Leverans & Support',
    description: 'Vi levererar alla filer och ger support',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    )
  }
];

export default function DesignServicesPage() {
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
              Design & Profilering
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-xl text-gray-100"
            >
              Vi hjälper er att skapa en stark visuell identitet som sticker ut 
              och kommunicerar ert varumärkes värden.
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
            {designServices.map((service, index) => (
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
              Vår Designprocess
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Vi följer en beprövad process för att säkerställa att slutresultatet 
              möter era förväntningar och mål
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {designProcess.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="relative"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < designProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gray-300 transform -translate-y-1/2" />
                )}
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
              Utvalda Projekt
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Se några exempel på våra senaste designprojekt
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
                  src={`/portfolio/design-${item}.jpg`}
                  alt={`Design projekt ${item}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    href={`/portfolio/design-${item}`}
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
              Redo att utveckla er visuella identitet?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Kontakta oss idag för en kostnadsfri konsultation och få förslag på 
              hur vi kan hjälpa er att sticka ut på marknaden.
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
'use client';

import { motion } from 'framer-motion';
import Container from '../components/shared/Container';

const teamMembers = [
  {
    name: 'Johan Andersson',
    role: 'VD & Grundare',
    image: '/team/johan.jpg',
    bio: 'Med över 20 års erfarenhet i tryckbranschen grundade Johan Tryck Design 2010 med visionen att erbjuda högkvalitativa tryck- och designlösningar till konkurrenskraftiga priser.'
  },
  {
    name: 'Maria Bergström',
    role: 'Art Director',
    image: '/team/maria.jpg',
    bio: 'Maria leder vårt kreativa team och har en bakgrund från några av Sveriges främsta designbyråer. Hon brinner för att skapa visuella identiteter som sticker ut.'
  },
  {
    name: 'Anders Nilsson',
    role: 'Produktionschef',
    image: '/team/anders.jpg',
    bio: 'Anders ansvarar för vår produktion och ser till att alla projekt levereras med högsta kvalitet och i tid. Hans tekniska kunnande är ovärderligt för våra kunder.'
  },
  {
    name: 'Lisa Karlsson',
    role: 'Projektledare',
    image: '/team/lisa.jpg',
    bio: 'Med sin bakgrund inom projektledning och kundservice ser Lisa till att varje projekt flyter smidigt från start till mål. Hon är kundens främsta kontaktperson.'
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

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            >
              Om Tryck Design
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-xl text-gray-600"
            >
              Vi är en passionerad tryckeri- och designbyrå som hjälper företag att växa 
              genom kreativa lösningar och högkvalitativa produkter. Med över ett decennium 
              av erfarenhet kombinerar vi traditionellt hantverk med modern teknologi.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kvalitet</h3>
              <p className="text-gray-600">
                Vi kompromissar aldrig med kvaliteten. Varje projekt genomförs med 
                största noggrannhet och de bästa materialen.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Vi ligger alltid i framkant med den senaste tekniken och trenderna 
                inom tryck och design.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Samarbete</h3>
              <p className="text-gray-600">
                Vi ser våra kunder som partners och jobbar tätt tillsammans för att 
                nå bästa möjliga resultat.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Team Section */}
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
              Vårt Team
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Möt personerna bakom Tryck Design. Ett dedikerat team av experter inom 
              tryck, design och kundservice.
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* History Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center"
            >
              Vår Historia
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-12"
            >
              <motion.div variants={fadeInUp} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <span className="text-primary font-bold">2010</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Grundandet</h3>
                  <p className="text-gray-600">
                    Tryck Design grundades med målet att erbjuda högkvalitativa 
                    tryck- och designtjänster till rimliga priser.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <span className="text-primary font-bold">2015</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expansion</h3>
                  <p className="text-gray-600">
                    Vi expanderade verksamheten med nya maskiner och började erbjuda 
                    ett bredare utbud av tjänster.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <span className="text-primary font-bold">2018</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Transformation</h3>
                  <p className="text-gray-600">
                    Investerade i den senaste digitala tekniken för att möta den 
                    växande efterfrågan på snabba leveranser och personalisering.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <span className="text-primary font-bold">2023</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Hållbarhetsfokus</h3>
                  <p className="text-gray-600">
                    Lanserade vårt hållbarhetsinitiativ med fokus på miljövänliga 
                    material och processer.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
} 
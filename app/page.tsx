'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Container from './components/shared/Container';
import Link from 'next/link';
import RotatingText from './components/shared/RotatingText';

// Förenklade och mer stabila animationer
const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// Dynamisk text-animation
const textReveal = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Lägg till nya animationseffekter
const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const services = [
  {
    title: 'Trycksaker',
    description: 'Visitkort, broschyrer, kataloger och annat tryckt material i högsta kvalitet.',
    icon: (
      <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    link: '/tjanster/tryck'
  },
  {
    title: 'Profilprodukter',
    description: 'Stärk ert varumärke med skräddarsydda profilprodukter och företagskläder.',
    icon: (
      <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    link: '/tjanster/profil'
  },
  {
    title: 'Design',
    description: 'Professionell grafisk design för alla era behov, från logotyper till förpackningar.',
    icon: (
      <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
      </svg>
    ),
    link: '/tjanster/design'
  },
  {
    title: 'Storformat',
    description: 'Skyltar, banderoller och fordonsdekor som syns och gör intryck.',
    icon: (
      <svg className="w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    ),
    link: '/tjanster/storformat'
  }
];

const featuredProjects = [
  {
    title: 'Företagsprofilering ABC Corp',
    description: 'Komplett visuell identitet med logotyp och trycksaker',
    image: '/portfolio/design-1.jpg',
    category: 'Design'
  },
  {
    title: 'Mässkampanj XYZ Event',
    description: 'Omfattande mässprofil och storformatstryck',
    image: '/portfolio/large-format-1.jpg',
    category: 'Storformat'
  },
  {
    title: 'Produktkatalog Fashion Brand',
    description: 'Exklusiv produktkatalog med specialeffekter',
    image: '/portfolio/print-1.jpg',
    category: 'Trycksaker'
  }
];

const statistics = [
  { number: '2500+', label: 'Nöjda kunder' },
  { number: '15000+', label: 'Levererade projekt' },
  { number: '99.8%', label: 'Leveransprecision' },
  { number: '15+', label: 'År i branschen' }
];

const testimonials = [
  {
    quote: "Tryck-Design har varit en ovärderlig partner i vår varumärkesutveckling. Deras professionalism och kvalitet är outstanding.",
    author: "Maria Andersson",
    role: "Marknadschef, Tech Solutions AB",
    image: "/testimonials/person1.jpg"
  },
  {
    quote: "Snabb leverans och exceptional kvalitet på alla trycksaker. Vi är mycket nöjda med samarbetet.",
    author: "Johan Bergström",
    role: "VD, Retail Group",
    image: "/testimonials/person2.jpg"
  },
  {
    quote: "Deras kreativa team har hjälpt oss att stick ut på mässor och events. Rekommenderas varmt!",
    author: "Anna Lindberg",
    role: "Event Manager, Event Co",
    image: "/testimonials/person3.jpg"
  }
];

const news = [
  {
    title: "Ny miljövänlig tryckpress",
    date: "2024-03-15",
    excerpt: "Vi investerar i framtiden med vår nya eco-certifierade tryckpress.",
    image: "/news/press.jpg"
  },
  {
    title: "Vinnare av Årets Tryckeri",
    date: "2024-02-28",
    excerpt: "Stolta över utmärkelsen som årets mest innovativa tryckeri.",
    image: "/news/award.jpg"
  },
  {
    title: "Lansering av expresstjänst",
    date: "2024-02-10",
    excerpt: "Nu erbjuder vi 24-timmars leverans på utvalda produkter.",
    image: "/news/express.jpg"
  }
];

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: false });

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] sm:min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Video & Effects */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            opacity: useTransform(smoothProgress, [0, 0.2], [1, 0]),
            y: useTransform(smoothProgress, [0, 0.2], [0, -50])
          }}
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/90 mix-blend-multiply backdrop-blur-sm" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-110"
              poster="/hero-poster.jpg"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            
            {/* Light Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          </div>
        </motion.div>

        {/* Content */}
        <Container className="relative z-10 px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Main Heading */}
            <div className="overflow-hidden mb-4 sm:mb-6">
              <motion.h1 
                variants={textReveal}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Vi skapar kraftfulla{' '}
                <RotatingText />
                <br className="hidden sm:block" />
                för ditt företag
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto"
            >
              Professionellt tryck och design som hjälper ditt företag att sticka ut och växa.
            </motion.p>

            {/* USP Points */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 sm:mb-10"
            >
              {[
                'Snabb leverans 3-5 dagar',
                'Kostnadsfri konsultation',
                '100% nöjd-kund-garanti',
                'Miljöcertifierade produkter'
              ].map((point, index) => (
                <motion.div 
                  key={index}
                  variants={scaleUp}
                  className="flex items-center justify-center text-sm sm:text-base text-white bg-white/10 backdrop-blur-sm rounded-lg py-3 px-4"
                >
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <span className="text-left">{point}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <Link 
                href="/offert"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors w-full sm:w-auto"
              >
                Begär offert
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Link>
              <Link 
                href="#tjanster"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto backdrop-blur-sm"
              >
                Se våra tjänster
              </Link>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-32 md:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent animate-pulse" />
        </div>

        <Container className="relative px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16 sm:mb-24"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              Våra tjänster
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light"
            >
              Vi erbjuder ett komplett utbud av tjänster inom tryck, design och profilering 
              för att hjälpa ert företag att växa och synas.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative">
                  <div className="mb-6 sm:mb-8 text-primary transform transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 line-clamp-3 font-light leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-all duration-300 text-sm sm:text-base"
                  >
                    <span className="relative">
                      Läs mer
                      <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </span>
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
        <Container className="relative px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12 sm:mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight"
            >
              Utvalda projekt
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light"
            >
              Upptäck hur vi har hjälpt andra företag att förverkliga sina visioner 
              genom kreativt hantverk och innovation.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-900">
                  <motion.img
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="overflow-hidden">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm font-medium text-primary mb-2 sm:mb-3"
                      >
                        {project.category}
                      </motion.div>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 transform group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-4 font-light transform group-hover:translate-x-2 transition-transform duration-300 delay-75 line-clamp-2">
                      {project.description}
                    </p>
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center text-white group-hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                    >
                      <span className="relative">
                        Se projekt
                        <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </span>
                      <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="py-20 sm:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 animate-pulse" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-80"
          animate={{
            backgroundPosition: ['0%', '100%'],
            transition: { duration: 10, repeat: Infinity, repeatType: 'reverse' }
          }}
        />
        <Container className="relative px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-white"
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="text-center relative group"
              >
                <div className="absolute inset-0 bg-white/5 rounded-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                <div className="relative p-4 sm:p-6">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3">{stat.number}</div>
                  <div className="text-base sm:text-lg text-white/80 font-light tracking-wide">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent" />
        </div>
        
        <Container className="relative px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12 sm:mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight"
            >
              Vad våra kunder säger
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light"
            >
              Vi är stolta över att ha hjälpt hundratals företag att växa och utvecklas genom åren.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary/20 mb-4 sm:mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 font-light leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900">{testimonial.author}</h4>
                      <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        </div>

        <Container className="relative px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12 sm:mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight"
            >
              Vår process
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light"
            >
              En effektiv och transparent process som säkerställer högsta kvalitet i varje projekt.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
          >
            {[
              {
                step: "01",
                title: "Konsultation",
                description: "Vi börjar med att förstå era behov och mål för att skapa den perfekta lösningen.",
                icon: (
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                )
              },
              {
                step: "02",
                title: "Design",
                description: "Vi skapar koncept och designer som perfekt matchar er vision och varumärke.",
                icon: (
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                )
              },
              {
                step: "03",
                title: "Produktion",
                description: "Med modern teknik och expertis producerar vi era material med högsta kvalitet.",
                icon: (
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              {
                step: "04",
                title: "Leverans",
                description: "Vi levererar i tid och säkerställer att ni är helt nöjda med resultatet.",
                icon: (
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative">
                    <span className="text-4xl sm:text-5xl font-bold text-primary/10 absolute -top-2 -left-2">
                      {process.step}
                    </span>
                    <div className="text-primary mb-4 sm:mb-6 transform-gpu transition-transform duration-300 group-hover:scale-110">
                      {process.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">{process.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden sm:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* News Section */}
      <section className="py-20 sm:py-32 bg-white relative overflow-hidden">
        <Container className="relative px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12 sm:mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight"
            >
              Senaste nytt
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light"
            >
              Håll er uppdaterade om våra senaste nyheter, innovationer och framgångar.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          >
            {news.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <span className="text-sm text-primary font-medium">
                    {new Date(item.date).toLocaleDateString('sv-SE', { 
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-light mb-4 sm:mb-6 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <Link
                    href="/nyheter"
                    className="inline-flex items-center text-primary font-medium group-hover:translate-x-2 transition-all duration-300 text-sm sm:text-base"
                  >
                    <span className="relative">
                      Läs mer
                      <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </span>
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Partners Section */}
      <section className="py-20 sm:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        </div>

        <Container className="relative px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12 sm:mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight"
            >
              Våra partners
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light"
            >
              Vi samarbetar med ledande varumärken för att leverera högsta kvalitet.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 opacity-60"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
              <motion.div
                key={partner}
                variants={fadeInUp}
                className="flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-white rounded-2xl hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={`/partners/logo-${partner}.svg`}
                  alt={`Partner ${partner}`}
                  className="h-8 sm:h-10 lg:h-12 object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Modern CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)'
            ],
            transition: { duration: 5, repeat: Infinity, repeatType: 'reverse' }
          }}
        />
        <Container className="relative px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-8 tracking-tight"
            >
              Redo att skapa något
              <span className="text-primary-light"> extraordinärt</span>?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 font-light"
            >
              Låt oss hjälpa er att förverkliga era visioner och skapa bestående intryck.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            >
              <Link
                href="/offert"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary rounded-full font-medium overflow-hidden text-sm sm:text-base"
              >
                <span className="absolute inset-0 w-full h-full bg-primary-light/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative">Begär offert</span>
              </Link>
              <Link
                href="/kontakt"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full font-medium overflow-hidden text-sm sm:text-base"
              >
                <span className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative group-hover:text-primary transition-colors duration-300">Kontakta oss</span>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}

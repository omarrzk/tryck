'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from './Container';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    tjanster: [
      { name: 'Trycksaker', href: '/tjanster/tryck' },
      { name: 'Profilprodukter', href: '/tjanster/profil' },
      { name: 'Design', href: '/tjanster/design' },
      { name: 'Storformat', href: '/tjanster/storformat' }
    ],
    foretaget: [
      { name: 'Om oss', href: '/om-oss' },
      { name: 'Nyheter', href: '/nyheter' },
      { name: 'Karriär', href: '/karriar' },
      { name: 'Hållbarhet', href: '/hallbarhet' }
    ],
    kontakt: [
      { name: 'Kontakta oss', href: '/kontakt' },
      { name: 'Begär offert', href: '/offert' },
      { name: 'Hitta hit', href: '/kontakt#hitta-hit' },
      { name: 'Support', href: '/support' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )},
    { name: 'Instagram', href: '#', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )},
    { name: 'Facebook', href: '#', icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
      </svg>
    )}
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Bakgrundseffekter */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
      </div>

      <div className="relative">
        {/* Huvudinnehåll */}
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="py-20"
          >
            {/* Övre delen */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              {/* Företagsinfo */}
              <motion.div variants={fadeInUp}>
                <Link href="/" className="inline-block mb-8 group">
                  <span className="text-3xl font-bold text-white relative">
                    Tryck
                    <span className="text-primary relative inline-block group-hover:scale-110 transition-transform duration-300">
                      Design
                      <span className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </span>
                  </span>
                </Link>
                <p className="text-gray-400 text-lg mb-8 max-w-md font-light leading-relaxed">
                  Vi är er partner för exceptionellt tryck, tidlös design och profilering som gör skillnad. 
                  Med över 15 års erfarenhet levererar vi kvalitet i världsklass.
                </p>
                <div className="flex space-x-6">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-primary transition-all duration-300 hover:scale-110 transform"
                    >
                      <span className="sr-only">{item.name}</span>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Kontaktinfo */}
              <motion.div variants={fadeInUp} className="lg:text-right">
                <h3 className="text-xl font-semibold mb-6 text-primary relative inline-block">
                  Kontakta oss
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                </h3>
                <div className="space-y-3 text-gray-400 font-light">
                  <p className="flex lg:justify-end items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Industrigatan 12, 123 45 Stockholm</span>
                  </p>
                  <p className="flex lg:justify-end items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+46812345678" className="hover:text-primary transition-colors">08-12 34 56 78</a>
                  </p>
                  <p className="flex lg:justify-end items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@tryckdesign.se" className="hover:text-primary transition-colors">info@tryckdesign.se</a>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Länkar */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-t border-white/10"
            >
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-6 text-primary capitalize relative inline-block">
                    {category}
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                  </h3>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-primary transition-all duration-300 flex items-center group"
                        >
                          <span className="relative">
                            {link.name}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                          </span>
                          <svg 
                            className="w-4 h-4 ml-1 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>

        {/* Copyright */}
        <div className="bg-black/30 backdrop-blur-sm border-t border-white/5">
          <Container>
            <div className="py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-light">
              <p className="flex items-center">
                <span className="text-primary mr-2">©</span>
                {currentYear} TryckDesign. Alla rättigheter förbehållna.
              </p>
              <div className="flex space-x-8 mt-4 md:mt-0">
                {['Integritetspolicy', 'Cookies', 'Villkor'].map((item) => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase()}`} 
                    className="hover:text-primary transition-all duration-300 relative group"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';

const menuItems = [
  {
    title: 'Tjänster',
    items: [
      {
        name: 'Trycksaker & Produktion',
        description: 'Visitkort, broschyrer, kataloger och mer',
        href: '/tjanster/tryck',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
        )
      },
      {
        name: 'Profilprodukter & Kläder',
        description: 'Give-aways, företagskläder och mässprodukter',
        href: '/tjanster/profil',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        )
      },
      {
        name: 'Design & Profilering',
        description: 'Logotyp, grafisk profil och förpackningsdesign',
        href: '/tjanster/design',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        )
      },
      {
        name: 'Storformat & Skyltar',
        description: 'Fasadskyltar, vepor, fordonsdekor och fönsterdekor',
        href: '/tjanster/storformat',
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      }
    ]
  },
  {
    title: 'Portfolio',
    href: '/portfolio'
  },
  {
    title: 'Om oss',
    href: '/om-oss'
  },
  {
    title: 'Kontakt',
    href: '/kontakt'
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <img
              src="/logo.svg"
              alt="Tryck Design"
              className="h-8 sm:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.items ? (
                  <button
                    className="flex items-center space-x-1 py-2 text-base sm:text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                  >
                    <span>{item.title}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className="py-2 text-base sm:text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.items && (
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 w-80 mt-2 bg-white rounded-xl shadow-xl"
                      >
                        <div className="p-4 grid gap-4">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex-shrink-0 text-primary">
                                {subItem.icon}
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {subItem.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <Link
              href="/offert"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
            >
              Begär offert
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-10 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-gray-900 transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gray-900 transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed inset-0 z-40 lg:hidden"
              >
                <div 
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
                  onClick={() => setIsOpen(false)} 
                />
                <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl">
                  <div className="h-full overflow-y-auto">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-8">
                        <Link href="/" onClick={() => setIsOpen(false)}>
                          <img
                            src="/logo.svg"
                            alt="Tryck Design"
                            className="h-8"
                          />
                        </Link>
                        <button
                          onClick={() => setIsOpen(false)}
                          className="p-2 -mr-2 text-gray-500 hover:text-gray-900"
                        >
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      
                      {menuItems.map((item) => (
                        <div key={item.title} className="py-2">
                          {item.items ? (
                            <>
                              <button
                                onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                                className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-900"
                              >
                                {item.title}
                                <svg
                                  className={`w-4 h-4 transition-transform duration-300 ${
                                    activeDropdown === item.title ? 'rotate-180' : ''
                                  }`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              <AnimatePresence>
                                {activeDropdown === item.title && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden bg-gray-50 rounded-lg mt-2"
                                  >
                                    <div className="py-2 px-4">
                                      {item.items.map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          className="flex items-center py-3 text-base text-gray-600 hover:text-primary transition-colors"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <div className="w-6 h-6">
                                            {subItem.icon}
                                          </div>
                                          <span className="ml-3">{subItem.name}</span>
                                        </Link>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </>
                          ) : (
                            <Link
                              href={item.href!}
                              className="block py-3 text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.title}
                            </Link>
                          )}
                        </div>
                      ))}
                      
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <Link
                          href="/offert"
                          className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Begär offert
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </Container>
    </header>
  );
} 
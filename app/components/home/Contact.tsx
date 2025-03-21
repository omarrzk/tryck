'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactFormData, ContactInfo } from '@/app/types';
import Container from '../shared/Container';
import Button from '../shared/Button';

const contactInfo: ContactInfo = {
  email: 'info@tryckdesign.se',
  phone: '08-123 45 67',
  address: {
    street: 'Tryckvägen 1',
    city: 'Stockholm',
    zip: '123 45'
  },
  hours: [
    {
      days: 'Måndag-Fredag',
      time: '08:00-17:00'
    }
  ]
};

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

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Här skulle API-anropet för att skicka formuläret göras
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulerar API-anrop
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: '',
        budget: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="kontakt" className="py-12 sm:py-20 bg-gray-50">
      <Container className="px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            Kontakta Oss
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Har du frågor eller vill diskutera ett projekt? Vi finns här för att hjälpa dig!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-4 sm:space-y-8 order-2 lg:order-1"
          >
            <motion.div variants={fadeInUp} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">E-post</h3>
              </div>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-primary text-sm sm:text-base">
                {contactInfo.email}
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Telefon</h3>
              </div>
              <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-600 hover:text-primary text-sm sm:text-base">
                {contactInfo.phone}
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Besöksadress</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                {contactInfo.address.street}, {contactInfo.address.zip} {contactInfo.address.city}
              </p>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {contactInfo.hours[0].days}: {contactInfo.hours[0].time}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Namn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Ditt namn"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    E-post *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="din.epost@exempel.se"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="070-123 45 67"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Företag
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Företagsnamn"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Tjänst
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Välj tjänst</option>
                    <option value="design">Design</option>
                    <option value="tryck">Tryck</option>
                    <option value="profilering">Profilering</option>
                    <option value="storformat">Storformat</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Välj budget</option>
                    <option value="small">Under 10 000 kr</option>
                    <option value="medium">10 000 - 50 000 kr</option>
                    <option value="large">Över 50 000 kr</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Meddelande *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Beskriv ditt ärende..."
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs sm:text-sm text-gray-500 order-2 sm:order-1">* Obligatoriska fält</p>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto order-1 sm:order-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
                </Button>
              </div>

              {submitStatus === 'success' && (
                <p className="mt-4 text-green-600 text-sm">
                  Tack för ditt meddelande! Vi återkommer så snart som möjligt.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 
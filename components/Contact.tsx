'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-950 to-tech-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-lightBlue mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            Hablemos sobre tu próximo proyecto de IA
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-primary-900/50 to-primary-950/50 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-primary-800/30 shadow-lg"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-primary-950/50 border border-primary-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-tech-blue transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-primary-950/50 border border-primary-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-tech-blue transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 bg-primary-950/50 border border-primary-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-tech-blue transition-colors"
                placeholder="Nombre de tu empresa"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-primary-950/50 border border-primary-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-tech-blue transition-colors resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              ></textarea>
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 bg-tech-blue hover:bg-tech-lightBlue text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-tech-blue/50"
              >
                Enviar mensaje
              </motion.button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-primary-800/30 text-center">
            <p className="text-gray-300 mb-4">O escríbenos directamente:</p>
            <a
              href="mailto:contact@ramusolutions.com"
              className="inline-flex items-center text-tech-lightBlue hover:text-tech-blue transition-colors font-medium"
            >
              <span className="mr-2">📧</span>
              contact@ramusolutions.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

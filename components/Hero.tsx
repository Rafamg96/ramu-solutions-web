'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-tech-dark via-primary-950 to-tech-dark">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-tech-blue rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-tech-lightBlue rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold font-display text-white mb-6"
        >
          Inteligencia Artificial para
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-tech-lightBlue">
            tu negocio en Alcázar de San Juan
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Ayudamos a empresas de Ciudad Real y Castilla-La Mancha a digitalizar y automatizar sus procesos con tecnología de inteligencia artificial.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Consultoría, implementación y formación en IA para transformar tu empresa
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-tech-blue hover:bg-tech-lightBlue text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-tech-blue/50"
          >
            Solicitar consultoría gratuita
          </a>
          <a
            href="#services"
            className="inline-block px-8 py-4 bg-transparent border-2 border-tech-blue hover:bg-tech-blue/10 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Nuestros servicios
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-tech-blue rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

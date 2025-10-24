'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'Implementación de IA en tu negocio',
    description: 'Integramos inteligencia artificial en empresas de Alcázar de San Juan para automatizar procesos, reducir costes y aumentar la productividad de tu equipo.',
    icon: '🤖',
  },
  {
    title: 'Consultoría y formación en IA',
    description: 'Asesoramiento personalizado para empresas de Ciudad Real que quieren iniciar su transformación digital con tecnología de inteligencia artificial.',
    icon: '🎓',
  },
  {
    title: 'Automatización de procesos empresariales',
    description: 'Diseñamos soluciones de automatización inteligente adaptadas a negocios locales: gestión documental, atención al cliente, análisis de datos y más.',
    icon: '⚡',
  },
  {
    title: 'Chatbots y asistentes virtuales',
    description: 'Desarrollamos chatbots con IA para mejorar la atención al cliente 24/7 en tu empresa de Castilla-La Mancha, aumentando ventas y satisfacción.',
    icon: '💬',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-tech-dark to-primary-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Servicios de IA para empresas
          </h2>
          <p className="text-xl text-gray-300 mb-2">
            Soluciones de inteligencia artificial en Alcázar de San Juan
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-lightBlue mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-primary-900/50 to-primary-950/50 backdrop-blur-sm p-8 rounded-xl border border-primary-800/30 hover:border-tech-blue/50 transition-all duration-300 shadow-lg hover:shadow-tech-blue/20"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold font-display text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

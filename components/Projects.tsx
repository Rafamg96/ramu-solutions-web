'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Sistema de Análisis de Sentimientos',
    description: 'Plataforma de análisis de opiniones en redes sociales para una empresa de retail, procesando más de 100K menciones diarias.',
    tools: ['PyTorch', 'Transformers', 'FastAPI', 'React'],
    image: '📊',
  },
  {
    title: 'Asistente Virtual Conversacional',
    description: 'Chatbot inteligente para atención al cliente con integración de base de conocimientos y procesamiento de lenguaje natural.',
    tools: ['LangChain', 'OpenAI', 'Vector DB', 'Node.js'],
    image: '💬',
  },
  {
    title: 'Sistema de Detección de Objetos',
    description: 'Solución de visión por computadora para control de calidad en líneas de producción industrial con precisión del 99.5%.',
    tools: ['YOLO', 'TensorFlow', 'OpenCV', 'Python'],
    image: '🎯',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-950 to-tech-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Proyectos destacados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-lightBlue mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-gradient-to-br from-primary-900/50 to-primary-950/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary-800/30 hover:border-tech-blue/50 transition-all duration-300 shadow-lg hover:shadow-tech-blue/20"
            >
              <div className="p-8">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <h3 className="text-2xl font-semibold font-display text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 text-sm bg-tech-blue/20 text-tech-lightBlue border border-tech-blue/30 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

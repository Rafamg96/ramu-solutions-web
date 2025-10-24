'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const team = [
  {
    name: 'Rafael Muñoz González',
    role: 'Ingeniero en Inteligencia artificial',
    specialty: 'Deep Learning & NLP',
    avatar: '👨‍💻',
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-tech-dark to-primary-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Nuestro equipo
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-lightBlue mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 max-w-md mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-primary-900/50 to-primary-950/50 backdrop-blur-sm p-8 rounded-xl border border-primary-800/30 hover:border-tech-blue/50 transition-all duration-300 shadow-lg hover:shadow-tech-blue/20">
                <div className="text-7xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold font-display text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-tech-lightBlue font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm">
                  {member.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

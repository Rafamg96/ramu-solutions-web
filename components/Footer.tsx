'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-dark border-t border-primary-900/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-display text-white mb-3">
              RaMu Solutions
            </h3>
            <p className="text-gray-400 text-sm">
              Desarrollamos soluciones inteligentes con IA para empresas y startups.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-tech-lightBlue transition-colors text-sm">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-tech-lightBlue transition-colors text-sm">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-tech-lightBlue transition-colors text-sm">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-tech-lightBlue transition-colors text-sm">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Síguenos</h4>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-900/50 hover:bg-tech-blue rounded-lg flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <span className="text-xl">💻</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-900/50 hover:bg-tech-blue rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-xl">💼</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:contact@ramusolutions.com"
                className="w-10 h-10 bg-primary-900/50 hover:bg-tech-blue rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <span className="text-xl">📧</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-900/30 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} RaMu Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

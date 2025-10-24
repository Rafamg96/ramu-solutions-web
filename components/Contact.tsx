'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, FormEvent } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget; // Guardar referencia al formulario
    const webhookUrl = process.env.NEXT_PUBLIC_RAMU_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.error('RAMU_WEBHOOK_URL no está configurada');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset(); // Usar la referencia guardada
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Contacta con nosotros
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-blue to-tech-lightBlue mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mb-4">
            ¿Tu empresa necesita inteligencia artificial? Hablemos
          </p>
          <p className="text-lg text-gray-400">
            📍 Alcázar de San Juan, Ciudad Real, Castilla-La Mancha<br />
            📞 Solicita tu consultoría gratuita
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-primary-900/50 to-primary-950/50 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-primary-800/30 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
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
                  required
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
                required
                className="w-full px-4 py-3 bg-primary-950/50 border border-primary-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-tech-blue transition-colors resize-none"
                placeholder="Cuéntanos qué necesita tu empresa: automatización, digitalización, formación en IA..."
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-900/50 border border-green-500/50 rounded-lg text-green-200 text-center">
                ✓ Mensaje enviado correctamente. Te contactaremos pronto.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-900/50 border border-red-500/50 rounded-lg text-red-200 text-center">
                ✗ Error al enviar el mensaje. Por favor, intenta de nuevo o contacta directamente a info@ramu-solutions.eu
              </div>
            )}

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-tech-blue hover:bg-tech-lightBlue text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-tech-blue/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar consultoría gratuita'}
              </motion.button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-primary-800/30 text-center">
            <p className="text-gray-300 mb-4">Empresas de Alcázar de San Juan y alrededores, contáctanos:</p>
            <a
              href="mailto:info@ramu-solutions.eu"
              className="inline-flex items-center text-tech-lightBlue hover:text-tech-blue transition-colors font-medium text-lg"
            >
              <span className="mr-2">📧</span>
              info@ramu-solutions.eu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import Link from 'next/link'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ramu Solutions',
    description: 'Agencia especializada en soluciones de Inteligencia Artificial para empresas',
    url: 'https://ramusolutions.com',
    logo: 'https://ramusolutions.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contacto@ramusolutions.com',
    },
    sameAs: [
      'https://linkedin.com/company/ramusolutions',
      'https://twitter.com/ramusolutions',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <header className="header">
        <div className="header-content">
          <div className="logo">Ramu Solutions</div>
          <nav className="nav">
            <Link href="#servicios">Servicios</Link>
            <Link href="#nosotros">Nosotros</Link>
            <Link href="#contacto">Contacto</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Transformamos tu negocio con Inteligencia Artificial</h1>
            <p>
              Somos Ramu Solutions, tu agencia especializada en desarrollar soluciones de IA 
              que impulsan la innovación y el crecimiento empresarial.
            </p>
            <Link href="#contacto" className="cta-button">
              Comienza tu transformación digital
            </Link>
          </div>
        </section>

        <section id="servicios" className="services">
          <div className="services-content">
            <h2>Nuestros Servicios</h2>
            <div className="services-grid">
              <article className="service-card">
                <h3>🤖 Desarrollo de Chatbots IA</h3>
                <p>
                  Creamos asistentes virtuales inteligentes que mejoran la atención al cliente 
                  y automatizan respuestas, disponibles 24/7 para tu negocio.
                </p>
              </article>
              
              <article className="service-card">
                <h3>📊 Análisis de Datos con IA</h3>
                <p>
                  Transformamos tus datos en insights accionables mediante modelos de machine 
                  learning que predicen tendencias y optimizan decisiones.
                </p>
              </article>
              
              <article className="service-card">
                <h3>⚙️ Automatización Inteligente</h3>
                <p>
                  Implementamos soluciones de automatización con IA para optimizar procesos, 
                  reducir costos y aumentar la eficiencia operativa.
                </p>
              </article>
              
              <article className="service-card">
                <h3>🎯 Consultoría en IA</h3>
                <p>
                  Asesoramos a tu empresa en la estrategia e implementación de tecnologías 
                  de inteligencia artificial alineadas con tus objetivos de negocio.
                </p>
              </article>
              
              <article className="service-card">
                <h3>🔍 Visión Artificial</h3>
                <p>
                  Desarrollamos sistemas de reconocimiento de imágenes y video para control 
                  de calidad, seguridad y análisis visual automatizado.
                </p>
              </article>
              
              <article className="service-card">
                <h3>💬 Procesamiento de Lenguaje Natural</h3>
                <p>
                  Implementamos soluciones de NLP para análisis de sentimientos, clasificación 
                  de textos y extracción automática de información.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="nosotros" className="about">
          <div className="about-content">
            <h2>Sobre Ramu Solutions</h2>
            <p>
              En Ramu Solutions, somos pioneros en la transformación digital a través de la 
              inteligencia artificial. Nuestro equipo de expertos combina conocimiento técnico 
              avanzado con una profunda comprensión de las necesidades empresariales.
            </p>
            <p>
              Nos especializamos en crear soluciones de IA personalizadas que se adaptan 
              perfectamente a tu industria y objetivos específicos. Desde startups hasta 
              grandes corporaciones, ayudamos a empresas de todos los tamaños a aprovechar 
              el poder de la inteligencia artificial.
            </p>
            <p>
              Nuestra misión es democratizar el acceso a la tecnología de IA, haciendo que 
              las soluciones más avanzadas estén al alcance de todas las empresas que buscan 
              innovar y crecer en la era digital.
            </p>
          </div>
        </section>

        <section id="contacto" className="contact">
          <div className="contact-content">
            <h2>¿Listo para transformar tu negocio?</h2>
            <p>
              Contáctanos hoy y descubre cómo la inteligencia artificial puede 
              llevar tu empresa al siguiente nivel.
            </p>
            <div className="contact-info">
              <a href="mailto:contacto@ramusolutions.com">📧 contacto@ramusolutions.com</a>
              <a href="tel:+34900000000">📱 +34 900 000 000</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Ramu Solutions. Todos los derechos reservados.</p>
          <p>Agencia de Inteligencia Artificial | Innovación y Tecnología</p>
        </div>
      </footer>
    </>
  )
}

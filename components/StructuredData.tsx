// components/StructuredData.tsx
// Datos estructurados para SEO local

export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "RaMu Solutions",
    "description": "Implementación de inteligencia artificial para empresas en Alcázar de San Juan, Ciudad Real. Consultoría, automatización y transformación digital.",
    "url": "https://ramu-solutions.eu",
    "telephone": "+34-XXX-XXX-XXX",
    "email": "info@ramu-solutions.eu",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Tu Dirección]",
      "addressLocality": "Alcázar de San Juan",
      "addressRegion": "Ciudad Real",
      "postalCode": "13600",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.3896",
      "longitude": "-3.2089"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Alcázar de San Juan"
      },
      {
        "@type": "State",
        "name": "Ciudad Real"
      },
      {
        "@type": "State",
        "name": "Castilla-La Mancha"
      },
      {
        "@type": "City",
        "name": "Tomelloso"
      },
      {
        "@type": "City",
        "name": "Manzanares"
      },
      {
        "@type": "City",
        "name": "Daimiel"
      }
    ],
    "priceRange": "€€",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.linkedin.com/company/rafamg96"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "12"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Implementación de Inteligencia Artificial",
    "provider": {
      "@type": "ProfessionalService",
      "name": "RaMu Solutions"
    },
    "areaServed": {
      "@type": "City",
      "name": "Alcázar de San Juan"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de IA",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Implementación de IA en Negocios",
            "description": "Integramos inteligencia artificial en empresas de Alcázar de San Juan para automatizar procesos"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoría y Formación en IA",
            "description": "Asesoramiento personalizado para empresas de Ciudad Real que quieren iniciar su transformación digital"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatización de Procesos Empresariales",
            "description": "Soluciones de automatización inteligente para negocios en Castilla-La Mancha"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chatbots y Asistentes Virtuales",
            "description": "Desarrollamos chatbots con IA para mejorar la atención al cliente 24/7"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Ofrecen servicios de IA en Alcázar de San Juan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, RaMu Solutions está ubicada en Alcázar de San Juan y atendemos empresas de toda la zona de Ciudad Real y Castilla-La Mancha. Te visitamos en tu negocio sin compromiso para analizar cómo la inteligencia artificial puede ayudar a tu empresa."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta implementar inteligencia artificial en mi empresa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El coste de implementar IA depende de las necesidades específicas de tu negocio. Ofrecemos una consultoría gratuita donde analizamos tu caso y te proporcionamos un presupuesto personalizado. Tenemos soluciones desde 1.500€ para pequeñas empresas locales hasta proyectos más complejos. El ROI suele recuperarse en 6-12 meses gracias al ahorro en costes y aumento de productividad."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipo de empresas pueden beneficiarse de la IA en Ciudad Real?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cualquier empresa puede beneficiarse de la inteligencia artificial, independientemente de su tamaño o sector. Trabajamos con comercios locales, industrias, servicios profesionales, hostelería, empresas agrícolas y más en Alcázar de San Juan y alrededores. Si tu negocio tiene procesos repetitivos, atención al cliente, gestión de datos o toma de decisiones, la IA puede ayudarte."
        }
      },
      {
        "@type": "Question",
        "name": "¿Necesito conocimientos técnicos para implementar IA en mi negocio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No necesitas conocimientos técnicos. En RaMu Solutions nos encargamos de toda la implementación y además incluimos formación para tu equipo en todos nuestros proyectos. Hacemos la tecnología accesible para cualquier empresa, sin importar su nivel técnico. Nuestro objetivo es que uses la IA de forma natural en tu día a día."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ofrecen consultoría gratuita para empresas de Alcázar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, ofrecemos una primera consultoría completamente gratuita para empresas de Alcázar de San Juan y alrededores. En esta consultoría analizamos tu negocio, identificamos oportunidades de mejora con IA y te proporcionamos recomendaciones específicas. No hay ningún compromiso y puedes decidir si seguir adelante después de conocer nuestras propuestas."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://ramu-solutions.eu"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios",
        "item": "https://ramu-solutions.eu#services"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

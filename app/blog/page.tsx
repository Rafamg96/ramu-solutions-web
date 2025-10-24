import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Inteligencia Artificial y Desarrollo Web | RaMu Solutions',
  description: 'Artículos sobre implementación de IA, automatización empresarial y desarrollo web para empresas de Alcázar de San Juan y Ciudad Real.',
  keywords: 'blog IA, inteligencia artificial empresas, desarrollo web Ciudad Real, automatización negocios',
};

export default function BlogPage() {
  const articles = [
    {
      slug: 'ejemplo-articulo',
      title: 'Cómo Implementar Inteligencia Artificial en tu Empresa de Alcázar de San Juan',
      excerpt: 'Guía práctica para empresas de Ciudad Real que quieren digitalizar su negocio con inteligencia artificial. Paso a paso, casos reales y presupuestos.',
      date: '25 de octubre, 2025',
      readTime: '8 min',
      category: 'Inteligencia Artificial',
      icon: '🤖',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-tech-dark to-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <nav className="text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-tech-blue">Inicio</Link> → 
            <span className="ml-2 text-white">Blog</span>
          </nav>
          
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Blog de <span className="text-tech-blue">RaMu Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Artículos sobre inteligencia artificial, automatización empresarial y desarrollo web 
            para negocios en Alcázar de San Juan y Ciudad Real.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link 
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group"
            >
              <article className="bg-primary-900/30 border border-primary-800/30 rounded-xl p-6 h-full hover:border-tech-blue/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-5xl mb-4">{article.icon}</div>
                
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                  <span className="px-3 py-1 bg-tech-blue/20 rounded-full text-tech-lightBlue">
                    {article.category}
                  </span>
                  <span>📅 {article.date}</span>
                </div>

                <h2 className="text-2xl font-bold mb-3 group-hover:text-tech-blue transition-colors">
                  {article.title}
                </h2>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>⏱️ {article.readTime} lectura</span>
                  <span className="text-tech-blue group-hover:translate-x-2 transition-transform">
                    Leer más →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary-900/50 to-primary-950/50 border border-primary-800/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-4">📝 Próximamente más contenido</h2>
            <p className="text-gray-300 mb-6">
              Estamos preparando más artículos sobre IA, desarrollo web y automatización 
              para empresas locales de Castilla-La Mancha.
            </p>
            <Link 
              href="/#contact"
              className="inline-block px-8 py-4 bg-tech-blue hover:bg-tech-lightBlue text-white font-semibold rounded-lg transition-all"
            >
              Suscríbete a nuestro boletín
            </Link>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-primary-900/30 border border-primary-800/30 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-xl font-semibold mb-2">Inteligencia Artificial</h3>
            <p className="text-gray-400 text-sm">
              Implementación de IA en empresas locales
            </p>
          </div>
          
          <div className="bg-primary-900/30 border border-primary-800/30 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
            <p className="text-gray-400 text-sm">
              Webs modernas y optimizadas para SEO
            </p>
          </div>
          
          <div className="bg-primary-900/30 border border-primary-800/30 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Automatización</h3>
            <p className="text-gray-400 text-sm">
              Optimiza procesos empresariales
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

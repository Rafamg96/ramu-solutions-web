import type { Metadata } from 'next';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import StructuredData from '@/components/StructuredData';
import './globals.css';

export const metadata: Metadata = {
  title: 'Inteligencia Artificial para Empresas en Alcázar de San Juan | RaMu Solutions',
  description: 'Implementación de IA para digitalizar tu negocio en Alcázar de San Juan, Ciudad Real. Automatización inteligente, consultoría y transformación digital para empresas en Castilla-La Mancha.',
  keywords: 'inteligencia artificial Alcázar de San Juan, IA empresas Ciudad Real, digitalización negocios Castilla-La Mancha, automatización empresarial, consultoría IA cerca de mí, transformación digital empresas',
  authors: [{ name: 'RaMu Solutions' }],
  openGraph: {
    title: 'Inteligencia Artificial para Empresas en Alcázar de San Juan | RaMu Solutions',
    description: 'Implementación de IA para digitalizar tu negocio en Alcázar de San Juan. Transformamos empresas con tecnología inteligente.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'RaMu Solutions',
  },
  alternates: {
    canonical: 'https://ramu-solutions.eu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <StructuredData />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}



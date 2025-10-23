import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://ramusolutions.com'),
  title: {
    default: 'Ramu Solutions - Agencia de Inteligencia Artificial',
    template: '%s | Ramu Solutions'
  },
  description: 'Ramu Solutions es una agencia especializada en soluciones de Inteligencia Artificial para empresas. Transformamos tu negocio con IA de vanguardia.',
  keywords: ['inteligencia artificial', 'IA', 'machine learning', 'automatización', 'soluciones empresariales', 'agencia IA', 'Ramu Solutions'],
  authors: [{ name: 'Ramu Solutions' }],
  creator: 'Ramu Solutions',
  publisher: 'Ramu Solutions',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://ramusolutions.com',
    siteName: 'Ramu Solutions',
    title: 'Ramu Solutions - Agencia de Inteligencia Artificial',
    description: 'Transformamos tu negocio con soluciones de Inteligencia Artificial de vanguardia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ramu Solutions - Agencia de IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramu Solutions - Agencia de Inteligencia Artificial',
    description: 'Transformamos tu negocio con soluciones de Inteligencia Artificial de vanguardia',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

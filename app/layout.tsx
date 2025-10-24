import type { Metadata } from 'next';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

export const metadata: Metadata = {
  title: 'RaMu Solutions - Inteligencia Artificial para tu Empresa',
  description: 'Desarrollamos soluciones inteligentes con IA. Integración de inteligencia artificial para empresas y startups.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}



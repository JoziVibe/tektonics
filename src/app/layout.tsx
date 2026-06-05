import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ChatbotThemba } from '@/components/ChatbotThemba';
import { Toaster } from '@/components/ui/toaster';

export const viewport: Viewport = {
  themeColor: '#020c1b',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tektonics.africa'),
  title: {
    default: 'Tektonics Systems | Give Your Digital Real Estate A Voice',
    template: '%s | Tektonics Systems',
  },
  description: 'Tektonics Systems is a leading African provider of Data Center Infrastructure Management (DCIM), environmental monitoring, and resilient IT infrastructure solutions across the SADC region.',
  keywords: [
    'DCIM South Africa',
    'Data Center Management Africa',
    'Environmental Monitoring Data Center',
    'NetBotz South Africa',
    'OctaiPipe AI Cooling',
    'Data Center Infrastructure Management',
    'Server Room Monitoring',
    'IT Infrastructure Africa',
    'Notifications Gateway',
    'Schneider Electric Partner Africa'
  ],
  authors: [{ name: 'Tektonics Systems' }],
  creator: 'Tektonics Systems',
  publisher: 'Tektonics Systems',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://tektonics.africa',
    siteName: 'Tektonics Systems',
    title: 'Tektonics Systems | Resilient Data Center Infrastructure Solutions',
    description: 'Empowering African digital infrastructure with world-class DCIM, AI cooling, and environmental monitoring.',
    images: [
      {
        url: '/assets/Brand Identity/D2 Logo High-Resolution Transparent.png',
        width: 1200,
        height: 630,
        alt: 'Tektonics Systems Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tektonics Systems | Digital Real Estate Solutions',
    description: 'Precision monitoring and strategic optimization for modern African data centers.',
    images: ['/assets/Brand Identity/D2 Logo High-Resolution Transparent.png'],
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
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DCH51VQ20L" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DCH51VQ20L');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen">
        {children}
        <ChatbotThemba />
        <Toaster />
      </body>
    </html>
  );
}

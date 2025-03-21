import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Tryck Design - Professionellt tryckeri och designbyrå",
  description: "Vi erbjuder högkvalitativt tryck, design, profilprodukter och storformat för företag.",
  keywords: "tryckeri, designbyrå, grafisk design, profilprodukter, stockholm, företagstryck",
  openGraph: {
    title: "Tryck Design - Tryckeri & Designbyrå i Stockholm",
    description: "Vi hjälper företag att växa genom kreativa tryck- och designlösningar. Kvalitet och service i fokus sedan 2010.",
    url: "https://tryckdesign.se",
    siteName: "Tryck Design",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tryck Design - Professionellt tryckeri och designbyrå'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tryck Design - Tryckeri & Designbyrå i Stockholm",
    description: "Vi hjälper företag att växa genom kreativa tryck- och designlösningar. Kvalitet och service i fokus sedan 2010.",
    images: ['/twitter-image.jpg']
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  alternates: {
    canonical: "https://www.tryckochsant.se"
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  themeColor: '#ffffff'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

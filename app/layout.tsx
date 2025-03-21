import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';

const inter = Inter({ subsets: ["latin"] });

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Tryck Design - Tryckeri & Designbyrå i Stockholm",
    description: "Vi hjälper företag att växa genom kreativa tryck- och designlösningar. Kvalitet och service i fokus sedan 2010.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://www.tryckochsant.se"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter, Crimson_Text } from 'next/font/google';
import Navbar from '@/components/navigation/Navbar';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const crimsonText = Crimson_Text({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Krista's Portfolio",
  description: 'Product designer and storyteller',
  keywords: ['portfolio', 'product design', 'UX design', 'storytelling', 'creative writing'],
  authors: [{ name: 'Krista Liu' }],
  creator: 'Krista Liu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kristaliu.com',
    title: "Krista's Portfolio",
    description: 'Product designer and storyteller',
    siteName: "Krista's Portfolio",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Krista's Portfolio",
    description: 'Product designer and storyteller',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonText.variable}`}>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

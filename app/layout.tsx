import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ruben Otano — AI/ML Engineer',
  description:
    'AI/ML Engineer building production machine learning systems for medicine — medical imaging, clinical NLP, and real-time critical-care models.',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'Medical AI',
    'Deep Learning',
    'Computer Vision',
    'NVIDIA',
    'PyTorch',
  ],
  authors: [{ name: 'Ruben Otano' }],
  openGraph: {
    title: 'Ruben Otano — AI/ML Engineer',
    description:
      'Production machine learning for medicine: imaging, clinical NLP, and critical-care models.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#070a07',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

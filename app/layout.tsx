import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });
const space = Space_Grotesk({ variable: '--font-space', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://rtb-media.com'),
  title: 'Raise The Bar Media — Boutique PR & Marketing',
  description: 'Strategic storytelling and earned media for technology, sustainability, artists and athletes.',
  openGraph: {
    title: 'Raise The Bar Media — Boutique PR & Marketing',
    description: 'Raise the conversation.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Raise The Bar Media' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raise The Bar Media — Boutique PR & Marketing',
    description: 'Raise the conversation.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${space.variable}`}>{children}</body>
    </html>
  );
}

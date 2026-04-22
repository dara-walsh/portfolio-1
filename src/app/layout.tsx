import { Inter } from 'next/font/google';
import './globals.css';
import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import Animations from './animations';
import Header from '@/components/layout/header';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.bettinasosa.com';

const metaDescription =
  'Creative Builder · Software Engineer · Design Engineer. Product, code & craft.';

const ogImagePath = '/images/Bettina_s%20portfolio.jpeg';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dara Walsh Portfolio",
    template: "%s | Dara Walsh Portfolio"
  },
  description: metaDescription,
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: "Dara Walsh Portfolio",
    title: "Dara Walsh Portfolio",
    description: metaDescription,
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Bettina — Creative Builder, Software Engineer, Design Engineer"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bettina's portfolio",
    description: metaDescription,
    images: [ogImagePath]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className="overflow-scroll overflow-x-hidden">
        <Animations>
          <main>
            <Header />
            <div className="flex flex-col bg-background text-foreground">
              <main className={`flex-grow ${inter.className}`}>{children}</main>
              <Analytics />
            </div>
            <Toaster />
          </main>
        </Animations>
      </body>
    </html>
  );
}

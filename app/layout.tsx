
import type { Metadata } from 'next';
import { Hind_Vadodara, DM_Serif_Display } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

import { config } from '@/config/app';
import { Providers } from './providers';

import './globals.css';

const hind = Hind_Vadodara({
  variable: '--font-hind', 
  subsets: ["latin"], 
  weight: '400', 
  display: 'swap' 
});

const dm = DM_Serif_Display({
  variable: '--font-dm', 
  subsets: ["latin"], 
  weight: '400', 
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.name}`,
    default: config.name, 
  },
  applicationName: config.name,
  description: 'Ice is a framework for Next.js',
  keywords: ['blazed', 'labs', 'software', 'solutions', 'company'],
  publisher: 'Blazed Labs LLC',
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/'},
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png'}
    ],
    shortcut: '/icons/mstile-150x150.png',
    apple: [
      { url: '/icons/apple-touch-icon.png', type: 'image/png' },
      { url: '/icons/apple-touch-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/icons/apple-touch-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/icons/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/icons/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#992323"
      },
      {
        rel: "shortcut icon",
        url: "/icons/favicon.ico"
      }
    ]
  },
  manifest: '/manifest.webmanifest',
};

const siteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: "https://blazedlabs.com",
  name: config.name,
  description: config.description,
  license: "https://blazedlabs.com/license"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dm.variable} ${hind.variable}`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <Providers>
          <section id="blz-app">
            <Header />
            <main role="main" className="bg-white dark:bg-gray-900">
              {children}
            </main>
            <Footer />
          </section>
        </Providers>
      </body>
    </html>
  )
}

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  icons: {
    icon: [{ url: '/favicon.ico', sizes: '48x48' }, { url: '/icon.svg', type: 'image/svg+xml' }, { url: '/icon-192.png', sizes: '192x192', type: 'image/png' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  applicationName: SITE.name,
  formatDetection: { telephone: false },
};
export const viewport: Viewport = { themeColor: '#10151C', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* lang is rewritten per language folder by scripts/postbuild.mjs */}
      <head>
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-T7SN8RQX"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3226858004021254" crossOrigin="anonymous"></script>
        <script dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

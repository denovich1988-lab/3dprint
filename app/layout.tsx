import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import './globals.css';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

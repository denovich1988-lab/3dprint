import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { dict } from '@/lib/i18n';

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">{dict('en').nav.skip}</a>
      <Header lang="en" />
      <main id="main">{children}</main>
      <Footer lang="en" />
    </>
  );
}

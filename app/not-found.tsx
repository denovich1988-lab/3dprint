import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default function NotFound() {
  return (
    <>
    <Header />
    <main id="main" className="wrap" style={{ padding: '64px 24px' }}>
      <h1>Page not found</h1>
      <p className="lead">This page does not exist. Try a converter or the 3D viewer.</p>
      <p><Link className="btn btn-accent" href="/converters/">All converters</Link></p>
    </main>
    <Footer />
    </>
  );
}

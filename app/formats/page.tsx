import Link from 'next/link';
import { FORMATS } from '@/lib/data/formats';
import { meta } from '@/lib/seo';

export const metadata = meta({ title: '3D File Formats Explained – STL, 3MF, STEP, OBJ, GLB', description: 'What STL, 3MF, OBJ, GLB, STEP, FBX, PLY, G-code and other 3D file formats store, which software uses them and how to convert them.', path: '/formats/' });

export default function Formats() {
  return (
    <div className="wrap">
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / File formats</nav>
      <header className="page-head"><h1>3D file formats</h1><p className="lead">What each format stores, where you meet it and how to convert it.</p></header>
      <div className="cols">
        {FORMATS.filter((f) => f.kind !== 'archive').map((f) => (
          <div className="card" key={f.id}><h3><Link href={`/formats/${f.id}/`}>{f.name}</Link> <span className="tag">.{f.id}</span></h3><p>{f.full}</p></div>
        ))}
      </div>
    </div>
  );
}

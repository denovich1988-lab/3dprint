// Generates the translated route folders app/(i18n)/<lang>/ for every language whose dictionary is not empty.
// The folders are build output (gitignored); edit components and lib/i18n/*.json instead.
import fs from 'node:fs';
import path from 'node:path';
const root = path.join('app', '(i18n)');
fs.rmSync(root, { recursive: true, force: true });
const langs = ['de', 'es', 'fr', 'it', 'ja', 'ko', 'pt', 'vi', 'th', 'zh'].filter((l) => {
  try { return Object.keys(JSON.parse(fs.readFileSync(`lib/i18n/${l}.json`, 'utf8'))).length > 0; } catch { return false; }
});
const files = (l) => ({
  'layout.tsx': `import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { dict } from '@/lib/i18n';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><a className="skip" href="#main">{dict('${l}').nav.skip}</a><Header lang="${l}" /><main id="main">{children}</main><Footer lang="${l}" /></>);
}
`,
  'page.tsx': `import HomePage from '@/components/HomePage';
import { pageMeta } from '@/lib/i18n/meta';
export const metadata = pageMeta('home', '${l}');
export default function Page() { return <HomePage lang="${l}" />; }
`,
  'converters/page.tsx': `import ConvertersPage from '@/components/ConvertersPage';
import { pageMeta } from '@/lib/i18n/meta';
export const metadata = pageMeta('converters', '${l}');
export default function Page() { return <ConvertersPage lang="${l}" />; }
`,
  '[slug]/page.tsx': `import ToolPage from '@/components/ToolPage';
import { tool } from '@/lib/data/tools';
import { pageMeta, toolSlugs } from '@/lib/i18n/meta';
export const dynamicParams = false;
export function generateStaticParams() { return toolSlugs(); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return pageMeta('tool', '${l}', slug); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; return <ToolPage t={tool(slug)!} lang="${l}" />; }
`,
});
for (const l of langs) for (const [f, c] of Object.entries(files(l))) {
  const p = path.join(root, l, f); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, c);
}
console.log(`locales: ${langs.length ? langs.join(', ') : 'none (English only)'}`);

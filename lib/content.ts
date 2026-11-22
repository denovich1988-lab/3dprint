import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

export type Doc = {
  slug: string;
  file: string;
  title: string;
  seoTitle?: string;
  description: string;
  date: string;
  updated?: string;
  category?: string;
  summary?: string[];
  faq?: { q: string; a: string }[];
  sources?: { name: string; url: string }[];
  related?: string[];
  tools?: string[];
  brand?: string;
  specs?: [string, string][];
  html: string;
  words: number;
  [k: string]: any;
};

const root = path.join(process.cwd(), 'content');

export function listDocs(dir: 'blog' | 'printers' | 'pages'): Doc[] {
  const d = path.join(root, dir);
  if (!fs.existsSync(d)) return [];
  return fs.readdirSync(d)
    .filter((f) => f.endsWith('.md'))
    .map((f) => readDoc(dir, f))
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

function readDoc(dir: string, f: string): Doc {
  const raw = fs.readFileSync(path.join(root, dir, f), 'utf8');
  const { data, content } = matter(raw);
  const slug = data.slug || f.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
  const html = marked.parse(content, { gfm: true, async: false }) as string;
  const norm = (v: any) => (v instanceof Date ? v.toISOString().slice(0, 10) : v ? String(v) : undefined);
  return {
    ...data,
    slug, file: f,
    title: data.title, description: data.description,
    date: norm(data.date)!, updated: norm(data.updated),
    // Remote illustration → local WebP made by scripts/fetch-images.mjs; only used if the file exists.
    image: typeof data.image === 'string' && fs.existsSync(path.join(process.cwd(), 'public', 'images', dir, `${slug}.webp`)) ? `/images/${dir}/${slug}.webp` : undefined,
    html: html.replace(/<a href="(https?:\/\/(?!my3dprinter\.io)[^"]+)"/g, '<a href="$1" rel="nofollow noopener" target="_blank"'),
    words: content.split(/\s+/).filter(Boolean).length,
  } as Doc;
}

export function getDoc(dir: 'blog' | 'printers' | 'pages', slug: string) {
  return listDocs(dir).find((d) => d.slug === slug);
}

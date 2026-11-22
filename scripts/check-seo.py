#!/usr/bin/env python3
"""SEO checks for the built site in dist/: titles, descriptions, H1, canonical, JSON-LD, internal links."""
import json, os, re, sys, html
D = 'dist'
pages = {}
for root, _, files in os.walk(D):
    for f in files:
        if f == 'index.html':
            url = '/' + os.path.relpath(root, D).replace('\\', '/') + '/'
            url = '/' if url == '/./' else url
            pages[url] = open(os.path.join(root, f), encoding='utf8').read()
issues, titles, descs = [], {}, {}
for url, h in pages.items():
    if url.startswith('/404') or url.startswith('/_not-found'): continue
    t = re.search(r'<title>(.*?)</title>', h, re.S)
    d = re.search(r'<meta name="description" content="(.*?)"', h)
    title = html.unescape(t.group(1)) if t else ''
    desc = html.unescape(d.group(1)) if d else ''
    if not title: issues.append(f'{url}: missing title')
    elif len(title) > 78: issues.append(f'{url}: title {len(title)} chars')
    if not (70 <= len(desc) <= 165): issues.append(f'{url}: description {len(desc)} chars')
    titles.setdefault(title, []).append(url); descs.setdefault(desc, []).append(url)
    n = len(re.findall(r'<h1[\s>]', h))
    if n != 1: issues.append(f'{url}: {n} h1')
    if 'rel="canonical"' not in h: issues.append(f'{url}: no canonical')
    for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', h, re.S):
        try: json.loads(m.group(1))
        except Exception as e: issues.append(f'{url}: bad JSON-LD {e}')
    for href in re.findall(r'href="(/[^"#?]*)"', h):
        if href.startswith('/_next') or re.search(r'\.(svg|png|webp|jpg|xml|txt|ico|css|js|wasm|webmanifest)$', href): continue
        if not href.endswith('/'): href += '/'
        if href not in pages: issues.append(f'{url}: broken link {href}')
    for href in re.findall(r'<a [^>]*href="(https?://[^"]+)"', h):
        if 'my3dprinter.io' not in href: issues.append(f'{url}: external link {href} (owner rule: no external links)')
for k, v in titles.items():
    if len(v) > 1: issues.append(f'duplicate title {k!r}: {v}')
for k, v in descs.items():
    if len(v) > 1 and k: issues.append(f'duplicate description: {v}')
print(f'{len(pages)} pages checked, {len(issues)} issues')
for i in sorted(set(issues))[:80]: print(' -', i)
sys.exit(1 if issues else 0)

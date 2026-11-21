export const SITE = {
  name: 'my3dprinter.io',
  url: (process.env.SITE_URL || 'https://my3dprinter.io').replace(/\/$/, ''),
  tagline: 'Free 3D file converters, viewers and 3D printer guides',
  company: 'OUTRANKING LTD',
  email: 'hello@my3dprinter.io',
};
export const abs = (p: string) => SITE.url + (p.startsWith('/') ? p : '/' + p);

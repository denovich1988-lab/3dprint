import path from 'node:path';
/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(process.cwd());
    return config;
  },
};

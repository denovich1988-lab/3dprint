import type { MetadataRoute } from 'next';
import { abs } from '@/lib/site';
export const dynamic = 'force-static';
// Search engines and AI assistants are welcome: the site wants to be cited in AI answers.
const AI = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot', 'Applebot-Extended', 'Bingbot', 'DuckAssistBot', 'MistralAI-User', 'meta-externalagent', 'Amazonbot', 'YouBot', 'cohere-ai'];
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/_next/static/chunks/*.map'] }, { userAgent: AI, allow: '/' }],
    sitemap: abs('/sitemap.xml'),
    host: abs('/'),
  };
}

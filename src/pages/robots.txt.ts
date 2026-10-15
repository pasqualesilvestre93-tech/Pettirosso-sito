import type { APIRoute } from 'astro';

// Demo: tutto bloccato. Sito definitivo (DEMO=false): accesso libero, area admin esclusa, sitemap dichiarata.
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const body = __DEMO__
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nDisallow: ${base}/admin/\n\nSitemap: ${new URL(`${base}/sitemap-index.xml`, site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

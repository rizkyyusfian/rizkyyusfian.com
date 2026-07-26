import type { APIRoute } from 'astro';

// On-demand: current view/visitor totals from Umami.
export const prerender = false;

const env = (k: string) => import.meta.env[k] || process.env[k];

// Site launch — the start of the "all time" window.
const LAUNCH = Date.UTC(2026, 6, 1); // 2026-07-01

export const GET: APIRoute = async () => {
  const headers = { 'content-type': 'application/json', 'cache-control': 'public, max-age=300' };

  const base = (env('UMAMI_API_URL') || 'https://api.umami.is').replace(/\/$/, '');
  const shareId = env('UMAMI_SHARE_ID'); // free plan: "Share URL" feature
  let websiteId = env('UMAMI_WEBSITE_ID');
  const apiKey = env('UMAMI_API_KEY'); // Umami Cloud (paid)
  const bearer = env('UMAMI_API_TOKEN'); // self-hosted token

  if (!shareId && (!websiteId || (!apiKey && !bearer))) {
    return new Response(JSON.stringify({ ok: false, reason: 'no-config' }), { status: 200, headers });
  }

  try {
    let authHeaders: Record<string, string>;

    if (shareId) {
      // Exchange the public share id for a short-lived token (no API key needed).
      const s = await fetch(`${base}/api/share/${shareId}`);
      if (!s.ok) throw new Error(`umami share ${s.status}`);
      const sj = await s.json();
      if (!sj?.token) throw new Error('no share token');
      websiteId = sj.websiteId ?? websiteId;
      authHeaders = { 'x-umami-share-token': sj.token };
    } else if (apiKey) {
      authHeaders = { 'x-umami-api-key': apiKey };
    } else {
      authHeaders = { Authorization: `Bearer ${bearer}` };
    }

    const url = `${base}/api/websites/${websiteId}/stats?startAt=${LAUNCH}&endAt=${Date.now()}`;
    const res = await fetch(url, { headers: authHeaders });
    if (!res.ok) throw new Error(`umami ${res.status}`);
    const d = await res.json();
    // Umami returns { pageviews: { value }, visitors: { value }, ... }
    const views = d?.pageviews?.value ?? d?.pageviews ?? 0;
    const visitors = d?.visitors?.value ?? d?.visitors ?? 0;
    return new Response(JSON.stringify({ ok: true, views, visitors }), { status: 200, headers });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, reason: String(e) }), { status: 200, headers });
  }
};

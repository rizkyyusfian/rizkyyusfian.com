import type { APIRoute } from 'astro';

// On-demand: reflects what's playing right now.
export const prerender = false;

const env = (k: string) => import.meta.env[k] || process.env[k];

async function getAccessToken(id: string, secret: string, refresh: string): Promise<string | null> {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString('base64')}`,
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token: refresh }),
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json.access_token ?? null;
}

export const GET: APIRoute = async () => {
  const headers = { 'content-type': 'application/json', 'cache-control': 'public, max-age=30' };
  const id = env('SPOTIFY_CLIENT_ID');
  const secret = env('SPOTIFY_CLIENT_SECRET');
  const refresh = env('SPOTIFY_REFRESH_TOKEN');

  if (!id || !secret || !refresh) {
    return new Response(JSON.stringify({ ok: false, playing: false, reason: 'no-creds' }), { status: 200, headers });
  }

  try {
    const token = await getAccessToken(id, secret, refresh);
    if (!token) throw new Error('token');

    const opts = { headers: { Authorization: `Bearer ${token}` } };
    let res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', opts);

    // 204 = nothing playing → fall back to most recently played.
    if (res.status === 204 || res.status === 202) {
      const recent = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', opts);
      const rj = await recent.json();
      const t = rj?.items?.[0]?.track;
      if (!t) return new Response(JSON.stringify({ ok: true, playing: false }), { status: 200, headers });
      return new Response(
        JSON.stringify({
          ok: true, playing: false, recent: true,
          title: t.name, artist: t.artists.map((a: any) => a.name).join(', '),
          url: t.external_urls?.spotify, image: t.album?.images?.at(-1)?.url ?? null,
        }),
        { status: 200, headers }
      );
    }
    if (!res.ok) throw new Error(`spotify ${res.status}`);
    const data = await res.json();
    const t = data?.item;
    if (!t) return new Response(JSON.stringify({ ok: true, playing: false }), { status: 200, headers });

    return new Response(
      JSON.stringify({
        ok: true, playing: !!data.is_playing,
        title: t.name, artist: t.artists.map((a: any) => a.name).join(', '),
        url: t.external_urls?.spotify, image: t.album?.images?.at(-1)?.url ?? null,
        progress: data.progress_ms, duration: t.duration_ms,
      }),
      { status: 200, headers }
    );
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, playing: false, reason: String(e) }), { status: 200, headers });
  }
};

import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  try {
    // Serve static assets from the "dist" folder
    return await getAssetFromKV(event);
  } catch (e) {
    return new Response('Not found', { status: 404 });
  }
}
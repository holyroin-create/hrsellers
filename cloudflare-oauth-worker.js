/**
 * HRSellers — Yönetici Paneli için GitHub OAuth Worker (Cloudflare Workers)
 * --------------------------------------------------------------------------
 * Bu worker, /admin panelinin GitHub ile GÜVENLI giriş yapmasını sağlar.
 * Şifre hiçbir yerde saklanmaz; giriş senin GitHub hesabınla yapılır.
 *
 * KURULUM (KILAVUZ.md Bölüm F'de adım adım anlatılır):
 *  1) GitHub'da bir "OAuth App" oluştur, Client ID + Client Secret al.
 *  2) Cloudflare → Workers → Create Worker → bu kodu yapıştır → Deploy.
 *  3) Worker → Settings → Variables kısmına şu iki gizli değişkeni ekle:
 *       GITHUB_CLIENT_ID      = (GitHub'ın verdiği Client ID)
 *       GITHUB_CLIENT_SECRET  = (GitHub'ın verdiği Client Secret)
 *  4) GitHub OAuth App'in "Authorization callback URL" alanına şunu yaz:
 *       https://<worker-adresin>.workers.dev/callback
 *  5) public/admin/config.yml içindeki base_url'i worker adresinle değiştir.
 */

const GH_AUTHORIZE = 'https://github.com/login/oauth/authorize';
const GH_TOKEN = 'https://github.com/login/oauth/access_token';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    // 1) Giriş başlangıcı: GitHub'a yönlendir
    if (pathname === '/auth') {
      const redirectUri = `${url.origin}/callback`;
      const state = crypto.randomUUID();
      const authUrl = new URL(GH_AUTHORIZE);
      authUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
      authUrl.searchParams.set('redirect_uri', redirectUri);
      authUrl.searchParams.set('scope', 'repo,user');
      authUrl.searchParams.set('state', state);
      return Response.redirect(authUrl.toString(), 302);
    }

    // 2) GitHub geri döndü: kodu token ile değiştir, panele gönder
    if (pathname === '/callback') {
      const code = url.searchParams.get('code');
      if (!code) return new Response('Missing code', { status: 400 });

      const tokenRes = await fetch(GH_TOKEN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });
      const data = await tokenRes.json();

      if (data.error || !data.access_token) {
        return htmlResponse(errorPage(data.error_description || data.error || 'Token alınamadı'));
      }

      // Decap CMS'in beklediği postMessage el sıkışması
      const content = JSON.stringify({ token: data.access_token, provider: 'github' });
      return htmlResponse(successPage(content));
    }

    // Kök: bilgi
    return new Response('HRSellers CMS OAuth worker çalışıyor. /auth ile giriş yapılır.', {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  },
};

function htmlResponse(body) {
  return new Response(body, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}

function successPage(content) {
  return `<!doctype html><html><head><meta charset="utf-8"/></head><body>
<p>Giriş yapılıyor, lütfen bekleyin…</p>
<script>
(function () {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:success:${content.replace(/</g, '\\u003c')}',
      e.origin
    );
    window.removeEventListener('message', receiveMessage, false);
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>
</body></html>`;
}

function errorPage(msg) {
  return `<!doctype html><html><head><meta charset="utf-8"/></head><body>
<h3>Giriş hatası</h3><p>${String(msg).replace(/</g, '&lt;')}</p>
<p>GitHub OAuth App ayarlarını ve worker değişkenlerini kontrol edin.</p>
</body></html>`;
}

# fbatactics.com (v3)

ABD'ye ithalat yapan ve pazaryerlerinde satan satıcılar için birincil kaynaklı İngilizce rehber sitesi. Astro 7 ile statik üretilir, GitHub Pages'te yayımlanır.

## Hızlı başlangıç
```bash
npm ci
npm run dev                 # http://localhost:4321
npm run check               # build + tüm kapılar (geliştirme modu)
RELEASE=1 CHECK_EXTERNAL=1 npm run check   # yayın öncesi; sahip bilgisi eksikse kırılır
```
Geliştirme bayrakları: `ALLOW_UNVERIFIED=1` (doğrulanmamış iddia), `ALLOW_PLACEHOLDERS=1` (eksik fotoğraf), `ALLOW_UNVERIFIED_IMAGES=1` (lisans denetimi bekleyen fotoğraf). Yayında hiçbiri kullanılmaz.

## Klasörler
| Yol | İçerik |
|---|---|
| `src/content/guides`, `src/content/marketplaces` | MDX sayfalar (sözleşme: docs/CONTENT_CONTRACT.md) |
| `data/claims/*.json` | İddia defteri; her iddia `verified_by ≠ produced_by` |
| `data/images.json` | Fotoğraf lisans kayıtları (docs/PHOTO_CONTRACT.md) |
| `data/*.json` | Araç oranları, sözlük, quiz, SSS, policy-log, key-dates, redirects |
| `tools/` | Kapılar (gate-*.mjs), postbuild (atıf birleştirme + yönlendirme sayfaları), OG görseli, haftalık kontrol |
| `docs/` | Proje belgeleri (aşağıda) |

## Kapılar (CI'da zorunlu)
- **gate:claims** — izinli kaynak alanları, insan-okur `source_url`, üretici ≠ doğrulayıcı, her iddia sayfada atıflı.
- **gate:images** — izinli lisanslar (PD, CC0, CC BY, Unsplash License), bağımsız lisans doğrulaması, boyut bütçesi, width/height/alt.
- **gate:policy** — zorunlu sayfalar, ads.txt, yasaklı ifadeler, reklamsız sayfa listesi, tek H1, canonical, açıklama, ≥1.200 kelime, kaynak listesi; `RELEASE=1` iken sahip alanları ve `reviewedBy`.
- **gate:links** — iç bağlantılar (+ `CHECK_EXTERNAL=1` ile dış).
- **gate:html** — html-validate.
- Lighthouse CI (deploy.yml).

## Yayın (GitHub Pages)
1. Depoyu GitHub'a gönder; Settings → Pages → Source: **GitHub Actions**.
2. `public/CNAME` = `fbatactics.com`. DNS: apex için A kayıtları `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; `www` için CNAME → `<kullanıcı>.github.io`.
3. Pages'te "Enforce HTTPS" aç.
4. `main`'e push → `.github/workflows/deploy.yml` kapıları `RELEASE=1` ile çalıştırır, geçerse yayımlar.
5. ⚠ GitHub Pages koşulları siteyi ticari işletme için değil diye tanımlar; reklamlı site gri alandır. Çıktı (`dist/`) Cloudflare Pages / Netlify gibi statik barındırıcılara değişiklik yapmadan taşınabilir.

## Sahip bilgileri (girildi)
Editör/yayıncı: Muhammet Ali TÜRK (Ankara, Türkiye) · iletişim: hrishesabi@outlook.com · `ownerConfirmed: true`. Yazar sayfası: /author/muhammet-ali-turk/ (yalnız CV bilgisi).
İsteğe bağlı ama önerilir: editör sayfaları okudukça frontmatter'a `reviewedBy` ve `reviewedDate` ekleyin; makalede "reviewed by … on …" olarak görünür.

## Search Console
Alan adı mülkü ekle (DNS TXT), `https://fbatactics.com/sitemap-index.xml` gönder. Eski URL'lerin durumu: `docs/URL_ENVANTERI.csv` (50 korundu, 84 aynı URL'de yeniden yazıldı, 19 yönlendirme, 0 adet 404).

## AdSense
1. Reklamlar kapalıyken başvur (`adsEnabled: false`). `google-adsense-account` meta etiketi ve `ads.txt` hazır.
2. AdSense → Privacy & messaging'de EEA/UK/CH için Google onaylı CMP mesajını yayımla → `googleCmpConfigured: true`.
3. Onaydan sonra makale sonu reklam birimini oluştur, sayısal kimliği `adSlots.endOfArticle`'a yaz, `adsEnabled: true`.
4. Reklam yalnızca rehber/ücret sayfalarında render edilir; hub, araç, yasal sayfalar ve 404 reklamsızdır.
5. Kendi reklamına tıklama, ücretli/teşvikli trafik alma.

## Bakım
- `npm run recheck` (haftalık Actions da çalıştırır): kaynak URL'leri kontrol eder, değişiklik raporu üretir.
- Bir rakam değişirse: iddiayı güncelle → ikinci kişi doğrulasın → `modified`/`lastVerified` → gerekiyorsa `data/corrections.json`.
- `npm run export:claims` → docs/IDDIA_KAYIT_DEFTERI.csv/.json.
- Fotoğraf: editör manifestleri `data/images-*.json` → `npm run merge:images` → bağımsız lisans denetimi → `status: verified`.

## Belgeler (docs/)
NIS_KARARI · KARAR_GUNLUGU · POLITIKA_KONTROL_LISTESI · ICERIK_PLANI · URL_ENVANTERI.csv · IDDIA_KAYIT_DEFTERI.csv/.json · TASARIM_ANALIZI · TASARIM_SISTEMI · ARAC_PLANI · DENETIM_RAPORU · 90_GUN_PLANI · PROJE_DURUMU · CONTENT_CONTRACT · PHOTO_CONTRACT · verification/ · image-licenses/

## Lisans
Kod: MIT (LICENSE). İçerik (metin, grafikler): tüm hakları saklıdır (LICENSE-CONTENT). Fontlar: OFL (public/licenses). Fotoğraflar: her biri kendi lisansıyla, `/image-credits/` ve `data/images.json`.

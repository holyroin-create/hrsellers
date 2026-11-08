# TASARIM SİSTEMİ (src/styles/site.css)

## Renk
| Token | Değer | Kullanım | Kontrast |
|---|---|---|---|
| navy | #0b1f33 | Başlık, koyu bantlar, footer | Beyaz üzerinde 16:1 |
| ink / ink-2 | #0f1b2a / #33475b | Gövde metni | ≥ 9:1 |
| ink-3 (meta) | #526173 | Tarih, ipucu | 6.1:1 |
| cta | #cf4c0a | Birincil buton zemini (beyaz metin) | ≥ 4.5:1 |
| orange | #f26a21 | Yalnız dekoratif çizgi/ikon | metin için kullanılmaz |
| blue (link) | #1d5fd1 | Bağlantılar | 5.6:1 |
| teal, green | — | Callout tip/note | — |

## Tipografi
Plus Jakarta Sans Variable (başlıklar), Inter Variable (gövde), JetBrains Mono (rakam/kod). Hepsi OFL, @fontsource ile kendi sunucumuzdan; Google Fonts isteği yok (gizlilik).
Ölçek: H1 clamp(2rem, 4vw, 3.25rem) · H2 1.6rem · gövde 1.0625rem / 1.7.

## Yerleşim
Kapsayıcı 1200px; makale gövdesi 720px + 280px yapışkan kenar. 8px aralık ızgarası. Köşe yarıçapı 14px kart, 999px hap buton.

## Bileşenler
Header (yapışkan, mega menü, 6 menü) · Hero · Features · Duo/Promo/Darklog · Pillar card · Numbers board · Article card (.acard, .pchip) · Tool card · Calculator (giriş beyaz / çıkış lacivert) · Quiz · FAQ akordeon · CTA banner · Footer.
Makale içi MDX: `C` (atıf), Callout (tip|note|warning|example), Steps, Timeline, Chart (orijinal SVG), Compare, Decision, Checklist, Stat, kaynaklı tablolar.

## Görsel kuralları
WebP 480/960/1600 (+1920 kahraman), bütçe 60/140/260/300 KB; her `<img>` width/height/alt; "Illustrative photo:" başlıkları; lisans kanıtı data/images.json.

## Erişilebilirlik
Odak halkası 3px; atla bağlantısı; tek H1; menüler klavye ile; renk tek başına anlam taşımaz; `prefers-reduced-motion` desteği; yazdırma stili.

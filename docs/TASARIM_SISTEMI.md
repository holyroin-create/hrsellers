# TASARIM SİSTEMİ (kaynak: src/styles/global.css)

## Token'lar
| Token | Değer | Rol |
|---|---|---|
| --ink | #15202b | metin, masthead, footer |
| --ink-2 / --ink-3 | #3d4a57 / #5f6b77 | ikincil / meta metin (kâğıt üzerinde ≥4.5:1) |
| --paper / --sheet | #fbfaf7 / #ffffff | sayfa / panel |
| --rule / --rule-2 | #d9d4ca / #ece8e0 | çizgiler |
| --tag | #b4400f | tek vurgu: CTA, aktif menü, numara, odak halkası |
| --link | #1c4f86 | bağlantı |
| --data-1/2/3 | #1c4f86 / #c26a00 / #2f7a6d | grafik serileri (yalnız renge dayanmaz: değer etiketi + tablo) |
| --serif / --sans / --mono | Source Serif 4 / IBM Plex Sans / IBM Plex Mono | başlık / gövde / tarih-sayı-kaynak |
| --r | 3px | tek köşe yarıçapı, az kullanılır |
| boşluk | .25 .5 .75 1 1.5 2 3 4.5 rem | --s1…--s8 |
| --measure | 68ch | gövde satır uzunluğu |

Gölge yalnızca açılır menü panelinde. Gradyan, cam efekt, glow, emoji ikon yok.

## Bileşenler
- **Header**: utility şeridi, marka işareti, `<details>` tabanlı klavye erişimli açılır menüler (Esc kapatır), turuncu "Free calculators" CTA, mobilde Menü düğmesi; altında arama formu (/search/, istemci tarafı indeks).
- **Hero (makale)**: ön-madde `hero` alanından SVG — `stat` (büyük rakam + etiket), `flow` (numaralı adımlar), `timeline` (tarih noktaları), `compare` (yatay çubuklar). `role="img"` + tam metin `aria-label`, alt yazıda kaynak ve kontrol tarihi.
- **Summary box** ("In short"), **TOC** (yapışkan kenar çubuğu, ≥3 H2), **Callout** (note / warning / example), **Flow**, **Timeline**, **Bars** (SVG + "Show the data as a table"), **Checklist** (yazdır düğmesi; kayıt yok), **markdown tablo** (kaydırılabilir, sayısal hücreler tabular-nums).
- **C** (atıf işareti [n] → #src-id), **Sources** (yayıncı, iddia, alan adı, kaynak türü, kontrol tarihi), **Related**, **Breadcrumbs** (+ BreadcrumbList JSON-LD).
- **AdSlot**: yalnızca `adsEnabled && googleCmpConfigured && slot id` ise render; "Advertisement" etiketi; min-height 280–300px (CLS); makale içeriği bittikten sonra, kaynaklardan önce.
- **Tool layout**: iki fieldset (girdi / `aria-live` sonuç), formüller ve sınırlar bölümü, kaynaklar.
- **Index rows**: tarih kolonlu satır listesi (kart ızgarası yerine).
- **Boş/hata durumları**: 404 (çekilen rehberleri açıklar), arama "sonuç yok" metni, politika günlüğü boş metni, hesaplayıcıda eksik girdi uyarısı.

## Erişilebilirlik
Skip link, tek H1, landmark'lar, görünür odak (3px pas), form label'ları, grafiklerde metin eşdeğeri, `prefers-reduced-motion`, yazdırma stilleri.

## Kırılma noktaları
960px (menü ve iki kolonlu düzenler tek kolona), 860px (footer 2 kolon), 720px (flow dikey, satır listesi tek kolon, hesaplayıcı tek kolon).

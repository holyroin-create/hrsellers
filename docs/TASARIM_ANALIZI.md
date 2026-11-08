# TASARIM ANALİZİ — referans PNG (ee1746a7-image.jpg)

## Gözlem
- **Izgara:** 1408 px tuval; üst şerit (logo + 6 açılır menü + turuncu CTA), ortalanmış arama çubuğu, iki kolonlu hero (sol başlık/CTA, sağ insan fotoğrafı + pazaryeri logoları), hero'ya taşan "Fee Changes Log" kartı + 2×2 özellik kartı ızgarası.
- **Boşluk/yoğunluk:** orta yoğunluk; kartlar 16–24 px iç boşluk; hero geniş beyaz alan.
- **Tipografi:** tek grotesk aile; koyu lacivert başlık (~40 px), gri gövde; menü 16 px.
- **Renk rolleri:** lacivert metin, turuncu birincil CTA, mavi ikincil CTA (Open Log), açık gri-mavi zemin.
- **Bileşenler:** açılır menü, arama, birincil/ikincil düğme, zaman çizelgesi listesi (tarih + başlık + özet), ikonlu özellik kartı.
- **Gezinme:** Get Started / Tools / Guides / News / References / About — görev odaklı ve anlaşılır.
- **Görsel kullanım:** bulanık depo/kutu fotoğrafı, gülümseyen erkek stok portresi, Amazon/Walmart/eBay/TikTok/Etsy logoları.
- **Reklam uygunluğu:** hero ve kartlar ekranı dolduruyor; reklam için doğal içerik sonu alanı yok.

## İşe yarayan (alınan fikir)
1. Ücret değişiklik günlüğünü ana sayfanın merkezine koymak — sitenin "güncel ve kaynaklı" vaadini ilk bakışta gösteriyor.
2. Görev odaklı menü grupları + belirgin "ücretsiz hesaplayıcılar" CTA'sı.
3. Arama çubuğunun başlık altında görünür olması.
4. Lacivert + turuncu karşıtlığı (güven + eylem).

## Kopyalanmayacak / sorunlu
- Pazaryeri logoları (marka "resmi ortak" izlenimi; marka kuralları) → kullanılmadı.
- Stok insan portresi (gerçek bir kişi gibi sunulma riski, "ekibimiz" çağrışımı) → kullanılmadı.
- Lisansı belirsiz arka plan fotoğrafı → kullanılmadı.
- Jenerik ikonlu 2×2 kart ızgarası (şablon izlenimi; talimat 7.3) → numaralı satır listeleri ile değiştirildi.
- Ortalanmış dev başlık + iki düğme kalıbı → sola hizalı başlık, sağda veri (günlük) paneli.
- Referanstaki "Undo" bağlantısı, "secrets" dili ve uydurma görünen tarih kayıtları (ör. "Jan 00") → yok.

## Özgün karşılık (uygulanan)
- Marka işareti: gümrük etiketi (delikli etiket + üç satır) — özgün SVG.
- Ana sayfa: sol başlık/vaat, sağda "Policy log" defteri (yalnızca doğrulanmış resmi duyurular, ajans adıyla); altında "Figures sellers ask about most" kaynaklı oran tablosu; dört konu kümesi numaralı listeler; koyu "araç şeridi".
- Tipografi: Source Serif 4 (başlık, belge/mevzuat karakteri) + IBM Plex Sans (gövde) + IBM Plex Mono (tarih, kaynak, sayısal) — hepsi OFL, yerel barındırılıyor.
- Renk: mürekkep #15202b, kâğıt #fbfaf7, tek vurgu "gümrük etiketi pası" #b4400f, bağlantı #1c4f86; grafikte renk-körlüğüne dayanıklı mavi/kehribar/turkuaz.
- Görsel öğeler: sayfa ön-maddesinden üretilen özgün SVG hero (stat / akış / zaman çizelgesi / karşılaştırma), Flow, Timeline, Bars (+ erişilebilir veri tablosu), yazdırılabilir Checklist, callout'lar.

Yan yana karşılaştırmada ortak olan yalnızca genel bilgi mimarisi (menü + arama + günlük); düzen, renk tonları, tipografi, işaret ve görseller farklı.

## Eksik
Tarayıcı bağlı olmadığı için masaüstü/tablet/mobil ekran görüntüsü QA'sı yapılamadı (talimat 7.4). Yerine: CSS kırılma noktaları 960/860/720 px; Lighthouse CI (mobil emülasyon) yayın kapısında.
